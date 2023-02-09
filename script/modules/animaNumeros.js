export default class AnimaNumeros {
  constructor(numeros, observerClass, observerTarget) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);
    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(value) {
    const total = +value.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      value.innerText = start;
      if (start > total) {
        value.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  numbersInit() {
    // basicamente pega o valor de dentro do number e substitui pelo proporcional do valor a cada 25ms
    this.numeros.forEach((value) => {
      this.constructor.incrementarNumero(value);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      // verifica se o observado possui a classe ativo, que so tem quando está visivel na tela
      this.observer.disconnect(); // a partir do momento que observa a classe ativo, o observador é disconectado e para de observar
      this.numbersInit(); // função de animação dos numeros inicia
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation); // recebe o callback, que vai ser executado quando mudar
    this.observer.observe(this.observerTarget, { attributes: true }); // definimos qual o target o observer deve olhar
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
