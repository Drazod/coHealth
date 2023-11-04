import dropdownMenu from './languageDropDownMenu.js';
// import navigation from './navigationController.js';
import Underline from './underline.js';
import Slider from './sliderController.js';
import Features from './featuresController.js';
import Members from './membersController.js';
import AboutUs from './aboutUsController.js';

const init = async function () {
  // navigation.updateClick();
  if (
    window.location.pathname === '/home' ||
    window.location.pathname === '/aboutUs'
  ) {
    await Slider.run();
    await Features.render();
    await dropdownMenu();
    await Members.run();
    await AboutUs.moveTo();
  }
  await Underline.run();
};
init();
