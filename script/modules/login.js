export default class LoginModal {
  constructor(modalContainer, abrir, fechar) {
    this.modal = document.querySelector(modalContainer);
    this.btnLogin = document.querySelector(abrir);
    this.btnclose = document.querySelector(fechar);
  }

  addAtivoModal() {
    this.modal.classList.add("ativo");
  }

  removeAtivoModal() {
    this.modal.classList.remove("ativo");
  }

  loginModalUser() {
    ["click", "touchstart"].forEach((evento) => {
      this.btnLogin.addEventListener(evento, (e) => {
        e.preventDefault();
        this.addAtivoModal();
      });
    });
  }

  closeModal() {
    this.btnclose.addEventListener("click", () => {
      this.modal.classList.remove("ativo");
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.removeAtivoModal();
      }
    });
  }

  clickFora() {
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-container") === true) {
        this.removeAtivoModal();
      }
    });
  }

  init() {
    if (this.modal && this.btnLogin && this.btnclose) {
      this.loginModalUser();
      this.closeModal();
      this.clickFora();
    }
  }
}
