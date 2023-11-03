const fs = require('fs');
const addNavigation = require('./navigationController');

let newsTemplate = fs.readFileSync(
  `${__dirname}/../public/template/news.html`,
  'utf-8'
);
newsTemplate = addNavigation(newsTemplate);
exports.getNewsTemplate = (req, res) => {
  res.end(newsTemplate);
};

exports.fetchNewsTemplate = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      newsTemplate,
    },
  });
};
