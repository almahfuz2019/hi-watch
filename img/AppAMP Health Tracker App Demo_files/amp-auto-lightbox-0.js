(self.AMP=self.AMP||[]).push({n:"amp-auto-lightbox",ev:"0.1",l:true,v:"2104081613001",m:0,f:(function(AMP,_){
'use strict';function h(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}h(this);"function"===typeof Symbol&&Symbol("x");var m;function p(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function r(a){return a?Array.prototype.slice.call(a):[]};var t=self.AMP_CONFIG||{},u=("string"==typeof t.cdnProxyRegex?new RegExp(t.cdnProxyRegex):t.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function v(a){if(self.document&&self.document.head&&(!self.location||!u.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}t.cdnUrl||v("runtime-host");t.geoApiUrl||v("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(){if(w.dev)return w.dev;throw Error("failed to call initLogConstructor");};function y(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return z(a,b)}function A(a,b){var c=B(a);c=C(c);return z(c,b)}function B(a){return a.nodeType?y((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function C(a){a=B(a);return a.isSingleDoc()?a.win:a}function z(a,b){D(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function D(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var E={bubbles:!0,cancelable:!0};function F(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}
function G(a){return a.closest?a.closest("a[href],amp-script,amp-story,button,amp-lightbox,amp-carousel,[placeholder],[data-amp-auto-lightbox-disable],amp-selector [option],[subscriptions-action]"):F(a,function(b){var c=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.msMatchesSelector||b.oMatchesSelector;return c?c.call(b,"a[href],amp-script,amp-story,button,amp-lightbox,amp-carousel,[placeholder],[data-amp-auto-lightbox-disable],amp-selector [option],[subscriptions-action]"):!1})}
function H(a){a.tagName.startsWith("AMP-");if(a.createdCallback)return Promise.resolve(a);if(!a.__AMP_UPG_PRM){var b=new p;a.__AMP_UPG_PRM=b.promise;a.__AMP_UPG_RES=b.resolve}return a.__AMP_UPG_PRM};/nochunking=1/.test(self.location.hash);(function(){return m?m:m=Promise.resolve(void 0)})();function I(a,b){var c={needsRootBounds:!1},d=c=void 0===c?{}:c,e=d.needsRootBounds;return new b.IntersectionObserver(a,{threshold:d.threshold,root:b.parent&&b.parent!=b&&e?b.document:void 0})}new WeakMap;new WeakMap;var J,K;function L(a){J||(J=new WeakMap,K=new WeakMap);if(!K.has(a)){var b=I(function(c){for(var d=new Set,e=c.length-1;0<=e;e--){var f=c[e].target;d.has(f)||(d.add(f),b.unobserve(f),J.get(f).resolve(c[e]),J.delete(f))}},a);K.set(a,b);return b}return K.get(a)}function M(a){if(J&&J.has(a))return J.get(a).promise;L(a.ownerDocument.defaultView).observe(a);var b=new p;J.set(a,b);return b.promise};var N={Article:!0,NewsArticle:!0,BlogPosting:!0,LiveBlogPosting:!0,DiscussionForumPosting:!0};function O(){}var P=/\s+([0-9]+)w(,|[\S\s]*$)/g;function Q(a){return A(a,"mutator").mutateElement(a,function(){a.setAttribute("i-amphtml-auto-lightbox-visited","")})}function R(a){return H(a).then(function(b){return b.signals().whenSignal("load-end")})}
function S(a){return r(a.getRootNode().querySelectorAll('script[type="application/ld+json"]')).map(function(b){try{var c=JSON.parse(b.textContent)}catch(d){c=null}return(c||{})["@type"]}).filter(Boolean)}function T(a){return S(a).some(function(b){return N[b]})}function U(a){function b(c){return!!a.getRootNode().querySelector(c)}return b('script[custom-element="amp-lightbox-gallery"]')&&b("[lightbox]:not([i-amphtml-auto-lightbox-visited])")}var V=0;
function W(a,b){return A(a,"mutator").mutateElement(b,function(){b.setAttribute("lightbox","i-amphtml-auto-lightbox-"+V++)}).then(function(){y(a.win,"extensions").installExtensionForDoc(a,"amp-lightbox-gallery");var c=b.ownerDocument.createEvent("Event");c.data={};c.initEvent("amp-auto-lightbox:newly-set",E.bubbles,E.cancelable);b.dispatchEvent(c);return b})}
function X(a,b){b.map(function(c){return R(c).then(function(){if(!c.signals().get("unload"))return M(c).then(function(d){var e=d.boundingClientRect;d=e.width;e=e.height;var f=c.querySelector("img"),l=f.naturalWidth;var k=f.naturalHeight;var q=l/k;var g=-1;if(f=f.getAttribute("srcset"))for(var n;n=P.exec(f);)n=parseInt(n[1],10),n>g&&(g=n);k=g>l?{naturalWidth:g,naturalHeight:g/q}:{naturalWidth:l,naturalHeight:k};l=k.naturalWidth;k=k.naturalHeight;g=A(c,"viewport").getSize();q=g.width;g=g.height;d*=
e;if(d=1.2<=l*k/d||l>q||k>g||.25<=d/(q*g))G(c)?d=!1:(d=B(c),d=C(d),d=!(D(d,"action")?z(d,"action"):null).hasResolvableAction(c,"tap"));if(d)return x().info("amp-auto-lightbox","apply",c),W(a,c)})},O)})}
function Y(a,b){if(U(a))var c=0;else c=(c=a.getRootNode().querySelector('meta[property="og:type"]'))?c.getAttribute("content"):void 0,c="article"==c||T(a);c?(c=r((b||a.win.document).querySelectorAll("amp-img:not([lightbox]):not([i-amphtml-auto-lightbox-visited])")),c.forEach(Q),X(a,c)):x().info("amp-auto-lightbox","disabled")}(function(a){var b=a.ampdoc;b.whenReady().then(function(){b.getRootNode().addEventListener("amp:dom-update",function(c){Y(b,c.target)});Y(b)})})(self.AMP);
})});

//# sourceMappingURL=amp-auto-lightbox-0.1.js.map
