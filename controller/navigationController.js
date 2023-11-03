const fs = require('fs');

const navigation = fs.readFileSync(
  `${__dirname}/../public/template/navigation.html`
);
const addNavigation = (template) =>
  template.replace(/{%NAVIGATION-BAR%}/g, navigation);

module.exports = addNavigation;
