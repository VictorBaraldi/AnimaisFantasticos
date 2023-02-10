import AnimaNumeros from "./animaNumeros.js";

export default function fetchAnimais(url, target) {
  function criarAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numeros-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span>${animal.total}</span>`;
    return div;
  }

  async function dadosAnimais() {
    try {
      const animaisJSON = await (await fetch(url)).json();
      const numerosGrid = document.querySelector(target);
      animaisJSON.forEach((animal) => {
        const dadosAnimal = criarAnimal(animal);
        numerosGrid.appendChild(dadosAnimal);
      });
      const animaNumeros = new AnimaNumeros(
        ".numeros-animal span",
        "ativo",
        ".numeros"
      );
      animaNumeros.init();
    } catch (error) {
      console.log(error);
    }
  }

  return dadosAnimais();
}
