const mongoose = require('mongoose');
const slugify = require('slugify')
const geocoder = require('./../utils/geocoder')

// TODO Check, perhaps address with street, number etc.

const FewoSchema = new mongoose.Schema(
    {
        titel: {
            type: String,
            required: [true, 'Bitte einen Namen für die Ferienwohnung eingeben'],
            unique: true,
            maxlength: [50, 'Der Name darf nicht länger als 50 Zeichen sein']
        },
        slug: String,
        descriptionShort: {
            type: String,
            required: [true, 'Eine Kurzbeschreibung wird benötigt'],
            maxlength: [500, 'Die Kurzbeschreibung darf nicht länger als 50 Zeichen sein']
        },
        website: {
            type: String,
            match: [
                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                'Gültige Webseitenadresse mit https eingeben'
            ]
        },
        phone: {
            type: String,
            maxlength: [20, 'Die Telefonnummer kann nicht länger als 20 Zeichen sein']
        },
        email: {
            type: String,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Gültige E-Mail Adresse eingeben'
            ]
        },
        address: {
            type: String,
            required: [true, 'Adresse eintragen']
        },
        location: {
            // GeoJSON Point
            type: {
                type: String,
                enum: ['Point']
            },
            coordinates: {
                type: [Number],
                index: '2dsphere'
            },
            formattedAddress: String,
            street: String,
            city: String,
            state: String,
            zipcode: String,
            country: String
        },
        typeAccomodation: {
            // Array of strings
            type: [String],
            required: true,
            enum: [
                'Ferienhaus',
                'Ferienwohnung',
                'Zimmer'
            ]
        },
        construction: Number,
        renovated: Number,
        guestsMax: Number,
        areaLiving: Number,
        areaProperty: Number,
        priceLowest: Number,
        priceHighest: Number,
        dtvClassification: {
            type: String,
            unique: true
        },
        countRooms: Number,
        countFloors: Number,
        countBedrooms: Number,
        countLivingrooms: Number,
        floor: {
            basement: { type: Boolean, required: false, default: false },
            mezzanine: { type: Boolean, required: false, default: false },
            ground: { type: Boolean, required: false, default: false },
            first: { type: Boolean, required: false, default: false },
            second: { type: Boolean, required: false, default: false }
        },
        accessible: Boolean,
        allergyFriendly: Boolean,
        familyFriendly: Boolean,
        dogFriendly: Boolean,
        seniorFriendly: Boolean,
        photo: {
            type: String,
            default: 'no-photo.jpg'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: false
        },
        landlord: {
            type: mongoose.Schema.ObjectId,
            ref: 'Landlord',
            required: false
        }
    }
);

// mongoose middleware


// create bootcamp slug from the name
FewoSchema.pre('save', function (next) {
    this.slug = slugify(this.title, { lower: true })
    next();
})

// geocode & create location field
FewoSchema.pre('save', async function (next) {

    const loc = await geocoder.geocode(this.address)

    // TODO Check loc 
    console.log(loc);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress,
        street: loc[0].streetNumber,
        city: loc[0].city,
        state: loc[0].stateCode,
        zipcode: loc[0].zipCode,
        country: loc[0].countryCode
    }


    next();
})


module.exports = mongoose.model('Fewo', FewoSchema);

