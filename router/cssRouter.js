const express = require('express');
const fs = require('fs');

const router = express.Router();

const bodyCSS = fs.readFileSync(`${__dirname}/../public/css/body.css`);

router.route('/css/body.css').get((req, res) => {
  res.end(bodyCSS);
});
