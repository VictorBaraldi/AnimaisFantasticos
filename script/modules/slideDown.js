export default function slideDown() {
  const menuAcordeon = document.querySelectorAll("[data-menu='accordeon'] dt");
  function activeAcordeon() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  if (menuAcordeon.length) {
    menuAcordeon[0].classList.add("ativo");
    menuAcordeon[0].nextElementSibling.classList.add("ativo");

    menuAcordeon.forEach((value) => {
      value.addEventListener("click", activeAcordeon);
    });
  }
}
