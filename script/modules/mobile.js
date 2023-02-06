import outsideClick from "./outsideClick.js";

export default function menuMobile() {
  const menuBtn = document.querySelector('[data-menu= "button"]');
  const menu = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  let cont = 0;
  function openMenu() {
    cont += 1;
    if (cont === 2) {
      menu.classList.toggle("ativo");
      menuBtn.classList.toggle("ativo");
      cont = 0;
    }
    outsideClick(this, eventos, () => {
      this.classList.remove("ativo");
      menu.classList.remove("ativo");
    });
  }

  if (menuBtn) {
    eventos.forEach((evento) => {
      menuBtn.addEventListener(evento, openMenu);
    });
  }
}
