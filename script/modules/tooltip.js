export default class toolTip {
  constructor(seletor) {
    this.toolTips = document.querySelectorAll(seletor);

    this.onMouseMove = {
      handleEvent(e) {
        this.toolTipBox.style.top = `${e.pageY + 20}px`;
        this.toolTipBox.style.left = `${e.pageX + 20}px`;
      },
    };

    this.onMouseLeave = {
      handleEvent(e) {
        this.toolTipBox.remove();
        e.target.removeEventListener("mouseleave", this.onMouseLeave);
        e.target.removeEventListener("mousemove", this.onMouseMove);
      },
    };
  }

  criarToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const texto = element.parentNode.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = texto;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }

  onMouseOver(e) {
    const toolTipBox = this.criarToolTipBox(e.target);
    this.onMouseLeave.toolTipBox = toolTipBox;
    this.onMouseMove.toolTipBox = toolTipBox;
    this.onMouseLeave.element = this;
    e.target.addEventListener("mouseleave", this.onMouseLeave);
    e.target.addEventListener("mousemove", this.onMouseMove);
  }

  init() {
    this.toolTips.forEach((item) => {
      item.addEventListener("mouseover", (e) => this.onMouseOver(e));
    });
  }
}
