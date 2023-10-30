import { currentActive } from './navigationController.js';
import { FONT_WEIGHT_NAVIGATION_ACTIVE } from './config.js';

const underlineContainer = document.querySelector('.underline');
const underlineBox = document.querySelector('.underline-box');
const nav_items = Array.from(document.querySelectorAll('.nav-item'));

class underline {
  index;
  width() {
    return nav_items.map((nav) => {
      return (
        Number(nav.getBoundingClientRect().left) -
        Number(nav_items[0].getBoundingClientRect().left)
      );
    });
  }

  initPos() {
    underlineContainer.style.left = `${
      nav_items[0].getBoundingClientRect().left -
      underlineBox.getBoundingClientRect().left
    }px`;
  }
  render() {
    this.navUpdate(currentActive);
    underlineContainer.style.width = `${Number.parseFloat(
      getComputedStyle(currentActive).width,
      10
    )}px`;
    this.initPos();
    underlineContainer.style.transform = `translateX(${
      this.width()[this.index]
    }px)`;
  }

  windowResize() {
    window.addEventListener('resize', this.render.bind(this));
  }
  navUpdate(nav) {
    this.index = nav_items.findIndex(
      (foundNav) => nav.classList === foundNav.classList
    );
    nav.style = `font-weight: ${FONT_WEIGHT_NAVIGATION_ACTIVE}`;
  }
  run() {
    this.render();
    this.windowResize();
  }
}
export default new underline();
