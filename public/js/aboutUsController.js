class AboutUs {
  async moveTo() {
    if (window.location.pathname === '/aboutUs') {
      document
        .querySelector('.aboutUsBox')
        .scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export default new AboutUs();
