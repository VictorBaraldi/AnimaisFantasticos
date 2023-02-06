/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var r=n(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new O(r||[]);return a(i,"_invoke",{value:S(t,n,c)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var v={};function p(){}function m(){}function y(){}var g={};f(g,s,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(T([])));x&&x!==n&&i.call(x,s)&&(g=x);var w=y.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,c,s){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function S(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=h(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:q}}function q(){return{value:void 0,done:!0}}return m.prototype=y,a(w,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:m,configurable:!0}),m.displayName=f(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(E.prototype),f(E.prototype,u,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(d(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),f(w,l,"Generator"),f(w,s,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var r=n(61)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(){var t=document.querySelectorAll("[data-anime='scroll']"),e=.7*window.innerHeight;t.length&&t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t(),window.addEventListener("scroll",t);var e=document.querySelector('[data-modal="container"]'),r=document.querySelector('[data-modal="abrir"]'),o=document.querySelector('[data-modal="fechar"]');function i(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(e.forEach((function(t){r.removeEventListener(t,i)})),t.removeAttribute(o,""),n())}t.hasAttribute(o)||(e.forEach((function(t){r.addEventListener(t,i)})),t.setAttribute(o,""))}function a(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,s,"next",t)}function s(t){a(i,r,o,c,s,"throw",t)}c(void 0)}))}}var s,u,l,f,d,h,v,p,m,y,g=n(687),L=n.n(g);function x(){var t,e=document.querySelectorAll(".numeros-animal span"),n=document.querySelector(".numeros");(t=new MutationObserver((function(n){n[0].target.classList.contains("ativo")&&(t.disconnect(),e.forEach((function(t){var e=+t.innerText,n=Math.floor(e/100),r=0,o=setInterval((function(){r+=n,t.innerText=r,r>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())})))}))).observe(n,{attributes:!0})}!function(){var t=document.querySelectorAll("[data-menu='nav'] a[href^='#']");function e(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth"})}t.length&&t.forEach((function(t){["click","touchstart"].forEach((function(n){t.addEventListener(n,e)}))}))}(),t(),function(){var t=document.querySelectorAll("[data-menu='accordeon'] dt");function e(){this.classList.toggle("ativo"),this.nextElementSibling.classList.toggle("ativo")}t.length&&(t[0].classList.add("ativo"),t[0].nextElementSibling.classList.add("ativo"),t.forEach((function(t){t.addEventListener("click",e)})))}(),s=document.querySelectorAll("[data-tab='content'] section"),u=document.querySelectorAll("[data-tab='menu'] li"),s[0].classList.add("show-down"),s.length&&u.length&&u.forEach((function(t,e){t.addEventListener("click",(function(){!function(t){s.forEach((function(t){t.classList.remove("show-right"),t.classList.remove("show-down")})),s[t].classList.add(s[t].dataset.anime)}(e)}))})),e&&r&&o&&(["click","touchstart"].forEach((function(t){r.addEventListener(t,(function(t){t.preventDefault(),e.classList.add("ativo")}))})),o.addEventListener("click",(function(){e.classList.remove("ativo")})),window.addEventListener("keydown",(function(t){"Escape"===t.key&&e.classList.remove("ativo")})),window.addEventListener("click",(function(t){!0===t.target.classList.contains("modal-container")&&e.classList.remove("ativo")}))),function(){var t=document.querySelectorAll("[data-tooltip]"),e={handleEvent:function(t){this.toolTipBox.style.top="".concat(t.pageY+20,"px"),this.toolTipBox.style.left="".concat(t.pageX+20,"px")}},n={handleEvent:function(){this.toolTipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}};function r(){var t=function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);n.toolTipBox=t,e.toolTipBox=t,n.element=this,this.addEventListener("mouseleave",n),this.addEventListener("mousemove",e)}t.forEach((function(t){t.addEventListener("mouseover",r)}))}(),function(){function t(t){var e=this;t.preventDefault(),this.classList.toggle("ativo"),i(this,["touchstart","click"],(function(){e.classList.remove("ativo")}))}document.querySelectorAll("[data-dropdown]").forEach((function(e){["touchstart","click"].forEach((function(n){e.addEventListener(n,t)}))}))}(),function(){var t=document.querySelector('[data-menu= "button"]'),e=document.querySelector('[data-menu="list"]'),n=["click","touchstart"],r=0;function o(){var o=this;2===(r+=1)&&(e.classList.toggle("ativo"),t.classList.toggle("ativo"),r=0),i(this,n,(function(){o.classList.remove("ativo"),e.classList.remove("ativo")}))}t&&n.forEach((function(e){t.addEventListener(e,o)}))}(),f=(l=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),d=l.dataset.horario.split(",").map(Number),v=(h=new Date).getDay(),p=h.getHours(),m=-1!==f.indexOf(v),y=d[0]<=p&&p<d[1],m&&y?l.classList.add("aberto"):l.classList.add("fechado"),function(){function t(){return(t=c(L().mark((function t(e){var n,r,o;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(t){var e=document.createElement("div");return e.classList.add("numeros-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3><span>").concat(t.total,"</span>"),e},t.prev=1,t.next=4,fetch(e);case 4:return t.next=6,t.sent.json();case 6:r=t.sent,o=document.querySelector(".numeros-grid"),r.forEach((function(t){var e=n(t);o.appendChild(e)})),x(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}("./animaisapi.json")}(),function(){function t(){return(t=c(L().mark((function t(e){var n,r;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return t.next=5,t.sent.json();case 5:n=t.sent,r=10/n.BRL.buy,document.querySelector(".btc-preco").innerHTML=r.toFixed(6),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}("https://blockchain.info/ticker")}()})()})();