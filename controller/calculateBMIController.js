const fs = require('fs');
const addNavigation = require('./navigationController.js');

let calculateBMI = fs.readFileSync(
  `${__dirname}/../public/template/calculateBMI.html`,
  'utf-8'
);

calculateBMI = addNavigation(calculateBMI);

exports.getCalculateBMITemplate = (req, res) => {
  res.end(calculateBMI);
};
