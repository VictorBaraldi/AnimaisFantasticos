export default function toolTip() {
  const toolTips = document.querySelectorAll("[data-tooltip]");

  toolTips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(e) {
    const toolTipBox = criarToolTipBox(this);
    onMouseLeave.toolTipBox = toolTipBox;
    onMouseMove.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }

  const onMouseLeave = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(e) {
      this.toolTipBox.style.top = e.pageY + 20 + "px";
      this.toolTipBox.style.left = e.pageX + 20 + "px";
    },
  };

  function criarToolTipBox(element) {
    const toolTip = document.createElement("div");
    const texto = element.getAttribute("aria-label");
    toolTip.classList.add("tooltip");
    toolTip.innerText = texto;
    document.body.appendChild(toolTip);
    return toolTip;
  }
}
