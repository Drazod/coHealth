const express = require('express');
const template = require('./../controller/templateController');

const router = express.Router();

router.get('/', template.getNewsTemplate);

router.route('/:name').get(template.getNewsItemTemplate);

module.exports = router;
