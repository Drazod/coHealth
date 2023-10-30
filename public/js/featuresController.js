const feature_items = document.querySelector('.features-items');
import { MAIN_TITLE_FEATURE_FONT_SIZE } from './config.js';

class Features {
  #data;
  async fetchData() {
    const data = await fetch('/data/getFeatures')
      .then((res) => res.json())
      .then((res) => (this.#data = res.data.featuresFound))
      .catch((err) => console.log('Could not read features data file', err));
  }
  renderContent(feature) {
    return `
    <div class="features-item-content" ">
        <div class="features-item-title" style = "${
          feature.main === 'yes'
            ? `font-size: ${MAIN_TITLE_FEATURE_FONT_SIZE}`
            : ''
        } ">${feature.title}</div>
        <div class="features-item-description">${feature.description}</div>
    
    </div>`;
  }
  renderIcon(feature) {
    return `
          <img
              class="features-item-icon ${
                feature.main === 'yes' ? 'icon-main' : ''
              }"
              src="../${feature.iconSRC}"
              alt="${feature.iconAlt}"
              style = "float: right"
              
          />

          `;
  }

  async render() {
    await this.fetchData();
    const initHTML = this.#data
      .map((feature) => {
        let featureHTML;

        feature.description !== ''
          ? (featureHTML =
              '' + this.renderIcon(feature) + this.renderContent(feature))
          : (featureHTML =
              '' + this.renderContent(feature) + this.renderIcon(feature));

        return `<div class="features-item">${featureHTML}</div>`;
      })
      .join('');
    feature_items?.insertAdjacentHTML('afterbegin', initHTML);
    const featureItemTitle = document.querySelector('.features-item-title');
    const iconMainFeature = document.querySelectorAll('.icon-main');
    iconMainFeature.forEach((icon) => {
      // console.log(featureItemTitle.getBoundingClientRect().bottom);
      // console.log(icon.getBoundingClientRect().bottom);
      icon.style = `float: right; position: relative; bottom: ${
        icon.getBoundingClientRect().bottom -
        featureItemTitle.getBoundingClientRect().bottom
      }px`;
    });
  }
}

export default new Features();
