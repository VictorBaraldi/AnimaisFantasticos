import outsideClick from "./outsideClick.js";

export default class menuMobile {
  constructor(btn, lista) {
    this.menuBtn = document.querySelector(btn);
    this.menu = document.querySelector(lista);
    this.eventos = ["click", "touchstart"];
    this.openMenu = this.openMenu.bind(this);
    this.cont = 0;
  }

  init() {
    if (this.menuBtn) {
      this.eventos.forEach((evento) => {
        this.menuBtn.addEventListener(evento, this.openMenu);
      });
    }
  }

  openMenu() {
    this.cont += 1;
    if (this.cont === 2) {
      this.menu.classList.toggle("ativo");
      this.menuBtn.classList.toggle("ativo");
      this.cont = 0;
    }
    outsideClick(this.menuBtn, this.eventos, () => {
      this.menu.classList.remove("ativo");
      this.menuBtn.classList.remove("ativo");
    });
  }

  CliqueFora() {}
}
