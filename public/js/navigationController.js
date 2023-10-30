import underline from './underline.js';
import { FONT_WEIGHT_NAVIGATION_ACTIVE } from './config.js';

const nav_items = Array.from(document.querySelectorAll('.nav-item'));

let currentActive = nav_items[0];
class Navigation {
  items = nav_items;
  updateClick() {
    this.items.forEach((nav, i) =>
      nav.addEventListener('click', function () {
        currentActive.style = 'font-weight: normal'; //Previous currentActive
        currentActive = nav; //Change to real currrentActive
        currentActive.style = `font-weight: ${FONT_WEIGHT_NAVIGATION_ACTIVE}`;
        underline.render();
      })
    );
  }
}

export default new Navigation();
export { currentActive };
