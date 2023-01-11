export default function animaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const halfWindow = window.innerHeight * 0.7;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((value) => {
        const sectionTop = value.getBoundingClientRect().top;

        if (sectionTop - halfWindow < 0) {
          value.classList.add("ativo");
        } else if (value.classList.contains("ativo")) {
          value.classList.remove("ativo");
        }
      });
    }
    animaScroll();
  }
}
animaScroll();
window.addEventListener("scroll", animaScroll);
