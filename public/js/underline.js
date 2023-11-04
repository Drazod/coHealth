const nav_links = Array.from(document.querySelectorAll('.nav_links'));

class Underline {
  index;
  preIndex;
  updateClass(nav) {
    nav.classList.toggle('active');
    nav
      .closest('.nav-item')
      .querySelector('.underline-box')
      .classList.toggle('hidden');
  }
  updateHidden() {
    this.index = localStorage.getItem('currentActive') || 0;
    this.updateClass(nav_links[this.index]);
  }
  setLocalStorage(num) {
    localStorage.setItem('currentActive', num || 0);
  }
  getIndex() {
    let index;
    switch (window.location.pathname) {
      case '/home':
        index = nav_links.findIndex(
          (nav_link) => nav_link.innerHTML === 'Home'
        );
        break;

      case '/':
        index = nav_links.findIndex(
          (nav_link) => nav_link.innerHTML === 'Home'
        );
        break;
      case '/aboutUs':
        index = nav_links.findIndex(
          (nav_link) => nav_link.innerHTML === 'About Us'
        );
        break;

      case '/news':
        index = nav_links.findIndex(
          (nav_link) => nav_link.innerHTML === 'News'
        );
        break;

      case '/calculateBMI':
        index = nav_links.findIndex(
          (nav_link) => nav_link.innerHTML === 'Calculate BMI'
        );
        break;

      case '/findHospital':
        index = nav_links.findIndex(
          (nav_link) => nav_link.innerHTML === 'Find Hospital'
        );
        break;
      default:
    }
    this.index = index;
    // console.log(this.index);
    return index;
  }
  async run() {
    // console.log(window.location.pathname);
    // console.log(nav_links);
    this.setLocalStorage(this.getIndex());

    // this.setLocalStorage(this.getIndex());

    this.updateHidden();
  }
}
// console.log(localStorage.getItem('currentActive'));
export default new Underline();
