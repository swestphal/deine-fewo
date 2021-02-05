const express = require('express');
const router = express.Router();

//import fewos controller methods
const { getFewos } = require('../controllers/fewosControllers');


// get all Fewos =>  api/v1/fewos
router.route('/fewos').get(getFewos);

module.exports = router;