const express = require('express');
const newsGetController = require('../controller/newsGetController.js');
const featuresController = require('../controller/featuresController.js');
const membersController = require('../controller/membersController.js');
const router = express.Router();

router.route('/get-6-nearest-news').get(newsGetController.get6NearsestNews);
router.route('/getAllNews').get(newsGetController.getAllNews);
router.route('/getFeatures').get(featuresController.getAllFeatures);
router.route('/members').get(membersController.getAllMembers);
router.route('/getNews/:name').get(newsGetController.getNewsItem);
// router.route('/').get(newsSliderController.get6NearsestNews);

module.exports = router;
