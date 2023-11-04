import dropdownMenu from './languageDropDownMenu.js';
// import navigation from './navigationController.js';
import News from './newsController.js';
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
    await Members.run();
    await AboutUs.moveTo();
  }
  if (window.location.pathname === '/news') {
    await News.run();
  }
  await dropdownMenu();
  await Underline.run();
};
init();
