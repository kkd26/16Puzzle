(this.webpackJsonp16puzzle=this.webpackJsonp16puzzle||[]).push([[0],{100:function(e,t,n){},267:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(91),c=n.n(o),i=n(3),s=n.n(i),l=(n(98),n(37)),u=n(11),h=n.n(u),m=n(25),d=n(16),f=n(17),v=n(19),p=n(18);var g=function(e){var t=e.id;return r.a.createElement("div",{className:"board-cell",id:t},t)};var b,w=function(e){for(var t=e.n,n=e.arr,a={gridTemplateColumns:"1fr ".repeat(t)},o=[],c=0;c<t;c++)for(var i=0;i<t;i++)o.push(r.a.createElement(g,{key:n[c][i],id:n[c][i]}));return r.a.createElement("main",{className:"board",style:a}," ",o," ")},k=37,E=38,y=39,C=40,S={"main-color":"#61DAFB","board-size":4},z=function(e){var t=new Array(e*e).fill(0).map((function(e,t){return t}));!function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}}(t);for(var n,a,r=[];t.length;)r.push(t.splice(0,e));t=r;for(var o=0;o<e;o++)for(var c=0;c<e;c++)0===t[o][c]&&(n=o,a=c);var i=t[0][0];return t[0][0]=t[n][a],t[n][a]=i,function(e){for(var t=0,n=e.length,a=0;a<n*n;a++){var r=[Math.floor(a/n),a%n],o=r[0],c=r[1],i=e[o][c];if(0!==i)for(var s=a+1;s<n*n;s++){var l=[Math.floor(s/n),s%n],u=l[1],h=e[l[0]][u];0!==h&&(i>h&&t++)}else t+=o}return t%2===0}(t)||(i=t[0][e-1],t[0][e-1]=t[1][0],t[1][0]=i),t},x=function(e){var t=localStorage.getItem(e);return null!==t&&t||(t=S[e]),t},O=function(e){localStorage.setItem("main-color",e),s()(":root").css("--main-color",e)},j=n(24),N=(n(100),n(92)),B=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={color:localStorage.getItem("main-color")},a.changeBoardSize=e.changeBoardSize,a}return Object(f.a)(n,[{key:"handleColorChange",value:function(e){this.setState({color:e})}},{key:"handleBoarSizeChange",value:function(e){var t=Math.floor(Number(s()(e.target).val()));t&&t>1&&(localStorage.setItem("board-size",t),this.changeBoardSize(t))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Change main color:"),r.a.createElement(N.SliderPicker,{color:this.state.color,onChange:this.handleColorChange.bind(this),onChangeComplete:function(e){return O(e.hex)},width:"unset"}),r.a.createElement("div",null,"Change default board size:"),r.a.createElement("input",{id:"board-size-input",type:"number",onChange:this.handleBoarSizeChange.bind(this),placeholder:localStorage.getItem("board-size")}))}}]),n}(a.Component),M=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).changeBoardSize=e.changeBoardSize,a}return Object(f.a)(n,[{key:"open",value:function(e){s()(e.target).closest(".icon-container").next(".menu").addClass("open")}},{key:"close",value:function(e){s()(e.target).closest(".menu").removeClass("open")}},{key:"render",value:function(){var e,t=this.props,a=t.name,o=t.classes;return"Menu"===a?(a=r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null),r.a.createElement("span",{className:"desktop"},a)),e=r.a.createElement(r.a.Fragment,null,r.a.createElement(n,{name:"Start new game"}),r.a.createElement(n,{name:"Profile"}),r.a.createElement(n,{name:"Settings",changeBoardSize:this.changeBoardSize}))):"Start new game"===a?e=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Game 1"),r.a.createElement("div",null,"Game 2"),r.a.createElement("div",null,"Game 3")):"Settings"===a&&(e=r.a.createElement(B,{changeBoardSize:this.changeBoardSize})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"icon-container ".concat(o),onClick:this.open,onTouchEndCapture:this.open},a),r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"icon-container",onClick:this.close,onTouchEndCapture:this.close},r.a.createElement(j.b,null)," Close"),r.a.createElement("div",{className:"menu-list"},e)))}}]),n}(a.Component),D=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(e){var a;Object(d.a)(this,n),a=t.call(this,e);var r=x("board-size"),o=z(r);return b=o.map((function(e){return e.slice()})),a.state={n:r,arr:o,emptyCell:{x:0,y:0},moves:0},s()(document).on("keydown",function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.move(t.which);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){!function(e,t){var n,a,r,o,c,i,s=e,l=t||function(e){};s.addEventListener("touchstart",(function(e){e.preventDefault();var t=e.changedTouches[0];n="none",o=0,c=0,a=t.pageX,r=t.pageY,i=(new Date).getTime(),e.preventDefault()}),!1),s.addEventListener("touchmove",(function(e){e.preventDefault()}),!1),s.addEventListener("touchend",(function(e){e.preventDefault();var t=e.changedTouches[0];o=t.pageX-a,c=t.pageY-r,(new Date).getTime()-i<=3e3&&(Math.abs(o)>=50&&Math.abs(c)<=100?n=o<0?k:y:Math.abs(c)>=50&&Math.abs(o)<=100&&(n=c<0?E:C)),l(n),e.preventDefault()}),!1)}(s()(".board")[0],this.move.bind(this))}},{key:"resetGame",value:function(e){e.preventDefault(),this.setState({arr:b.map((function(e){return e.slice()})),emptyCell:{x:0,y:0},moves:0})}},{key:"startNewGame",value:function(e){var t=z(e);b=t.map((function(e){return e.slice()})),this.setState({n:e,arr:t,emptyCell:{x:0,y:0},moves:0})}},{key:"checkWin",value:function(e){(function(e){e=e.reduce((function(e,t){return e.concat(t)}),[]);var t=Object(l.a)(e).sort((function(e,t){return e-t}));return JSON.stringify(t)===JSON.stringify(e)})(e)&&alert("won")}},{key:"move",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n,a,r,o,c,i,u,d,f=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s()(document).off("keydown"),n=this.state.arr,a=this.state.emptyCell,r=a.x,o=a.y,i=void 0,e.prev=4,e.t0=t,e.next=e.t0===E?8:e.t0===y?17:e.t0===C?26:e.t0===k?35:44;break;case 8:if(void 0!==(c=n[r+1][o])){e.next=11;break}throw new Error;case 11:return i=[{top:"100%"},{top:"0%"}],u=n[r][o],n[r][o]=n[r+1][o],n[r+1][o]=u,r++,e.abrupt("break",45);case 17:if(void 0!==(c=n[r][o-1])){e.next=20;break}throw new Error;case 20:return i=[{left:"-100%"},{left:"0%"}],u=n[r][o],n[r][o]=n[r][o-1],n[r][o-1]=u,o--,e.abrupt("break",45);case 26:if(void 0!==(c=n[r-1][o])){e.next=29;break}throw new Error;case 29:return i=[{top:"-100%"},{top:"0%"}],u=n[r][o],n[r][o]=n[r-1][o],n[r-1][o]=u,r--,e.abrupt("break",45);case 35:if(void 0!==(c=n[r][o+1])){e.next=38;break}throw new Error;case 38:return i=[{left:"100%"},{left:"0%"}],u=n[r][o],n[r][o]=n[r][o+1],n[r][o+1]=u,o++,e.abrupt("break",45);case 44:throw new Error;case 45:e.next=51;break;case 47:return e.prev=47,e.t1=e.catch(4),s()(document).on("keydown",function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.move(t.which);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return");case 51:if(this.setState({emptyCell:{x:r,y:o},arr:n,moves:this.state.moves+1}),d=Object(l.a)(n),!i){e.next=56;break}return e.next=56,s()("#".concat(c))[0].animate(i,100).finished;case 56:this.checkWin(d),s()(document).on("keydown",function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s()(document).off("keydown"),e.next=3,f.move(t.which);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 58:case"end":return e.stop()}}),e,this,[[4,47]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.moves,n=e.arr,a=e.n;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"reset icon-container",onClick:this.resetGame.bind(this),onTouchEndCapture:this.resetGame.bind(this)},r.a.createElement(j.c,null),r.a.createElement("span",{className:"desktop"},"Reset game")),r.a.createElement("div",{className:"moves"},"Moves: ",t),r.a.createElement(M,{name:"Menu",classes:"menu-button",changeBoardSize:this.startNewGame.bind(this)})),r.a.createElement(w,{n:a,arr:n}))}}]),n}(a.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}window.$=s.a;var G=x("main-color");O(G),c.a.render(r.a.createElement(D,null),document.getElementById("root")),s()("#0").css({visibility:"hidden","z-index":"-1"}),function(e){if("serviceWorker"in navigator){if(new URL("/16puzzle",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/16puzzle","/service-worker.js");T?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()},93:function(e,t,n){e.exports=n(267)},98:function(e,t,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.2a3556e9.chunk.js.map