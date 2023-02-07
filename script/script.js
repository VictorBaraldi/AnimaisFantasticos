import SmoothScroll from "./modules/smoothScroll.js";
import animaScroll from "./modules/animaScroll.js";
import slideDown from "./modules/slideDown.js";
import initTab from "./modules/initTab.js";
import loginModal from "./modules/login.js";
import toolTip from "./modules/tooltip.js";
import dropDown from "./modules/dropdown.js";
import menuMobile from "./modules/mobile.js";
import hourTime from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

const smoothScroll = new SmoothScroll("[data-menu='nav'] a[href^='#']");
smoothScroll.init();

animaScroll();
slideDown();
initTab();
loginModal();
toolTip();
dropDown();
menuMobile();
hourTime();
fetchAnimais();
fetchBitcoin();
