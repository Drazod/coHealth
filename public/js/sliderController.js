import { POSITION_DOTS, POSITION_SLIDER_CONTENT } from './config.js';

const sliderImagesContainer = document.querySelector('.sliderImagesContainer');
const dotsContainer = document.querySelector('.dotsContainer');
const newsContainer = document.querySelector('.newsContainer');

class Slider {
  #images;
  #length;
  templateHTML = '';
  #currentSlide;
  #time;
  _interval;
  #leftFormatContent = `left: ${POSITION_SLIDER_CONTENT}; text-align: justify;`;
  #rightFormatContent = `right: ${POSITION_SLIDER_CONTENT}; text-align: justify; direction: rtl`;
  _initActiveDot() {
    const activeDot = document.querySelector('.slider-dot');
    if (activeDot) {
      activeDot?.classList.add('active-dot');

      dotsContainer.style = `bottom: calc(${
        dotsContainer?.getBoundingClientRect().top -
        newsContainer?.getBoundingClientRect().bottom
      }px + ${POSITION_DOTS})`;
    }
  }
  _setActiveDot() {
    const dots = document.querySelectorAll('.slider-dot');

    dots.forEach(
      ((dot) => {
        if (this.#currentSlide === Number(dot.id)) {
          dot.classList.add('active-dot');
        } else if (this.#currentSlide !== Number(dot.id)) {
          dot.classList.remove('active-dot');
        }
      }).bind(this)
    );
  }
  setTime(time) {
    this.#time = time * 1000;
  }

  _moveSlide(item) {
    const image = item.querySelector('.sliderImage');
    image.style.transform = `translateX(-${100 * this.#currentSlide}vw)`;
    this._setActiveDot();
  }
  _moveContent(item) {
    const sliderImageContent = item.querySelector('.sliderImageContent');
    sliderImageContent.style.transform = `translateX(-${
      100 * this.#currentSlide
    }vw)`;
  }
  _move(item) {
    this._moveSlide(item);
    this._moveContent(item);
  }
  _transitionSlide() {
    const sliderImagesItem = document.querySelectorAll('.sliderImagesItem');
    sliderImagesItem.forEach((item) => this._move(item));
  }
  _nextSlide() {
    ++this.#currentSlide;
    if (this.#length === this.#currentSlide) {
      this.#currentSlide = 0;
    }
    this._transitionSlide();
  }
  _createDots() {
    this.#length = this.#images.length;
    let html = '';
    for (let i = 0; i < this.#length; ++i) {
      html += `<div class="slider-dot" id="${i}"></div>`;
    }
    dotsContainer?.insertAdjacentHTML('beforeend', html);
    this._initActiveDot();
  }

  _createImage() {
    let html = '';

    this.#images.forEach(function (image) {
      html += `<div class="sliderImagesItem">
      <img
        class="sliderImage"
        src="../${image.imgSRC}"
        alt="${image.imgAlt}"
        id="${image._id}"
        style="${image.imgFormat}"
      />
      
      <div class="sliderImageContent ${image.descriptionPosition}">
        <div class="sliderImageTitle">${image.name}</div>
            <div class="sliderImageDescription">
              ${image.description}
            </div>
          <button class="btn-slider-image" tabindex=-1>Read more</button>
        </div>;
      </div>`;
    });
    sliderImagesContainer?.insertAdjacentHTML('afterbegin', html);

    this.#currentSlide = 0;
  }
  reAdjustContent() {
    const sliderImageContent = document.querySelectorAll('.sliderImageContent');
    sliderImageContent.forEach((content) => {
      const contentHeight =
        content?.getBoundingClientRect().bottom -
        content?.getBoundingClientRect().top;
      const containerHeight =
        newsContainer?.getBoundingClientRect().bottom -
        newsContainer?.getBoundingClientRect().top;

      content.style = `top: ${(containerHeight - contentHeight) / 2}px; ${
        content.classList.contains('left')
          ? this.#leftFormatContent
          : this.#rightFormatContent
      }`;
    });
  }
  async _loadImage() {
    await fetch(`/data/get-6-nearest-news`)
      .then((res, err) => res.json())
      .then((res, err) => (this.#images = res.data.newsFound))
      .catch((err) => console.log('Can not load images', err));
  }
  _dotsInteract() {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot) =>
      dot.addEventListener(
        'click',
        function () {
          this.#currentSlide = Number(dot.id);
          this._transitionSlide();

          clearInterval(this._interval);
          this._autoMove();
          this._setActiveDot();
        }.bind(this)
      )
    );
  }
  _hovering() {
    newsContainer?.addEventListener(
      'mouseover',
      function () {
        clearInterval(this._interval);
      }.bind(this)
    );
    newsContainer?.addEventListener('mouseout', this._autoMove.bind(this));
  }
  _autoMove() {
    clearInterval(this._interval);
    this._interval = setInterval(this._nextSlide.bind(this), this.#time);
  }

  async run() {
    await this._loadImage();
    this._createImage();
    this._createDots();
    this.setTime(5);
    this._dotsInteract();

    this._autoMove();
    this._hovering();
    this.reAdjustContent();
  }
}

export default new Slider();
