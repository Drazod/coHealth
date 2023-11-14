import dropdownMenu from './languageDropDownMenu.js';
import News from './newsController.js';
import NewsItem from './newsItemController.js';
import Underline from './underline.js';
import Slider from './sliderController.js';
import Features from './featuresController.js';
import Members from './membersController.js';
import AboutUs from './aboutUsController.js';

const init = async function () {
  // navigation.updateClick();
  if (
    window.location.pathname === '/home' ||
    window.location.pathname === '/aboutUs' ||
    window.location.pathname === '/'
  ) {
    await Slider.run();
    await Features.render();
    await Members.run();
    await AboutUs.moveTo();
  }
  if (window.location.pathname === '/news') {
    await News.run();
  }
  if (window.location.pathname.includes('/news/')) {
    await NewsItem.run(window.location.pathname.replace('/news/', ''));
  }
  await dropdownMenu();
  await Underline.run();
};
init();