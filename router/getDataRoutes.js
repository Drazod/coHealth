const express = require('express');
const newsSliderController = require('../controller/newsSliderController.js');
const featuresController = require('../controller/featuresController.js');
const membersController = require('../controller/membersController.js');
const router = express.Router();

router.route('/get-6-nearest-news').get(newsSliderController.get6NearsestNews);
router.route('/getFeatures').get(featuresController.getAllFeatures);
router.route('/members').get(membersController.getAllMembers);
// router.route('/').get(newsSliderController.get6NearsestNews);

module.exports = router;
