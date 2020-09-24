/*! For license information please see app.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var l={insert:"head",singleton:!1};r(o,l);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},l=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var l=e[o],c=t.base?l[0]+t.base:l[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var d=a(u),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:m(f,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=l(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var l=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(l,i[t]):e.appendChild(l)}}function h(e,t,n){var r=n.css,o=n.media,l=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),l&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function m(e,t){var n,r,o;if(t.singleton){var l=v++;n=p||(p=s(t)),r=f.bind(null,n,l,!1),o=f.bind(null,n,l,!0)}else n=s(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var l=c(e,t),s=0;s<n.length;s++){var u=a(n[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=l}}}},function(e,t,n){},function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})},function(e,t){!function(){"use strict";var e="undefined"==typeof window,t=!e&&"scrollBehavior"in document.documentElement.style,n=function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function r(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,l=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(o)throw o.error}}return i}function o(){return null!=document.scrollingElement?document.scrollingElement:document.documentElement}var l=new RegExp("scroll-behavior:\\s*([^;]*)");function i(e,t){var n="scroll-behavior:"+t,r=e.getAttribute("style");if(null!=r&&""!==r){var o=a(e);if(null!=o){var l="scroll-behavior:"+o;r=(r=r.replace(l+";","")).replace(l,"")}e.setAttribute("style",r.endsWith(";")?""+r+n:";"+r+n)}else e.setAttribute("style",n)}function a(e){var t=e.getAttribute("style");if(null!=t&&t.includes("scroll-behavior")){var n=t.match(l);if(null!=n){var o=r(n,2)[1];if(null!=o&&""!==o)return o}}}function c(e,t){if(null!=t&&"smooth"===t.behavior)return"smooth";var n,r="style"in e?e:o();if("style"in r){var l=r.style.scrollBehavior;null!=l&&""!==l&&(n=l)}if(null==n){var i=r.getAttribute("scroll-behavior");null!=i&&""!==i&&(n=i)}if(null==n&&(n=a(r)),null==n){var c=getComputedStyle(r).getPropertyValue("scrollBehavior");null!=c&&""!==c&&(n=c)}return n}function s(e){return.5*(1-Math.cos(Math.PI*e))}var u={reset:function(){}},d="undefined"==typeof WeakMap?void 0:new WeakMap;function f(e){var n=e.startTime,r=e.startX,l=e.startY,c=e.endX,f=e.endY,h=e.method,p=e.scroller,v=0,m=c-r,g=f-l,y=Math.max(Math.abs(m/1e3*15e3),Math.abs(g/1e3*15e3)),b=function(e){if(t||null==d)return u;var n,r,l,c,s,f=o(),h=d.get(e);if(null!=h)n=h.cachedScrollSnapValue,r=h.cachedScrollBehaviorStyleAttributeValue,l=h.secondaryScroller,c=h.secondaryScrollerCachedScrollSnapValue,s=h.secondaryScrollerCachedScrollBehaviorStyleAttributeValue,h.release();else{n=""===e.style.scrollSnapType?null:e.style.scrollSnapType,r=a(e),l=e===f&&f!==document.body?document.body:void 0,c=null==l?void 0:""===l.style.scrollSnapType?null:l.style.scrollSnapType,s=null==l?void 0:a(l);var p=getComputedStyle(e).getPropertyValue("scroll-snap-type"),v=null==l?void 0:getComputedStyle(l).getPropertyValue("scroll-snap-type");if("none"===p&&"none"===v)return u}e.style.scrollSnapType="none",void 0!==l&&(l.style.scrollSnapType="none"),void 0!==r&&i(e,r),void 0!==l&&void 0!==s&&i(l,s);var m=!1,g=e===f?window:e;function y(){g.removeEventListener("scroll",b),null!=d&&d.delete(e),m=!0}function b(){e.style.scrollSnapType=n,null!=l&&void 0!==c&&(l.style.scrollSnapType=c),void 0!==r&&i(e,r),void 0!==l&&void 0!==s&&i(l,s),y()}return d.set(e,{release:y,cachedScrollSnapValue:n,cachedScrollBehaviorStyleAttributeValue:r,secondaryScroller:l,secondaryScrollerCachedScrollSnapValue:c,secondaryScrollerCachedScrollBehaviorStyleAttributeValue:s}),{reset:function(){setTimeout((function(){m||g.addEventListener("scroll",b)}))}}}(p);requestAnimationFrame((function e(t){v+=t-n;var o=Math.max(0,Math.min(1,0===y?0:v/y)),i=Math.floor(r+m*s(o)),a=Math.floor(l+g*s(o));h(i,a),i!==c||a!==f?requestAnimationFrame(e):null!=b&&(b.reset(),b=void 0)}))}var h=e?void 0:Element.prototype.scroll,p=e?void 0:window.scroll,v=e?void 0:Element.prototype.scrollBy,m=e?void 0:window.scrollBy,g=e?void 0:Element.prototype.scrollTo,y=e?void 0:window.scrollTo;function b(e,t){this.__adjustingScrollPosition=!0,this.scrollLeft=e,this.scrollTop=t,delete this.__adjustingScrollPosition}function w(e,t){return b.call(this,e,t)}function E(e,t){this.__adjustingScrollPosition=!0,this.scrollLeft+=e,this.scrollTop+=t,delete this.__adjustingScrollPosition}function S(e,t){switch(e){case"scroll":return t instanceof Element?null!=h?h:b:p;case"scrollBy":return t instanceof Element?null!=v?v:E:m;case"scrollTo":return t instanceof Element?null!=g?g:w:y}}function L(e,t,n,r){var l="performance"in window?performance.now():Date.now();if(e instanceof Element)return{startTime:l,startX:i=e.scrollLeft,startY:a=e.scrollTop,endX:Math.floor("scrollBy"===r?i+t:t),endY:Math.floor("scrollBy"===r?a+n:n),method:S("scrollTo",e).bind(e),scroller:e};var i,a,c=window.scrollX,s=window.pageXOffset,u=window.scrollY,d=window.pageYOffset;return{startTime:l,startX:i=null==c||0===c?s:c,startY:a=null==u||0===u?d:u,endX:Math.floor("scrollBy"===r?i+t:t),endY:Math.floor("scrollBy"===r?a+n:n),method:S("scrollTo",window).bind(window),scroller:o()}}function A(e){return null==e?0:"number"==typeof e?e:"string"==typeof e?parseFloat(e):0}function k(e){return null!=e&&"object"==typeof e}function T(e,t,r,o){!function(e,t,n){var r=c(t,e);null==r||"auto"===r?S(n,t).call(t,e.left,e.top):f(L(t,e.left,e.top,n))}(function(e,t){if(void 0===t&&!k(e))throw new TypeError("Failed to execute 'scroll' on 'Element': parameter 1 ('options') is not an object.");return k(e)?n(n({},x(e.left,e.top)),{behavior:null==e.behavior?"auto":e.behavior}):n(n({},x(e,t)),{behavior:"auto"})}(r,o),e,t)}function x(e,t){return{left:A(e),top:A(t)}}function M(e){return"nodeType"in e&&1===e.nodeType?e.parentNode:"ShadowRoot"in window&&e instanceof window.ShadowRoot?e.host:e===document?window:e instanceof Node?e.parentNode:null}function j(e){return"visible"!==e&&"clip"!==e}function C(e){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var t=getComputedStyle(e,null);return j(t.overflowY)||j(t.overflowX)}return!1}function q(e){for(var t=e,n=o();null!=t;){var r=c(t);if(null!=r&&(t===n||C(t)))return[t,r];t=M(t)}for(t=e;null!=t;){if(t===n||C(t))return[t,"auto"];t=M(t)}return[n,"auto"]}function B(e){if(void 0===e&&(e=location),"origin"in e&&null!=e.origin)return e.origin;var t=null!=e.port&&e.port.length>0?":"+e.port:"";return("http:"===e.protocol&&":80"===t||"https:"===e.protocol&&":443"===t)&&(t=""),e.protocol+"//"+e.hostname+t}var I=/^#\d/;function _(){window.addEventListener("click",(function(e){if(e.isTrusted&&e.target instanceof HTMLAnchorElement){var t=e.target,n=t.pathname,o=t.search,l=t.hash;if(B(e.target)===B(location)&&n===location.pathname&&o===location.search&&null!=l&&!(l.length<1)){var i=function(e){for(var t=e;null!=t;){if("ShadowRoot"in window&&t instanceof window.ShadowRoot)return t;var n=M(t);if(n===t)return document;t=n}return document}(e.target),a=null!=l.match(I)?i.getElementById(l.slice(1)):i.querySelector(l);if(null!=a){var c=r(q(a),2)[1];"smooth"===c&&(e.preventDefault(),a.scrollIntoView({behavior:c}))}}}}))}var V=e?void 0:Element.prototype.scrollIntoView;function O(e,t,n,r,o,l,i,a){return l<e&&i>t||l>e&&i<t?0:l<=e&&a<=n||i>=t&&a>=n?l-e-r:i>t&&a<n||l<e&&a>n?i-t+o:0}function U(e,t,n){var r=n.block,l=n.inline,i=o(),a=null!=window.visualViewport?visualViewport.width:innerWidth,c=null!=window.visualViewport?visualViewport.height:innerHeight,s=null!=window.scrollX?window.scrollX:window.pageXOffset,u=null!=window.scrollY?window.scrollY:window.pageYOffset,d=e.getBoundingClientRect(),f=d.height,h=d.width,p=d.top,v=d.right,m=d.bottom,g=d.left,y="start"===r||"nearest"===r?p:"end"===r?m:p+f/2,b="center"===l?g+h/2:"end"===l?v:g,w=t.getBoundingClientRect(),E=w.height,S=w.width,L=w.top,A=w.right,k=w.bottom,T=w.left,x=getComputedStyle(t),M=parseInt(x.borderLeftWidth,10),j=parseInt(x.borderTopWidth,10),C=parseInt(x.borderRightWidth,10),q=parseInt(x.borderBottomWidth,10),B=0,I=0,_="offsetWidth"in t?t.offsetWidth-t.clientWidth-M-C:0,V="offsetHeight"in t?t.offsetHeight-t.clientHeight-j-q:0;if(i===t)B="start"===r?y:"end"===r?y-c:"nearest"===r?O(u,u+c,c,j,q,u+y,u+y+f,f):y-c/2,I="start"===l?b:"center"===l?b-a/2:"end"===l?b-a:O(s,s+a,a,M,C,s+b,s+b+h,h),B=Math.max(0,B+u),I=Math.max(0,I+s);else{B="start"===r?y-L-j:"end"===r?y-k+q+V:"nearest"===r?O(L,k,E,j,q+V,y,y+f,f):y-(L+E/2)+V/2,I="start"===l?b-T-M:"center"===l?b-(T+S/2)+_/2:"end"===l?b-A+C+_:O(T,A,S,M,C+_,b,b+h,h);var U=t.scrollLeft,W=t.scrollTop;B=Math.max(0,Math.min(W+B,t.scrollHeight-E+V)),I=Math.max(0,Math.min(U+I,t.scrollWidth-S+_))}return{top:B,left:I}}var W=e?void 0:Object.getOwnPropertyDescriptor(Element.prototype,"scrollTop").set;var H=e?void 0:Object.getOwnPropertyDescriptor(Element.prototype,"scrollLeft").set;var P=!e&&("scroll"in Element.prototype&&"scrollTo"in Element.prototype&&"scrollBy"in Element.prototype&&"scrollIntoView"in Element.prototype);e||t&&P||(Element.prototype.scroll=function(e,t){T(this,"scroll",e,t)},Element.prototype.scrollBy=function(e,t){T(this,"scrollBy",e,t)},Element.prototype.scrollTo=function(e,t){T(this,"scrollTo",e,t)},Element.prototype.scrollIntoView=function(e){var t=null==e||!0===e?{block:"start",inline:"nearest"}:!1===e?{block:"end",inline:"nearest"}:e,o=r(q(this),2),l=o[0],i=o[1],a=null!=t.behavior?t.behavior:i;if("smooth"===a)l.scrollTo(n({behavior:a},U(this,l,t)));else if(null!=V)V.call(this,t);else{var c=U(this,l,t),s=c.top,u=c.left;S("scrollTo",this).call(this,u,s)}},null!=HTMLElement.prototype.scrollIntoView&&HTMLElement.prototype.scrollIntoView!==Element.prototype.scrollIntoView&&(HTMLElement.prototype.scrollIntoView=Element.prototype.scrollIntoView),Object.defineProperty(Element.prototype,"scrollLeft",{set:function(e){return this.__adjustingScrollPosition?H.call(this,e):(T(this,"scrollTo",e,this.scrollTop),e)}}),Object.defineProperty(Element.prototype,"scrollTop",{set:function(e){return this.__adjustingScrollPosition?W.call(this,e):(T(this,"scrollTo",this.scrollLeft,e),e)}}),window.scroll=function(e,t){T(this,"scroll",e,t)},window.scrollBy=function(e,t){T(this,"scrollBy",e,t)},window.scrollTo=function(e,t){T(this,"scrollTo",e,t)},_())}()},function(e,t,n){"use strict";n.r(t);n(0),n(3),n(4);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},window.CustomEvent.prototype=window.Event.prototype),document.addEventListener("touchstart",(function(i){if("true"===i.target.getAttribute("data-swipe-ignore"))return;l=i.target,o=Date.now(),e=i.touches[0].clientX,t=i.touches[0].clientY,n=0,r=0}),!1),document.addEventListener("touchmove",(function(o){if(!e||!t)return;var l=o.touches[0].clientX,i=o.touches[0].clientY;n=e-l,r=t-i}),!1),document.addEventListener("touchend",(function(i){if(l!==i.target)return;var a=parseInt(l.getAttribute("data-swipe-threshold")||"20",10),c=parseInt(l.getAttribute("data-swipe-timeout")||"500",10),s=Date.now()-o,u="";Math.abs(n)>Math.abs(r)?Math.abs(n)>a&&s<c&&(u=n>0?"swiped-left":"swiped-right"):Math.abs(r)>a&&s<c&&(u=r>0?"swiped-up":"swiped-down");""!==u&&l.dispatchEvent(new CustomEvent(u,{bubbles:!0,cancelable:!0}));e=null,t=null,o=null}),!1);var e=null,t=null,n=null,r=null,o=null,l=null}(),(new function(){var e={init:function(){document.addEventListener("click",(function(t){if(!e.isChild(t.target,"tooltip")){var n=document.querySelectorAll(".tooltip");if(n.length)for(var r=0;r<n.length;r++){var o=n[r].querySelector("input");if(o.checked){var l=new Event("change");o.checked=!1,o.dispatchEvent(l)}}}}),!1)},isChild:function(t,n){return"object"!==r(t.className)&&t.className.split(" ").indexOf(n)>=0||"HTML"!==t.tagName&&(t.parentNode&&e.isChild(t.parentNode,n))}};return e}).init(),(new function(){var e={init:function(){var e=document.querySelectorAll('[target="_blank"]');if(e.length)for(var t=0;t<e.length;t++){var n=e[t],r=n.getAttribute("rel");r?(-1===r.indexOf("noopener")&&(r+=" noopener",n.setAttribute("rel",r)),-1===r.indexOf("noreferrer")&&(r+=" noreferrer",n.setAttribute("rel",r))):n.setAttribute("rel","noopener noreferrer")}document.body&&document.body.classList.add("js")}};return e}).init();var o=new function(){var e={init:function(){var t=this,n=document.querySelectorAll(".tab-set");if(n.length){for(var r=0;r<n.length;r++){var o=document.createElement("p"),l=n[r];o.classList.add("scroll-control","hidden"),o.setAttribute("data-js","scroll-control"),o.innerHTML='<button class="btn btn-icon icon-x-small" type="button" data-js="previous" title="Scroll left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-label="Arrow left"><path d="M50.078 100l8.855-8.84L23.99 56.076h76.1V43.8h-76.1L58.933 8.7 50.078-.148 0 49.93z" fill="currentColor"/></svg></button> <button class="btn btn-icon icon-x-small" type="button" data-js="next" title="Scroll right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-label="Arrow right"><path d="M50.003-.148l-8.855 8.84L76.1 43.775H0v12.286h76.1l-34.942 35.09L50.003 100l50.078-50.078z" fill="currentColor"/></svg></button>',l.insertAdjacentElement("beforebegin",o),l.setAttribute("data-js","active")}for(var i=function(r){var o=n[r],l=o.previousElementSibling.querySelector('[data-js="previous"]'),i=o.previousElementSibling.querySelector('[data-js="next"]');l.addEventListener("click",t.previousTab,!1),i.addEventListener("click",t.nextTab,!1),t.scrollCheck(),window.addEventListener("resize",t.scrollCheck);var a=t.currentTab(o),c=a.offsetLeft,s=a.offsetWidth,u=o.clientWidth;u<c+s&&(o.scrollLeft=c+s-u);for(var d=document.querySelectorAll('[name="tabs"]'),f=document.querySelectorAll('[role="tabpanel"]'),h=function(t){d[t].oninput=function(){e.ariaUpdate(this)},d[t].addEventListener("change",(function(){e.ariaUpdate(this)})),d[t].addEventListener("keydown",(function(t){var n=t.keyCode,r=t.key;if("Home"===r||36===n){t.preventDefault();var o=d.item(0);o.focus(),o.click(),e.ariaUpdate(o)}else if("End"===r||35===n){t.preventDefault();var l=d.item(d.length-1);l.focus(),l.click(),e.ariaUpdate(l)}})),f[t].addEventListener("swiped-left",(function(){if(t<d.length-1){var n=d[t+1];n.checked=!0,e.ariaUpdate(n)}})),f[t].addEventListener("swiped-right",(function(){if(t>0){var n=d[t-1];n.checked=!0,e.ariaUpdate(n)}}))},p=0;p<d.length;p++)h(p)},a=0;a<n.length;a++)i(a)}},scrollCheck:function(){var e=document.querySelectorAll(".tab-set");if(e.length)for(var t=0;t<e.length;t++){var n=e[t].previousSibling;e[t].scrollWidth>e[t].clientWidth?n.classList.remove("hidden"):n.classList.add("hidden")}},previousTab:function(e){for(var t=e.target.closest('[data-js="scroll-control"]').nextElementSibling,n=Math.round(t.getBoundingClientRect().left),r=t.querySelectorAll("li"),o=[],l=0;l<r.length;l++)o[l]=r[l].offsetLeft-n;for(var i=o.length-1;i>=0;i--)if(o[i]<t.scrollLeft){t.scrollLeft=o[i];break}},nextTab:function(e){for(var t=e.target.closest('[data-js="scroll-control"]').nextElementSibling,n=Math.round(t.getBoundingClientRect().left),r=t.querySelectorAll("li"),o=[],l=0;l<r.length;l++)o[l]=r[l].offsetLeft-n;for(var i=0;i<o.length;i++)if(o[i]>t.scrollLeft){t.scrollLeft=o[i];break}},currentTab:function(e){return e.querySelectorAll("em").length?e.querySelector("em").parentElement:e.querySelectorAll(".selected").length?e.querySelector(".selected").parentElement:e.querySelectorAll("li")[0]},tabInView:function(e){var t=e.parentElement.querySelector(".tab-set"),n=document.querySelector('[for="'+e.getAttribute("id")+'"]'),r=n.offsetLeft,o=n.offsetWidth,l=t.clientWidth;l<r+o?t.scrollLeft=l-o:t.scrollLeft>r&&(t.scrollLeft=r)},ariaUpdate:function(t){for(var n=document.querySelectorAll('input[name="'+t.getAttribute("name")+'"]'),r=t.parentElement.querySelectorAll('[role="tabpanel"]'),o=0;o<n.length;o++)n[o].checked?(n[o].setAttribute("aria-selected",!0),r[o].removeAttribute("hidden")):(n[o].setAttribute("aria-selected",!1),r[o].setAttribute("hidden","hidden"));e.tabInView(t)}};return e};o.init(),window.addEventListener("resize",o.scrollCheck),(new function(){var e={init:function(){var e=document.querySelectorAll('[data-js="block-scroll"]');if(e.length){for(var t=0;t<e.length;t++){var n=document.createElement("p"),r=e[t];n.classList.add("scroll-control"),n.classList.add("hidden"),n.setAttribute("data-js","scroll-control"),n.innerHTML='<button class="btn btn-icon icon-x-small" type="button" data-js="previous" title="Scroll left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-label="Arrow left"><path d="M50.078 100l8.855-8.84L23.99 56.076h76.1V43.8h-76.1L58.933 8.7 50.078-.148 0 49.93z" fill="currentColor"/></svg></button> <button class="btn btn-icon icon-x-small" type="button" data-js="next" title="Scroll right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-label="Arrow right"><path d="M50.003-.148l-8.855 8.84L76.1 43.775H0v12.286h76.1l-34.942 35.09L50.003 100l50.078-50.078z" fill="currentColor"/></svg></button>',r.insertAdjacentElement("beforebegin",n),r.setAttribute("data-active","true"),r.style.scrollBehavior="smooth";var o=r.previousElementSibling.querySelector('[data-js="previous"]'),l=r.previousElementSibling.querySelector('[data-js="next"]');o.addEventListener("click",this.previousItem,!1),l.addEventListener("click",this.nextItem,!1)}window.addEventListener("resize",this.scrollCheck),this.scrollCheck()}},scrollCheck:function(){var e=document.querySelectorAll('[data-js="block-scroll"]');if(e.length)for(var t=0;t<e.length;t++){var n=e[t],r=n.previousElementSibling;n.scrollWidth>n.clientWidth?r.classList.remove("hidden"):r.classList.add("hidden")}},previousItem:function(e){for(var t=e.target.closest('[data-js="scroll-control"]').nextElementSibling,n=t.querySelectorAll('[data-js="block-scroll-item"]'),r=[],o=0;o<n.length;o++)r[o]=n[o].offsetLeft;for(var l=r.length-1;l>=0;l--){if(l>0&&r[l]-t.scrollLeft<10){t.scrollLeft=r[l-1];break}if(r[l]<t.scrollLeft){t.scrollLeft=r[l];break}}},nextItem:function(e){for(var t=e.target.closest('[data-js="scroll-control"]').nextElementSibling,n=t.querySelectorAll('[data-js="block-scroll-item"]'),r=[],o=0;o<n.length;o++)r[o]=n[o].offsetLeft;for(var l=0;l<r.length;l++)if(r[l]>t.scrollLeft){if(l<r.length&&r[l]-t.scrollLeft<10){t.scrollLeft=r[l+1];break}if(r[l]>t.scrollLeft){t.scrollLeft=r[l];break}}}};return e}).init(),(new function(){var e={},t=document.querySelectorAll('label[data-js="label-toggle"]');return e.init=function(){if(t.length){this.expandedStatus();for(var n=0;n<t.length;n++){var r=t[n],o=document.getElementById(r.getAttribute("for"));r.addEventListener("click",e.deselectRadio,!0),o.addEventListener("change",e.expandedStatus,!0)}}},e.deselectRadio=function(e){var t=document.getElementById(this.getAttribute("for"));!0===t.checked&&(t.checked=!1,e.preventDefault())},e.expandedStatus=function(){if(t.length)for(var e=0;e<t.length;e++){var n=t[e],r=n.getAttribute("for");!0===document.getElementById(r).checked?(n.setAttribute("aria-expanded",!0),n.scrollIntoView(!0)):n.setAttribute("aria-expanded",!1),n.setAttribute("aria-controls",r)}},e}).init(),(new function(){var e={init:function(){var e=document.querySelectorAll('[data-js="share-links"] a'),t=document.location,n=document.title.split("|")[0].trim();if(e.length>0)for(var r=0;r<e.length;r++){var o=e[r],l=o.getAttribute("href");"https://twitter.com/intent/tweet"===l?o.setAttribute("href",l+"?url="+encodeURIComponent(t)+"&text="+encodeURIComponent(n)+"&via=phen_q"):"https://www.facebook.com/sharer/sharer.php"===l?o.setAttribute("href",l+"?u="+encodeURIComponent(t)+"&title="+encodeURIComponent(n)):"https://www.linkedin.com/sharing/share-offsite/"===l&&o.setAttribute("href",l+"?url="+encodeURIComponent(t))}}};return e}).init(),(new function(){var e={init:function(){var t,n=this;document.getElementById("nav-toggle")&&document.querySelectorAll(".logo-nav__nav a")&&function(){var r=document.getElementById("nav-toggle"),o=(r.parentElement,document.querySelectorAll(".logo-nav__nav a, .logo-nav__nav input, .logo-nav__nav button, .logo-nav__nav select"));for(r.addEventListener("change",n.ariaUpdate),window.addEventListener("resize",n.ariaUpdate),n.ariaUpdate(),t=0;t<o.length;t++){var l=o[t];l.addEventListener("focus",(function(){var e=new Event("change");r.checked=!0,r.dispatchEvent(e)}),!0),l.addEventListener("blur",(function(e){if("country-selector"!==e.target.id){var t=new Event("change");r.checked=!1,r.dispatchEvent(t)}}),!0),l.addEventListener("click",(function(e){if("country-selector"!==e.target.id){var t=new Event("change");r.checked=!1,r.dispatchEvent(t)}}),!0)}if(document.querySelector('[data-js="logo-nav"]')){var i=0,a=document.querySelector('[data-js="logo-nav"]'),c=a.parentElement,s=a.offsetHeight;window.addEventListener("scroll",(function(){var t=window.pageYOffset||document.documentElement.scrollTop;t>i?a.classList.remove("sticky-show"):0===t?(a.classList.remove("sticky","sticky-show"),c.style.paddingTop=0):(a.classList.add("sticky","sticky-show"),c.style.paddingTop=s+"px"),e.ariaUpdate(),i=t<=0?0:t}),!1),window.addEventListener("resize",(function(){s=a.offsetHeight}))}}()},ariaUpdate:function(){var e=document.querySelector("body"),t=document.querySelector(".logo-nav__toggle label"),n=document.getElementById("nav-toggle"),r=n.parentElement;t.offsetParent?(t.setAttribute("aria-haspopup","true"),n.checked?(t.setAttribute("aria-expanded","true"),e.style.overflow="hidden",r.classList.add("bt-light-grey","sticky-show")):(t.setAttribute("aria-expanded","false"),e.style.overflow="visible",r.classList.remove("bt-light-grey"))):(t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded"),e.style.overflow="visible")}};return e}).init(),(new function(){var e={init:function(){window.addEventListener("resize",this.gridMeasure),this.gridMeasure()},gridMeasure:function(){var e=document.querySelectorAll("[data-offgrid]");if(e.length&&!window.document.documentMode)for(var t=0;t<e.length;t++){var n=e[t],r=n.getAttribute("data-offgrid"),o=n.offsetLeft;"left"===r?n.style.marginLeft=-1*o+"px":"right"===r&&(n.style.marginRight=-1*(o-1)+"px")}}};return e}).init(),(new function(){var e={init:function(){if(document.querySelectorAll(".tooltip"))for(var t=document.querySelectorAll('[data-js="tooltip"]'),n=function(n){var r=t[n],o=r.querySelector('input[type="checkbox"]'),l=r.querySelector(".details"),i=o.getAttribute("id");l.setAttribute("id",i+"-details"),o.setAttribute("aria-controls",i+"-details");var a=t[n].querySelectorAll(".details input, .details a, .details button");e.ariaUpdate(r),o.addEventListener("change",(function(){e.ariaUpdate(r)}));for(var c=0;c<a.length;c++)a[c].addEventListener("focus",(function(){var e=new Event("change");o.checked=!0,o.dispatchEvent(e)}),!0),a[c].addEventListener("blur",(function(){var e=new Event("change");o.checked=!1,o.dispatchEvent(e)}),!0)},r=0;r<t.length;r++)n(r)},ariaUpdate:function(e){var t=e.querySelector('input[type="checkbox"]');t.checked?t.setAttribute("aria-expanded","true"):t.setAttribute("aria-expanded","false")}};return e}).init()}]);