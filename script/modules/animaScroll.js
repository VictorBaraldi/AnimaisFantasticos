export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.7;
    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = Array.from(this.sections).map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: offset - this.halfWindow,
      };
    });
  }

  checkDistance() {
    this.distance.forEach((value) => {
      if (window.scrollY > value.offset) {
        value.element.classList.add("ativo");
      } else if (value.element.classList.contains("ativo")) {
        value.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
