const fs = require('fs');
const addNavigation = require('./navigationController.js');

let homePage = fs.readFileSync(
  `${__dirname}/../public/template/homePage.html`,
  'utf-8'
);

homePage = addNavigation(homePage);
// console.log(homePage);

exports.getHomePageTemplate = (req, res) => {
  res.end(homePage);
};
