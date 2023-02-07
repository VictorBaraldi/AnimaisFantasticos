export default class InitTab {
  constructor(menu, content) {
    this.sections = document.querySelectorAll(content);
    this.menuImg = document.querySelectorAll(menu);
  }

  addClass(index) {
    this.sections.forEach((value) => {
      value.classList.remove("show-right");
      value.classList.remove("show-down");
    });
    this.sections[index].classList.add(this.sections[index].dataset.anime);
  }

  clickImg() {
    this.menuImg.forEach((value, index) => {
      value.addEventListener("click", () => {
        this.addClass(index);
      });
    });
  }

  init() {
    this.sections[0].classList.add("show-down");
    if (this.sections.length && this.menuImg.length) {
      this.clickImg();
    }
  }
}
