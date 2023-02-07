export default class slideDown {
  constructor(links) {
    this.menuAcordeon = document.querySelectorAll(links);
  }

  activeAcordeon(item) {
    item.classList.toggle("ativo");
    item.nextElementSibling.classList.toggle("ativo");
  }

  addAcondeonEvent() {
    this.menuAcordeon.forEach((value) => {
      value.addEventListener("click", () => this.activeAcordeon(value));
    });
  }

  init() {
    if (this.menuAcordeon.length) {
      this.activeAcordeon(this.menuAcordeon[0]);
      this.addAcondeonEvent();
    }
  }
}
