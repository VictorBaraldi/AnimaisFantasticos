import outsideClick from "./outsideClick.js";

export default function dropDown() {
  const dropDown = document.querySelectorAll("[data-dropdown]");

  dropDown.forEach((value) => {
    ["touchstart", "click"].forEach((evento) => {
      value.addEventListener(evento, dropMenu);
    });
  });

  function dropMenu(e) {
    e.preventDefault();
    this.classList.toggle("ativo");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }
}
