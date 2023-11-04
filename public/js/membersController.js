class Member {
  members;
  async fetchData() {
    this.members = await fetch('/data/members')
      .then((res) => res.json())
      .then((res) => res.data.member);
  }
  renderMember() {
    const aboutUsContainer = document.querySelector('.aboutUsContainer');
    const html = this.members
      .map((member) => {
        return `        
      <div class="member">
        <div class="memberImage">
            <img alt="${member.imageAlt}" src="./../images/member/${member.imageName}.jpg" />
        </div>
      <div class="memberName">${member.name}</div>
      <div class="description">
            ${member.description}
          </div>
        </div>
        `;
      })
      .join('');
    aboutUsContainer.insertAdjacentHTML('afterbegin', html);
  }
  async run() {
    await this.fetchData();
    this.renderMember();
  }
}

export default new Member();
