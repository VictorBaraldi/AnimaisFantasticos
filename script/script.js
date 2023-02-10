import SmoothScroll from "./modules/smoothScroll.js";
import AnimaScroll from "./modules/animaScroll.js";
import SlideDown from "./modules/slideDown.js";
import InitTab from "./modules/initTab.js";
import Login from "./modules/login.js";
import ToolTip from "./modules/tooltip.js";
import dropDown from "./modules/dropdown.js";
import menuMobile from "./modules/mobile.js";
import hourTime from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

const smoothScroll = new SmoothScroll("[data-menu='nav'] a[href^='#']");
smoothScroll.init();
const slideDown = new SlideDown("[data-menu='accordeon'] dt");
slideDown.init();
const initTab = new InitTab(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
initTab.init();

const modal = new Login(
  '[data-modal="container"]',
  '[data-modal="abrir"]',
  '[data-modal="fechar"]'
);
modal.init();

const toolTip = new ToolTip("[data-tooltip]");
toolTip.init();

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

fetchAnimais("../animaisapi.json", ".numeros-grid");

const animaScroll = new AnimaScroll("[data-anime='scroll']");
animaScroll.init();

dropDown();
menuMobile();
hourTime();
