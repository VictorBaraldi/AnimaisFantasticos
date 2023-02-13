import Slide from "./slide.js";

export default class SlideNav extends Slide {
  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.ObserverNav();
  }

  ObserverNav() {
    this.prevElement.addEventListener("click", this.activePrevSlide);
    this.nextElement.addEventListener("click", this.activeNextSlide);
  }

  addControl(selector) {
    this.control = document.querySelector(selector) || this.createControl();
    this.controlArray = [...this.control.children];
    this.activeControlItem();
    this.controlArray.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        this.slideChange(index);
      });
      this.wrapper.addEventListener("changeEvent", this.activeControlItem);
    });
  }

  createControl() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";
    this.slideArray.forEach((value, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1} ">${
        index + 1
      }</a></li>`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  activeControlItem() {
    this.controlArray.forEach((value) => value.classList.remove("active"));
    this.controlArray[this.index.active].classList.add("active");
  }

  bindControlEvents() {
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}
