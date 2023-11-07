const fs = require('fs');
const addNavigation = require('./navigationController');

const homePageTemplate = addNavigation(
  fs.readFileSync(`${__dirname}/../public/template/homePage.html`, 'utf-8')
);

const calculateBMITemplate = addNavigation(
  fs.readFileSync(`${__dirname}/../public/template/calculateBMI.html`, 'utf-8')
);

const newsTemplate = addNavigation(
  fs.readFileSync(`${__dirname}/../public/template/news.html`, 'utf-8')
);

const newsItemTemplate = addNavigation(
  fs.readFileSync(`${__dirname}/../public/template/newsItem.html`, 'utf-8')
);

const findHospitalTemplate = addNavigation(
  fs.readFileSync(`${__dirname}/../public/template/findHospital.html`, 'utf-8')
);

//////////////////////////// EXPORT TEMPLATES /////////////////////////////////

exports.getNewsTemplate = (req, res) => {
  res.end(newsTemplate);
};

exports.getNewsItemTemplate = async (req, res) => {
  res.end(newsItemTemplate);
};

exports.getHomePageTemplate = (req, res) => {
  res.end(homePageTemplate);
};

exports.getCalculateBMITemplate = (req, res) => {
  res.end(calculateBMITemplate);
};

exports.getfindHospitalTemplate = (req, res) => {
  res.end(findHospitalTemplate);
};
