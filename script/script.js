import SmoothScroll from "./modules/smoothScroll.js";
import AnimaScroll from "./modules/animaScroll.js";
import SlideDown from "./modules/slideDown.js";
import InitTab from "./modules/initTab.js";
import Login from "./modules/login.js";
import ToolTip from "./modules/tooltip.js";
import DropDown from "./modules/dropdown.js";
import MenuMobile from "./modules/mobile.js";
import HourTime from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import SlideNav from "./modules/slideNav.js";

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

fetchAnimais("./animaisapi.json", ".numeros-grid");

const animaScroll = new AnimaScroll("[data-anime='scroll']");
animaScroll.init();

const dropDown = new DropDown("[data-dropdown]");
dropDown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new HourTime("[data-semana]");
funcionamento.init();

const slide = new SlideNav(".slide", ".wrapper");
slide.init();
slide.addControl(".custom-control");
