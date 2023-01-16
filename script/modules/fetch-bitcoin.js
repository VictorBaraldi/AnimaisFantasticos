export default function fetchBitcoin() {
  async function buscaBitcoin(url) {
    try {
      const valorBTC = await (await fetch(url)).json();
      const valorDoacao = 10 / valorBTC.BRL.buy;
      document.querySelector(".btc-preco").innerHTML = valorDoacao.toFixed(6);
    } catch (error) {
      console.log(error);
    }
  }

  buscaBitcoin("https://blockchain.info/ticker");
}
