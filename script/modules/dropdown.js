import outsideClick from "./outsideClick.js";

export default function dropDown() {
  const dropDownMenu = document.querySelectorAll("[data-dropdown]");

  function dropMenu(e) {
    e.preventDefault();
    this.classList.toggle("ativo");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }

  dropDownMenu.forEach((value) => {
    ["touchstart", "click"].forEach((evento) => {
      value.addEventListener(evento, dropMenu);
    });
  });
}
