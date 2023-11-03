import { FONT_WEIGHT_NAVIGATION_ACTIVE } from './config.js';

const underlineContainer = document.querySelector('.underline');
const underlineBox = document.querySelector('.underline-box');
const nav_items = Array.from(document.querySelectorAll('.nav-item'));

class Underline {
  currentActive =
    nav_items[localStorage.getItem('currentActive')] || nav_items[0];
  index;
  addEvent(nav) {
    // nav.addEventListener('click', this.navUpdate.bind(this)(e));
    nav.addEventListener('click', function (e) {
      const current = e.target.closest('.nav-item');
      current.classList.toggle('active');
      if (current.classList.contains('active')) {
        const html = `<div class="underline-box"><div class="underline"></div></div>`;
        current.insertAdjacentHTML('beforeend', html);
      }
      console.log(this.currentActive);
    });
  }
  updateClick() {
    nav_items.forEach(this.addEvent.bind(this));
    localStorage.setItem('currentActive', this.index);
  }
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
      this.currentActive.getBoundingClientRect().left -
      underlineBox.getBoundingClientRect().left
    }px`;
  }
  async render() {
    this.currentActive.style = `font-weight: ${FONT_WEIGHT_NAVIGATION_ACTIVE}`;
    underlineContainer.style.width = `${Number.parseFloat(
      getComputedStyle(this.currentActive).width,
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
  navUpdate(nav = this.currentActive) {
    this.index = nav_items.findIndex(
      (foundNav) => nav.classList === foundNav.classList
    );
    nav.style = `font-weight: ${FONT_WEIGHT_NAVIGATION_ACTIVE}`;
  }
  run() {
    this.addEvent(this.currentActive);
    // this.render();
    // this.windowResize();
    // this.updateClick();
  }
}
// console.log(localStorage.getItem('currentActive'));
export default new Underline();
