const express = require('express')

const {
    getFewos,
    getFewo,
    createFewo,
    updateFewo,
    deleteFewo,
    getFewosInRadius
} = require('./../controllers/fewos')

const router = express.Router()

router
    .route('/radius/:zipcode/:distance')
    .get(getFewosInRadius)

router
    .route('/')
    .get(getFewos)
    .post(createFewo)

router
    .route('/:id')
    .get(getFewo)
    .put(updateFewo)
    .delete(deleteFewo)

module.exports = router