export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      events.forEach((eventos) => {
        html.removeEventListener(eventos, handleOutsideClick);
      });
      element.removeAttribute(outside, "");
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((eventos) => {
      html.addEventListener(eventos, handleOutsideClick);
    });
    element.setAttribute(outside, "");
  }
}
