const express = require('express');
const news = require('./../controller/newsController');

const router = express.Router();

router.get('/', news.getNewsTemplate);
router.get('/fetch', news.fetchNewsTemplate);

module.exports = router;
