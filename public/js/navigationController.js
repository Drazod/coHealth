import Underline from './Underline.js';
import { FONT_WEIGHT_NAVIGATION_ACTIVE } from './config.js';

const nav_items = Array.from(document.querySelectorAll('.nav-item'));

const local = localStorage.getItem('currentActive');
console.log(local);

let currentActive = nav_items[Underline.index];

// class Navigation {
//   items = nav_items;
//   updateClick() {
//     this.items.forEach((nav, i) =>
//       nav.addEventListener('click', function () {
//         currentActive.style = 'font-weight: normal'; //Previous currentActive
//         currentActive = nav; //Change to real currrentActive
//         console.log(currentActive);
//         localStorage.setItem('currentActive', currentActive);
//         currentActive.style = `font-weight: ${FONT_WEIGHT_NAVIGATION_ACTIVE}`;
//         Underline.render();
//       })
//     );
//   }
// }

// export default new Navigation();
export { currentActive };
