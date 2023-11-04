const express = require('express');
const newsController = require('../controller/newsGetController.js');
const featuresController = require('../controller/featuresController.js');
const membersController = require('../controller/membersController.js');
const router = express.Router();

router.route('/get-6-nearest-news').get(newsController.get6NearsestNews);
router.route('/getAllNews').get(newsController.getAllNews);
router.route('/getFeatures').get(featuresController.getAllFeatures);
router.route('/members').get(membersController.getAllMembers);
// router.route('/').get(newsSliderController.get6NearsestNews);

module.exports = router;
