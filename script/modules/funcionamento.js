export default class hourTime {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
  }

  init() {
    if (this.funcionamento) {
      this.HoraFuncionamento();
      this.horaAtual();
      this.addClass();
    }
    return this;
  }

  addClass() {
    if (this.semanaAberto && this.horaAberto) {
      this.funcionamento.classList.add("aberto");
    } else {
      this.funcionamento.classList.add("fechado");
    }
  }

  horaAtual() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
    this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    this.horaAberto =
      this.horaSemana[0] <= this.horaAgora &&
      this.horaAgora < this.horaSemana[1];
  }

  HoraFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horaSemana = this.funcionamento.dataset.horario.split(",").map(Number);
  }
}
