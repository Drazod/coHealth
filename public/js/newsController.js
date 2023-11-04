class News {
  #images;
  async getData() {
    await fetch('/data/getAllNews')
      .then((res) => res.json())
      .then((res) => (this.#images = res.data.newsFound))
      .catch((err) => console.error('Could not load images', err));
  }
  async loadHTML() {
    const html = this.#images
      .map(
        (image) =>
          `
        <div class="newsItem">
          <div class="newsItemImage">
            <img src="./../${image.imgSRC}" />
          </div>
          <div class="newsItemContent">
            <div class="newsItemTitle">${image.name}</div>
            <div class="newsItemDescription">${image.description}</div>
          </div>
          
        </div>`
      )
      .join('');
    const newsItemContainer = document.querySelector('.newsItemsContainer');
    newsItemContainer.insertAdjacentHTML('beforeend', html);
  }
  async render() {}
  async run() {
    await this.getData();
    await this.loadHTML();
  }
}

export default new News();
