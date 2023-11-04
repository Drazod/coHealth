const express = require('express');
const homePage = require('./../controller/homepageController.js');

const router = express.Router();

router.get(['/', '/home', '/aboutUs'], homePage.getHomePageTemplate);

module.exports = router;
