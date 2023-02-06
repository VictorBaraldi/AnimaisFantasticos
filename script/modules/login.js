const modal = document.querySelector('[data-modal="container"]');
const btnLogin = document.querySelector('[data-modal="abrir"]');
const btnclose = document.querySelector('[data-modal="fechar"]');

export default function loginModal() {
  function loginModalUser() {
    ["click", "touchstart"].forEach((evento) => {
      btnLogin.addEventListener(evento, (e) => {
        e.preventDefault();
        modal.classList.add("ativo");
      });
    });
  }

  function closeModal() {
    btnclose.addEventListener("click", () => {
      modal.classList.remove("ativo");
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modal.classList.remove("ativo");
      }
    });
  }

  function clickFora() {
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-container") === true) {
        modal.classList.remove("ativo");
      }
    });
  }

  if (modal && btnLogin && btnclose) {
    loginModalUser();
    closeModal();
    clickFora();
  }
}
