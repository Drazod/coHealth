const express = require('express');
const fs = require('fs');

const router = express.Router();

const homePage = fs.readFileSync(
  `${__dirname}/../public/template/homePage.html`,
  'utf-8'
);

const gettingHomePageTemplate = (req, res) => {
  res.end(homePage);
};

router.route('/').get(gettingHomePageTemplate);

module.exports = router;
