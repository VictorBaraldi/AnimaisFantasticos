export default function animaNumeros() {
  const numeros = document.querySelectorAll(".numeros-animal span");

  function numbersInit() {
    //basicamente pega o valor de dentro do number e substitui pelo proporcional do valor a cada 25ms
    numeros.forEach((value) => {
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
    });
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      // verifica se o observado possui a classe ativo, que so tem quando está visivel na tela
      observer.disconnect(); // a partir do momento que observa a classe ativo, o observador é disconectado e para de observar
      numbersInit(); // função de animação dos numeros inicia
    }
  } //callback

  const observerTarget = document.querySelector(".numeros"); // selecionando o elemento
  const observer = new MutationObserver(handleMutation); // recebe o callback, que vai ser executado quando mudar

  observer.observe(observerTarget, { attributes: true }); // definimos qual o target o observer deve olhar
}
