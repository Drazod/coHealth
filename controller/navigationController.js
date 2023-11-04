const fs = require('fs');

const navigation = fs.readFileSync(
  `${__dirname}/../public/template/navigation.html`,
  'utf-8'
);
const language = fs.readFileSync(
  `${__dirname}/../public/template/languageNavigationBar.html`,
  'utf-8'
);

const signin = fs.readFileSync(
  `${__dirname}/../public/template/signinNavigationBar.html`,
  'utf-8'
);

const register = fs.readFileSync(
  `${__dirname}/../public/template/registerNavigationBar.html`,
  'utf-8'
);

const addNavigation = (template) => {
  template = template.replace(/{%NAVIGATION_BAR%}/g, navigation);
  template = template.replace(/{%LANGUAGE_SELECTION%}/g, language);
  template = template.replace(/{%SIGN_IN_BUTTON%}/g, signin);
  template = template.replace(/{%REGISTER_BUTTON%}/g, register);
  return template;
};

module.exports = addNavigation;
