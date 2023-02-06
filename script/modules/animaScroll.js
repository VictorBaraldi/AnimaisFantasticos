export default function animaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const halfWindow = window.innerHeight * 0.7;
  function animaScrolling() {
    sections.forEach((value) => {
      const sectionTop = value.getBoundingClientRect().top;
      if (sectionTop - halfWindow < 0) {
        value.classList.add("ativo");
      } else if (value.classList.contains("ativo")) {
        value.classList.remove("ativo");
      }
    });
  }
  if (sections.length) {
    animaScrolling();
  }
}
animaScroll();
window.addEventListener("scroll", animaScroll);
