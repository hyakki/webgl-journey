(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{164:function(t,n){!function(t,n){"use strict";function e(t){return document.createElement(t)}function o(element,t){for(var n in t)try{element.style[n]=t[n]}catch(t){}return element}function r(t){return null==t?String(t):"object"==typeof t||"function"==typeof t?Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof t}function h(t,n){if("array"!==r(n))return-1;if(n.indexOf)return n.indexOf(t);for(var i=0,e=n.length;i<e;i++)if(n[i]===t)return i;return-1}function l(){var t=arguments;for(var n in t[1])if(t[1].hasOwnProperty(n))switch(r(t[1][n])){case"object":t[0][n]=l({},t[0][n],t[1][n]);break;case"array":t[0][n]=t[1][n].slice(0);break;default:t[0][n]=t[1][n]}return t.length>2?l.apply(null,[t[0]].concat(Array.prototype.slice.call(t,2))):t[0]}function c(t){return 1===(t=Math.round(255*t).toString(16)).length?"0"+t:t}function d(element,t,n,e){element.addEventListener?element[e?"removeEventListener":"addEventListener"](t,n,!1):element.attachEvent&&element[e?"detachEvent":"attachEvent"]("on"+t,n)}var m;!function(){var n=t.performance;if(n&&(n.now||n.webkitNow)){var e=n.now?"now":"webkitNow";m=n[e].bind(n)}else m=function(){return+new Date}}();var f=t.cancelAnimationFrame||t.cancelRequestAnimationFrame,v=t.requestAnimationFrame;!function(){for(var n=["moz","webkit","o"],e=0,i=0,o=n.length;i<o&&!f;++i)f=t[n[i]+"CancelAnimationFrame"]||t[n[i]+"CancelRequestAnimationFrame"],v=f&&t[n[i]+"RequestAnimationFrame"];f||(v=function(n){var o=m(),r=Math.max(0,16-(o-e));return e=o+r,t.setTimeout((function(){n(o+r)}),r)},f=function(t){clearTimeout(t)})}();var x="string"===r(document.createElement("div").textContent)?"textContent":"innerText";function w(t,O){"object"===r(t)&&t.nodeType===n&&(O=t,t=document.body),t||(t=document.body);var F,S,time,M,C,z,j,i,A,P=this,E=l({},w.defaults,O||{}),I={},H=[],N=100,T=[],Y=E.threshold,L=0,D=m()-Y,R=[],B=[],J="fps"===E.show;function _(t,n,e,o){return S[0|t][Math.round(Math.min((n-e)/(o-e)*N,N))]}function V(){I.legend.fps!==J&&(I.legend.fps=J,I.legend[x]=J?"FPS":"ms"),j=J?P.fps:P.duration,I.count[x]=j>999?"999+":j.toFixed(j>99?0:E.decimals)}function W(){if(time=m(),D<time-E.threshold&&(P.fps-=P.fps/Math.max(1,60*E.smoothing/E.interval),P.duration=1e3/P.fps),function(){for(i=E.history;i--;)R[i]=0===i?P.fps:R[i-1],B[i]=0===i?P.duration:B[i-1]}(),V(),E.heat){if(T.length)for(i=T.length;i--;)T[i].el.style[F[T[i].name].heatOn]=J?_(F[T[i].name].heatmap,P.fps,0,E.maxFps):_(F[T[i].name].heatmap,P.duration,E.threshold,0);if(I.graph&&F.column.heatOn)for(i=H.length;i--;)H[i].style[F.column.heatOn]=J?_(F.column.heatmap,R[i],0,E.maxFps):_(F.column.heatmap,B[i],E.threshold,0)}if(I.graph)for(A=0;A<E.history;A++)H[A].style.height=(J?R[A]?Math.round(z/E.maxFps*Math.min(R[A],E.maxFps)):0:B[A]?Math.round(z/E.threshold*Math.min(B[A],E.threshold)):0)+"px"}function G(){E.interval<20?(M=v(G),W()):(M=setTimeout(G,E.interval),C=v(W))}function K(t){(t=t||window.event).preventDefault?(t.preventDefault(),t.stopPropagation()):(t.returnValue=!1,t.cancelBubble=!0),P.toggle()}function Q(){E.toggleOn&&d(I.container,E.toggleOn,K,1),t.removeChild(I.container)}function U(){for(var n in I.container&&Q(),function(){if(F=w.theme[E.theme],!(S=F.compiledHeatmaps||[]).length&&F.heatmaps.length){for(A=0;A<F.heatmaps.length;A++)for(S[A]=[],i=0;i<=N;i++)S[A][i]=(t=.33/N*i,s=F.heatmaps[A].saturation,n=F.heatmaps[A].lightness,e=void 0,g=void 0,b=void 0,o=void 0,r=void 0,h=void 0,l=void 0,0==(o=n<=.5?n*(1+s):n+s-n*s)?"#000":(l=o*((o-(r=2*n-o))/o)*((t*=6)-(h=Math.floor(t))),0===h||6===h?(e=o,g=r+l,b=r):1===h?(e=o-l,g=o,b=r):2===h?(e=r,g=o,b=r+l):3===h?(e=r,g=o-l,b=o):4===h?(e=r+l,g=r,b=o):(e=o,g=r,b=o-l),"#"+c(e)+c(g)+c(b)));F.compiledHeatmaps=S}var t,s,n,e,g,b,o,r,h,l}(),I.container=o(e("div"),F.container),I.count=I.container.appendChild(o(e("div"),F.count)),I.legend=I.container.appendChild(o(e("div"),F.legend)),I.graph=E.graph?I.container.appendChild(o(e("div"),F.graph)):0,T.length=0,I)I[n]&&F[n].heatOn&&T.push({name:n,el:I[n]});if(H.length=0,I.graph)for(I.graph.style.width=E.history*F.column.width+(E.history-1)*F.column.spacing+"px",i=0;i<E.history;i++)H[i]=I.graph.appendChild(o(e("div"),F.column)),H[i].style.position="absolute",H[i].style.bottom=0,H[i].style.right=i*F.column.width+i*F.column.spacing+"px",H[i].style.width=F.column.width+"px",H[i].style.height="0px";X(),V(),t.appendChild(I.container),I.graph&&(z=I.graph.clientHeight),E.toggleOn&&("click"===E.toggleOn&&(I.container.style.cursor="pointer"),d(I.container,E.toggleOn,K))}function X(){o(I.container,E)}P.options=E,P.fps=0,P.duration=0,P.isPaused=0,P.tickStart=function(){L=m()},P.tick=function(){time=m(),Y+=(time-D-Y)/E.smoothing,P.fps=1e3/Y,P.duration=L<D?Y:time-L,D=time},P.pause=function(){return M&&(P.isPaused=1,clearTimeout(M),f(M),f(C),M=C=0),P},P.resume=function(){return M||(P.isPaused=0,G()),P},P.set=function(t,n){return E[t]=n,J="fps"===E.show,-1!==h(t,y)&&U(),-1!==h(t,k)&&X(),P},P.showDuration=function(){return P.set("show","ms"),P},P.showFps=function(){return P.set("show","fps"),P},P.toggle=function(){return P.set("show",J?"ms":"fps"),P},P.hide=function(){return P.pause(),I.container.style.display="none",P},P.show=function(){return P.resume(),I.container.style.display="block",P},P.destroy=function(){P.pause(),Q(),P.tick=P.tickStart=function(){}},U(),G()}w.extend=l,window.FPSMeter=w,w.defaults={interval:100,smoothing:10,show:"fps",toggleOn:"click",decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"5px",top:"5px",right:"auto",bottom:"auto",margin:"0 0 0 0",theme:"dark",heat:0,graph:0,history:20};var y=["toggleOn","theme","heat","graph","history"],k=["position","zIndex","left","top","right","bottom","margin"]}(window),function(t,n,e){"use strict";n.theme={};var base=n.theme.base={heatmaps:[],container:{heatOn:null,heatmap:null,padding:"5px",minWidth:"95px",height:"30px",lineHeight:"30px",textAlign:"right",textShadow:"none"},count:{heatOn:null,heatmap:null,position:"absolute",top:0,right:0,padding:"5px 10px",height:"30px",fontSize:"24px",fontFamily:"Consolas, Andale Mono, monospace",zIndex:2},legend:{heatOn:null,heatmap:null,position:"absolute",top:0,left:0,padding:"5px 10px",height:"30px",fontSize:"12px",lineHeight:"32px",fontFamily:"sans-serif",textAlign:"left",zIndex:2},graph:{heatOn:null,heatmap:null,position:"relative",boxSizing:"padding-box",MozBoxSizing:"padding-box",height:"100%",zIndex:1},column:{width:4,spacing:1,heatOn:null,heatmap:null}};n.theme.dark=n.extend({},base,{heatmaps:[{saturation:.8,lightness:.8}],container:{background:"#222",color:"#fff",border:"1px solid #1a1a1a",textShadow:"1px 1px 0 #222"},count:{heatOn:"color"},column:{background:"#3f3f3f"}}),n.theme.light=n.extend({},base,{heatmaps:[{saturation:.5,lightness:.5}],container:{color:"#666",background:"#fff",textShadow:"1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},count:{heatOn:"color"},column:{background:"#eaeaea"}}),n.theme.colorful=n.extend({},base,{heatmaps:[{saturation:.5,lightness:.6}],container:{heatOn:"backgroundColor",background:"#888",color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.2)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},column:{background:"#777",backgroundColor:"rgba(0,0,0,.2)"}}),n.theme.transparent=n.extend({},base,{heatmaps:[{saturation:.8,lightness:.5}],container:{padding:0,color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.5)"},count:{padding:"0 5px",height:"40px",lineHeight:"40px"},legend:{padding:"0 5px",height:"40px",lineHeight:"42px"},graph:{height:"40px"},column:{width:5,background:"#999",heatOn:"backgroundColor",opacity:.5}})}(window,FPSMeter)},175:function(t,n,e){"use strict";e.r(n);var o=e(160),r=e(161),h=e(162),l=e.n(h),c=e(180),d=e.n(c),m=e(165),f=e.n(m),v=e(187),x=e.n(v),w=(e(188),function(){function t(canvas,n){Object(o.a)(this,t),this.canvas=canvas,this.regl=l()(canvas),this.initMeter(n),this.init()}return Object(r.a)(t,[{key:"initMeter",value:function(t){e(164),this.meter=new FPSMeter(t,{interval:100,smoothing:10,show:"fps",toggleOn:!1,decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"auto",top:"auto",right:"0px",bottom:"0px",margin:"0 0 0 0",height:"auto",theme:"transparent",heat:1,graph:1,history:20})}},{key:"init",value:function(){var t=this;this.view=x.a.lookAt([],[0,0,-20],[0,5,0],[0,1,0]),this.projection=x.a.perspective([],Math.PI/4,this.canvas.width/this.canvas.height,.01,1e5),this.handleOrientation=this.handleOrientation.bind(this),window.addEventListener("deviceorientation",this.handleOrientation,!0),this.rotationY=x.a.rotateY(x.a.create(),x.a.create(),2*Math.PI/360*190),this.regl.frame((function(n){var time=n.time;t.meter.tick(),t.draw(time)}))}},{key:"handleOrientation",value:function(t){t.alpha,t.beta;var n=t.gamma,e=(parseInt(n)-25)/5;this.view=x.a.lookAt([],[e,0,-20],[0,5,0],[0,1,0])}},{key:"draw",value:function(time){this.regl.clear({depth:1,color:[.75,.85,.8,1]}),this.regl({vert:"\n        precision highp float;\n        attribute vec3 position;\n        attribute vec3 normal;\n        uniform mat4 projection;\n        uniform mat4 view;\n        uniform mat4 rotationY;\n        varying vec3 vNormal;\n        void main () {\n          vNormal = normal;\n          gl_Position =  projection * view * rotationY * vec4(position, 1.0);\n        }\n      ",frag:"\n        precision highp float;\n        varying vec3 vNormal;\n        void main () {\n          gl_FragColor = vec4(vNormal * 0.5 + 0.5, 1.0);\n        }\n      ",attributes:{position:d.a.positions,normal:f()(d.a.cells,d.a.positions)},uniforms:{view:this.view,projection:this.projection,rotationY:this.rotationY},elements:d.a.cells})()}},{key:"destroy",value:function(){this.regl&&this.regl.destroy(),this.meter.destroy()}}]),t}());n.default=w}}]);