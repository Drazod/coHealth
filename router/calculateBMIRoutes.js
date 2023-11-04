const express = require('express');
const calculateBMI = require('./../controller/calculateBMIController.js');

const router = express.Router();

router.get('/', calculateBMI.getCalculateBMITemplate);

module.exports = router;
