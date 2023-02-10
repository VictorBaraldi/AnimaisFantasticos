import outsideClick from "./outsideClick.js";

export default class DropDown {
  constructor(selector) {
    this.dropDownMenu = document.querySelectorAll(selector);
  }

  dropMenu(e) {
    e.preventDefault();
    this.classList.toggle("ativo");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }

  init() {
    if (this.dropDownMenu.length) {
      this.dropDownMenu.forEach((value) => {
        ["touchstart", "click"].forEach((evento) => {
          value.addEventListener(evento, this.dropMenu);
        });
      });
    }
    return this;
  }
}
