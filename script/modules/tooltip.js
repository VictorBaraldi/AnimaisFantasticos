export default function toolTip() {
  const toolTips = document.querySelectorAll("[data-tooltip]");

  const onMouseMove = {
    handleEvent(e) {
      this.toolTipBox.style.top = `${e.pageY + 20}px`;
      this.toolTipBox.style.left = `${e.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function criarToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const texto = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = texto;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }

  function onMouseOver() {
    const toolTipBox = criarToolTipBox(this);
    onMouseLeave.toolTipBox = toolTipBox;
    onMouseMove.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }

  toolTips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
