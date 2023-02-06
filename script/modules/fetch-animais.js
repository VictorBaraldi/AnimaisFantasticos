import animaNumeros from "./animaNumeros.js";

export default function fetchAnimais() {
  async function dadosAnimais(url) {
    function criarAnimal(animal) {
      const div = document.createElement("div");
      div.classList.add("numeros-animal");
      div.innerHTML = `<h3>${animal.especie}</h3><span>${animal.total}</span>`;
      return div;
    }

    try {
      const animaisJSON = await (await fetch(url)).json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJSON.forEach((animal) => {
        const dadosAnimal = criarAnimal(animal);
        numerosGrid.appendChild(dadosAnimal);
      });
      animaNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  dadosAnimais("./animaisapi.json");
}
