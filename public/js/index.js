import dropdownMenu from './languageDropDownMenu.js';
// import navigation from './navigationController.js';
import Underline from './underline.js';
import slider from './sliderController.js';
import features from './featuresController.js';

const init = function () {
  // navigation.updateClick();
  slider.run();
  Underline.run();
  features.render();
  dropdownMenu();
};
init();
