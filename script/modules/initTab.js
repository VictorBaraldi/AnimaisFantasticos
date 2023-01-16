export default function initTab() {
  const sections = document.querySelectorAll("[data-tab='content'] section");
  const menuImg = document.querySelectorAll("[data-tab='menu'] li");
  sections[0].classList.add("show-down");

  if (sections.length && menuImg.length) {
    function addClass(index) {
      sections.forEach((value) => {
        value.classList.remove("show-right");
        value.classList.remove("show-down");
      });
      sections[index].classList.add(sections[index].dataset.anime);
    }

    menuImg.forEach((value, index) => {
      value.addEventListener("click", () => {
        addClass(index);
      });
    });
  }
}
