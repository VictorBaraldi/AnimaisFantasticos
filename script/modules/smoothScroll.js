export default function smoothScroll() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='nav'] a[href^='#']"
  );

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const link = document.querySelector(href);
    link.scrollIntoView({
      behavior: "smooth",
    });
  }

  if (linksInternos.length) {
    linksInternos.forEach((value) => {
      ["click", "touchstart"].forEach((evento) => {
        value.addEventListener(evento, scrollToSection);
      });
    });
  }
}
