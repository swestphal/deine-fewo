const Fewo = require('./../models/Fewo');
//const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('./../middleware/async')
const geocoder = require('../utils/geocoder')

// @desc    Get all fewos
// @route   GET /api/v1/fewos
// @access  Public
exports.getFewos = asyncHandler(async (req, res, next) => {

    const fewos = await Fewo.find();
    res.status(200).json({
        success: true,
        count: fewos.length,
        data: fewos,
    })

})


// @desc    Get single fewo
// @route   GET /api/v1/fewos/:id
// @access  Public
exports.getFewo = asyncHandler(async (req, res, next) => {

    const fewo = await Fewo.findById(req.params.id)

    if (!fewo) {
        return next(err)
    }
    res.status(200).json({
        success: true,
        data: fewo
    })

})



// @desc    Create new fewo
// @route   POST /api/v1/fewos
// @access  Private
exports.createFewo = asyncHandler(async (req, res, next) => {

    const fewo = await Fewo.create(req.body)
    res.status(201).json({
        success: true,
        data: fewo
    })

})


// @desc    Update fewo
// @route   PUT /api/v1/fewos/:id
// @access  Private
exports.updateFewo = asyncHandler(async (req, res, next) => {

    const fewo = await Fewo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    if (!fewo) {
        return next(err)
    }

    res.status(200).json({ success: true, data: fewo })

})


// @desc    Delete fewo
// @route   POST /api/v1/fewos/:id
// @access  Private
exports.deleteFewo = asyncHandler(async (req, res, next) => {

    const fewo = await Fewo.findByIdAndDelete(req.params.id)
    if (!fewo) {
        return next(err)
    }
    res.status(200).json({ success: true, data: {} })
}
)


// @desc    Get fewos within a radius
// @route   GET /api/v1/fewos/radiu/:zipcode/:distance
// @access  Public
exports.getFewoaInRadius = asyncHandler(async (req, res, next) => {

    const { zipcode, distance } = req.params;

    // get lat/lng
    const loc = await geocoder.geocode(zipcode)
    const lat = loc[0].latitude;
    const lng = loc[0].longitude;

    // calc radius using radians
    // divide dist by radius of Earth
    // eart radius = 3.963 mi / 6.378 km
    const radius = distance / 3963
    const fewos = await Fewo.find({
        location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
    })
    console.log(fewos)
    res.status(200).json({
        success: true,
        count: fewos.length,
        data: fewos
    })
}
)


