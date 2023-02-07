export default class smoothScroll {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const link = document.querySelector(href);
    link.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((value) => {
      ["click", "touchstart"].forEach((evento) => {
        value.addEventListener(evento, this.scrollToSection);
      });
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
