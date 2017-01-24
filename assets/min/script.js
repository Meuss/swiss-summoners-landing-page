!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.anime=e()}(this,function(){var t,e={duration:1e3,delay:0,loop:!1,autoplay:!0,direction:"normal",easing:"easeOutElastic",elasticity:400,round:!1,begin:void 0,update:void 0,complete:void 0},n="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),r={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||r.svg(t)},num:function(t){return!isNaN(parseInt(t))},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return"undefined"==typeof t},nul:function(t){return"null"==typeof t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return r.hex(t)||r.rgb(t)||r.hsl(t)}},a=function(){var t={},e={Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t,e){if(0===t||1===t)return t;var n=1-Math.min(e,998)/1e3,r=t/1-1;return-(Math.pow(2,10*r)*Math.sin(2*(r-n/(2*Math.PI)*Math.asin(1))*Math.PI/n))},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}};return["Quad","Cubic","Quart","Quint","Expo"].forEach(function(t,n){e[t]=function(t){return Math.pow(t,n+2)}}),Object.keys(e).forEach(function(n){var r=e[n];t["easeIn"+n]=r,t["easeOut"+n]=function(t,e){return 1-r(1-t,e)},t["easeInOut"+n]=function(t,e){return.5>t?r(2*t,e)/2:1-r(-2*t+2,e)/2},t["easeOutIn"+n]=function(t,e){return.5>t?(1-r(1-2*t,e))/2:(r(2*t-1,e)+1)/2}}),t.linear=function(t){return t},t}(),o=function(t){return r.str(t)?t:t+""},i=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},u=function(t){if(r.col(t))return!1;try{return document.querySelectorAll(t)}catch(e){return!1}},s=function(t){return t.reduce(function(t,e){return t.concat(r.arr(e)?s(e):e)},[])},c=function(t){return r.arr(t)?t:(r.str(t)&&(t=u(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])},l=function(t,e){return t.some(function(t){return t===e})},f=function(t,e){var n={};return t.forEach(function(t){var r=JSON.stringify(e.map(function(e){return t[e]}));n[r]=n[r]||[],n[r].push(t)}),Object.keys(n).map(function(t){return n[t]})},d=function(t){return t.filter(function(t,e,n){return n.indexOf(t)===e})},p=function(t){var e,n={};for(e in t)n[e]=t[e];return n},m=function(t,e){for(var n in e)t[n]=r.und(t[n])?e[n]:t[n];return t},h=function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var n=parseInt(e[2],16),e=parseInt(e[3],16);return"rgb("+t+","+n+","+e+")"},v=function(t){t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t);var e=parseInt(t[1])/360,n=parseInt(t[2])/100,r=parseInt(t[3])/100;if(t=function(t,e,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?t+6*(e-t)*n:.5>n?e:n<2/3?t+(e-t)*(2/3-n)*6:t},0==n)n=r=e=r;else var a=.5>r?r*(1+n):r+n-r*n,o=2*r-a,n=t(o,a,e+1/3),r=t(o,a,e),e=t(o,a,e-1/3);return"rgb("+255*n+","+255*r+","+255*e+")"},g=function(t){return/([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(t)[2]},y=function(t,e,n){return g(e)?e:-1<t.indexOf("translate")?g(n)?e+g(n):e+"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?e+"deg":e},b=function(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(i(e))||"0"},w=function(t,e){var n=-1<e.indexOf("scale")?1:0,r=t.style.transform;if(!r)return n;for(var a=/(\w+)\((.+?)\)/g,o=[],i=[],u=[];o=a.exec(r);)i.push(o[1]),u.push(o[2]);return r=u.filter(function(t,n){return i[n]===e}),r.length?r[0]:n},x=function(t,e){return r.dom(t)&&l(n,e)?"transform":r.dom(t)&&(t.getAttribute(e)||r.svg(t)&&t[e])?"attribute":r.dom(t)&&"transform"!==e&&b(t,e)?"css":r.nul(t[e])||r.und(t[e])?void 0:"object"},M=function(t,e){switch(x(t,e)){case"transform":return w(t,e);case"css":return b(t,e);case"attribute":return t.getAttribute(e)}return t[e]||0},k=function(t,e,n){return r.col(e)?e=r.rgb(e)?e:r.hex(e)?h(e):r.hsl(e)?v(e):void 0:g(e)?e:(t=g(g(t.to)?t.to:t.from),!t&&n&&(t=g(n)),t?e+t:e)},O=function(t){var e=/-?\d*\.?\d+/g;return{original:t,numbers:o(t).match(e)?o(t).match(e).map(Number):[0],strings:o(t).split(e)}},C=function(t,e,n){return e.reduce(function(e,r,a){return r=r?r:n[a-1],e+t[a-1]+r})},S=function(t){return t=t?s(r.arr(t)?t.map(c):c(t)):[],t.map(function(t,e){return{target:t,id:e}})},A=function(t,e,n,r){return"transform"===n?(n=t+"("+y(t,e.from,e.to)+")",e=t+"("+y(t,e.to)+")"):(t="css"===n?b(r,t):void 0,n=k(e,e.from,t),e=k(e,e.to,t)),{from:O(n),to:O(e)}},I=function(t,e){var n=[];return t.forEach(function(a,o){var i=a.target;return e.forEach(function(e){var u=x(i,e.name);if(u){var s;s=e.name;var l=e.value,l=c(r.fnc(l)?l(i,o):l);s={from:1<l.length?l[0]:M(i,s),to:1<l.length?l[1]:l[0]},l=p(e),l.animatables=a,l.type=u,l.from=A(e.name,s,l.type,i).from,l.to=A(e.name,s,l.type,i).to,l.round=r.col(s.from)||l.round?1:0,l.delay=(r.fnc(l.delay)?l.delay(i,o,t.length):l.delay)/Q.speed,l.duration=(r.fnc(l.duration)?l.duration(i,o,t.length):l.duration)/Q.speed,n.push(l)}})}),n},E=function(t,e){var n=I(t,e);return f(n,["name","from","to","delay","duration"]).map(function(t){var e=p(t[0]);return e.animatables=t.map(function(t){return t.animatables}),e.totalDuration=e.delay+e.duration,e})},T=function(t,e){t.tweens.forEach(function(n){var r=n.from,a=t.duration-(n.delay+n.duration);n.from=n.to,n.to=r,e&&(n.delay=a)}),t.reversed=!t.reversed},L=function(t){if(t.length)return Math.max.apply(Math,t.map(function(t){return t.totalDuration}))},j=function(t){var e=[],n=[];return t.tweens.forEach(function(t){"css"!==t.type&&"transform"!==t.type||(e.push("css"===t.type?i(t.name):"transform"),t.animatables.forEach(function(t){n.push(t.target)}))}),{properties:d(e).join(", "),elements:d(n)}},_=function(t){var e=j(t);e.elements.forEach(function(t){t.style.willChange=e.properties})},P=function(t){j(t).elements.forEach(function(t){t.style.removeProperty("will-change")})},q=function(t,e){var n=t.path,r=t.value*e,a=function(a){return a=a||0,n.getPointAtLength(1<e?t.value+a:r+a)},o=a(),i=a(-1),a=a(1);switch(t.name){case"translateX":return o.x;case"translateY":return o.y;case"rotate":return 180*Math.atan2(a.y-i.y,a.x-i.x)/Math.PI}},F=function(t,e){var n=Math.min(Math.max(e-t.delay,0),t.duration)/t.duration,r=t.to.numbers.map(function(e,r){var o=t.from.numbers[r],i=a[t.easing](n,t.elasticity),o=t.path?q(t,i):o+i*(e-o);return o=t.round?Math.round(o*t.round)/t.round:o});return C(r,t.to.strings,t.from.strings)},X=function(e,n){var r;e.currentTime=n,e.progress=n/e.duration*100;for(var a=0;a<e.tweens.length;a++){var o=e.tweens[a];o.currentValue=F(o,n);for(var i=o.currentValue,u=0;u<o.animatables.length;u++){var s=o.animatables[u],c=s.id,s=s.target,l=o.name;switch(o.type){case"css":s.style[l]=i;break;case"attribute":s.setAttribute(l,i);break;case"object":s[l]=i;break;case"transform":r||(r={}),r[c]||(r[c]=[]),r[c].push(i)}}}if(r)for(a in t||(t=(b(document.body,"transform")?"":"-webkit-")+"transform"),r)e.animatables[a].target.style[t]=r[a].join(" ");e.settings.update&&e.settings.update(e)},Y=function(t){var n={};n.animatables=S(t.targets),n.settings=m(t,e);var a,o=n.settings,i=[];for(a in t)if(!e.hasOwnProperty(a)&&"targets"!==a){var u=r.obj(t[a])?p(t[a]):{value:t[a]};u.name=a,i.push(m(u,o))}return n.properties=i,n.tweens=E(n.animatables,n.properties),n.duration=L(n.tweens)||t.duration,n.currentTime=0,n.progress=0,n.ended=!1,n},H=[],N=0,$=function(){var t=function(){N=requestAnimationFrame(e)},e=function(e){if(H.length){for(var n=0;n<H.length;n++)H[n].tick(e);t()}else cancelAnimationFrame(N),N=0};return t}(),Q=function(t){var e=Y(t),n={};return e.tick=function(t){e.ended=!1,n.start||(n.start=t),n.current=Math.min(Math.max(n.last+t-n.start,0),e.duration),X(e,n.current);var a=e.settings;a.begin&&n.current>=a.delay&&(a.begin(e),a.begin=void 0),n.current>=e.duration&&(a.loop?(n.start=t,"alternate"===a.direction&&T(e,!0),r.num(a.loop)&&a.loop--):(e.ended=!0,e.pause(),a.complete&&a.complete(e)),n.last=0)},e.seek=function(t){X(e,t/100*e.duration)},e.pause=function(){P(e);var t=H.indexOf(e);-1<t&&H.splice(t,1)},e.play=function(t){e.pause(),t&&(e=m(Y(m(t,e.settings)),e)),n.start=0,n.last=e.ended?0:e.currentTime,t=e.settings,"reverse"===t.direction&&T(e),"alternate"!==t.direction||t.loop||(t.loop=1),_(e),H.push(e),N||$()},e.restart=function(){e.reversed&&T(e),e.pause(),e.seek(0),e.play()},e.settings.autoplay&&e.play(),e};return Q.version="1.1.1",Q.speed=1,Q.list=H,Q.remove=function(t){t=s(r.arr(t)?t.map(c):c(t));for(var e=H.length-1;0<=e;e--)for(var n=H[e],a=n.tweens,o=a.length-1;0<=o;o--)for(var i=a[o].animatables,u=i.length-1;0<=u;u--)l(t,i[u].target)&&(i.splice(u,1),i.length||a.splice(o,1),a.length||n.pause())},Q.easings=a,Q.getValue=M,Q.path=function(t){return t=r.str(t)?u(t)[0]:t,{path:t,value:t.getTotalLength()}},Q.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},Q}),function(t){"use strict";function e(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function n(t,e,n){var r=document.createElement(t);return r.className=e||"",r.innerHTML=n||"",r}function r(t,n){this.el=t,this.options=e({},this.options),e(this.options,n),this._init()}r.prototype.options={isContentHidden:!0,revealSettings:{direction:"lr",bgcolor:"#f0f0f0",duration:500,easing:"easeInOutQuint",coverArea:0,onCover:function(t,e){return!1},onStart:function(t,e){return!1},onComplete:function(t,e){return!1}}},r.prototype._init=function(){this._layout()},r.prototype._layout=function(){var t=getComputedStyle(this.el).position;"fixed"!==t&&"absolute"!==t&&"relative"!==t&&(this.el.style.position="relative"),this.content=n("div","block-revealer__content",this.el.innerHTML),this.options.isContentHidden&&(this.content.style.opacity=0),this.revealer=n("div","block-revealer__element"),this.el.classList.add("block-revealer"),this.el.innerHTML="",this.el.appendChild(this.content),this.el.appendChild(this.revealer)},r.prototype._getTransformSettings=function(t){var e,n,r;switch(t){case"lr":e="scale3d(0,1,1)",n="0 50%",r="100% 50%";break;case"rl":e="scale3d(0,1,1)",n="100% 50%",r="0 50%";break;case"tb":e="scale3d(1,0,1)",n="50% 0",r="50% 100%";break;case"bt":e="scale3d(1,0,1)",n="50% 100%",r="50% 0";break;default:e="scale3d(0,1,1)",n="0 50%",r="100% 50%"}return{val:e,origin:{initial:n,halfway:r}}},r.prototype.reveal=function(t){if(this.isAnimating)return!1;this.isAnimating=!0;var e={duration:500,easing:"easeInOutQuint",delay:0,bgcolor:"#f0f0f0",direction:"lr",coverArea:0},t=t||this.options.revealSettings,n=t.direction||e.direction,r=this._getTransformSettings(n);this.revealer.style.WebkitTransform=this.revealer.style.transform=r.val,this.revealer.style.WebkitTransformOrigin=this.revealer.style.transformOrigin=r.origin.initial,this.revealer.style.backgroundColor=t.bgcolor||e.bgcolor,this.revealer.style.opacity=1;var a=this,o={complete:function(){a.isAnimating=!1,"function"==typeof t.onComplete&&t.onComplete(a.content,a.revealer)}},i={delay:t.delay||e.delay,complete:function(){a.revealer.style.WebkitTransformOrigin=a.revealer.style.transformOrigin=r.origin.halfway,"function"==typeof t.onCover&&t.onCover(a.content,a.revealer),anime(o)}};i.targets=o.targets=this.revealer,i.duration=o.duration=t.duration||e.duration,i.easing=o.easing=t.easing||e.easing;var u=t.coverArea||e.coverArea;"lr"===n||"rl"===n?(i.scaleX=[0,1],o.scaleX=[1,u/100]):(i.scaleY=[0,1],o.scaleY=[1,u/100]),"function"==typeof t.onStart&&t.onStart(a.content,a.revealer),anime(i)},t.RevealFx=r}(window),function(){function t(){document.body.classList.remove("loading");var t=new RevealFx(document.querySelector("h1"),{revealSettings:{duration:800,onCover:function(t,e){t.style.opacity=1}}});t.reveal();var e=new RevealFx(document.querySelector("h2"),{revealSettings:{delay:250,duration:800,onCover:function(t,e){t.style.opacity=1},onComplete:function(){document.querySelector("p").classList="p-showing",document.querySelector("a").classList="a-showing"}}});e.reveal()}setTimeout(t,1e3)}();