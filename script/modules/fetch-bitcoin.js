export default function fetchBitcoin(url, target) {
  async function buscaBitcoin() {
    try {
      const valorBTC = await (await fetch(url)).json();
      const valorDoacao = 10 / valorBTC.BRL.buy;
      document.querySelector(target).innerHTML = valorDoacao.toFixed(6);
    } catch (error) {
      console.log(error);
    }
  }
  buscaBitcoin();
}
