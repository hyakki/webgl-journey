(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{164:function(n,t){!function(n,t){"use strict";function e(n){return document.createElement(n)}function o(element,n){for(var t in n)try{element.style[t]=n[t]}catch(n){}return element}function r(n){return null==n?String(n):"object"==typeof n||"function"==typeof n?Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof n}function c(n,t){if("array"!==r(t))return-1;if(t.indexOf)return t.indexOf(n);for(var i=0,e=t.length;i<e;i++)if(t[i]===n)return i;return-1}function l(){var n=arguments;for(var t in n[1])if(n[1].hasOwnProperty(t))switch(r(n[1][t])){case"object":n[0][t]=l({},n[0][t],n[1][t]);break;case"array":n[0][t]=n[1][t].slice(0);break;default:n[0][t]=n[1][t]}return n.length>2?l.apply(null,[n[0]].concat(Array.prototype.slice.call(n,2))):n[0]}function h(n){return 1===(n=Math.round(255*n).toString(16)).length?"0"+n:n}function d(element,n,t,e){element.addEventListener?element[e?"removeEventListener":"addEventListener"](n,t,!1):element.attachEvent&&element[e?"detachEvent":"attachEvent"]("on"+n,t)}var x;!function(){var t=n.performance;if(t&&(t.now||t.webkitNow)){var e=t.now?"now":"webkitNow";x=t[e].bind(t)}else x=function(){return+new Date}}();var m=n.cancelAnimationFrame||n.cancelRequestAnimationFrame,f=n.requestAnimationFrame;!function(){for(var t=["moz","webkit","o"],e=0,i=0,o=t.length;i<o&&!m;++i)m=n[t[i]+"CancelAnimationFrame"]||n[t[i]+"CancelRequestAnimationFrame"],f=m&&n[t[i]+"RequestAnimationFrame"];m||(f=function(t){var o=x(),r=Math.max(0,16-(o-e));return e=o+r,n.setTimeout((function(){t(o+r)}),r)},m=function(n){clearTimeout(n)})}();var v="string"===r(document.createElement("div").textContent)?"textContent":"innerText";function y(n,k){"object"===r(n)&&n.nodeType===t&&(k=n,n=document.body),n||(n=document.body);var C,S,time,O,F,j,M,i,A,I=this,L=l({},y.defaults,k||{}),Y={},P=[],E=100,D=[],T=L.threshold,G=0,N=x()-T,H=[],Z=[],X="fps"===L.show;function R(n,t,e,o){return S[0|n][Math.round(Math.min((t-e)/(o-e)*E,E))]}function B(){Y.legend.fps!==X&&(Y.legend.fps=X,Y.legend[v]=X?"FPS":"ms"),M=X?I.fps:I.duration,Y.count[v]=M>999?"999+":M.toFixed(M>99?0:L.decimals)}function J(){if(time=x(),N<time-L.threshold&&(I.fps-=I.fps/Math.max(1,60*L.smoothing/L.interval),I.duration=1e3/I.fps),function(){for(i=L.history;i--;)H[i]=0===i?I.fps:H[i-1],Z[i]=0===i?I.duration:Z[i-1]}(),B(),L.heat){if(D.length)for(i=D.length;i--;)D[i].el.style[C[D[i].name].heatOn]=X?R(C[D[i].name].heatmap,I.fps,0,L.maxFps):R(C[D[i].name].heatmap,I.duration,L.threshold,0);if(Y.graph&&C.column.heatOn)for(i=P.length;i--;)P[i].style[C.column.heatOn]=X?R(C.column.heatmap,H[i],0,L.maxFps):R(C.column.heatmap,Z[i],L.threshold,0)}if(Y.graph)for(A=0;A<L.history;A++)P[A].style.height=(X?H[A]?Math.round(j/L.maxFps*Math.min(H[A],L.maxFps)):0:Z[A]?Math.round(j/L.threshold*Math.min(Z[A],L.threshold)):0)+"px"}function _(){L.interval<20?(O=f(_),J()):(O=setTimeout(_,L.interval),F=f(J))}function K(n){(n=n||window.event).preventDefault?(n.preventDefault(),n.stopPropagation()):(n.returnValue=!1,n.cancelBubble=!0),I.toggle()}function V(){L.toggleOn&&d(Y.container,L.toggleOn,K,1),n.removeChild(Y.container)}function W(){for(var t in Y.container&&V(),function(){if(C=y.theme[L.theme],!(S=C.compiledHeatmaps||[]).length&&C.heatmaps.length){for(A=0;A<C.heatmaps.length;A++)for(S[A]=[],i=0;i<=E;i++)S[A][i]=(n=.33/E*i,s=C.heatmaps[A].saturation,t=C.heatmaps[A].lightness,e=void 0,g=void 0,b=void 0,o=void 0,r=void 0,c=void 0,l=void 0,0==(o=t<=.5?t*(1+s):t+s-t*s)?"#000":(l=o*((o-(r=2*t-o))/o)*((n*=6)-(c=Math.floor(n))),0===c||6===c?(e=o,g=r+l,b=r):1===c?(e=o-l,g=o,b=r):2===c?(e=r,g=o,b=r+l):3===c?(e=r,g=o-l,b=o):4===c?(e=r+l,g=r,b=o):(e=o,g=r,b=o-l),"#"+h(e)+h(g)+h(b)));C.compiledHeatmaps=S}var n,s,t,e,g,b,o,r,c,l}(),Y.container=o(e("div"),C.container),Y.count=Y.container.appendChild(o(e("div"),C.count)),Y.legend=Y.container.appendChild(o(e("div"),C.legend)),Y.graph=L.graph?Y.container.appendChild(o(e("div"),C.graph)):0,D.length=0,Y)Y[t]&&C[t].heatOn&&D.push({name:t,el:Y[t]});if(P.length=0,Y.graph)for(Y.graph.style.width=L.history*C.column.width+(L.history-1)*C.column.spacing+"px",i=0;i<L.history;i++)P[i]=Y.graph.appendChild(o(e("div"),C.column)),P[i].style.position="absolute",P[i].style.bottom=0,P[i].style.right=i*C.column.width+i*C.column.spacing+"px",P[i].style.width=C.column.width+"px",P[i].style.height="0px";Q(),B(),n.appendChild(Y.container),Y.graph&&(j=Y.graph.clientHeight),L.toggleOn&&("click"===L.toggleOn&&(Y.container.style.cursor="pointer"),d(Y.container,L.toggleOn,K))}function Q(){o(Y.container,L)}I.options=L,I.fps=0,I.duration=0,I.isPaused=0,I.tickStart=function(){G=x()},I.tick=function(){time=x(),T+=(time-N-T)/L.smoothing,I.fps=1e3/T,I.duration=G<N?T:time-G,N=time},I.pause=function(){return O&&(I.isPaused=1,clearTimeout(O),m(O),m(F),O=F=0),I},I.resume=function(){return O||(I.isPaused=0,_()),I},I.set=function(n,t){return L[n]=t,X="fps"===L.show,-1!==c(n,w)&&W(),-1!==c(n,z)&&Q(),I},I.showDuration=function(){return I.set("show","ms"),I},I.showFps=function(){return I.set("show","fps"),I},I.toggle=function(){return I.set("show",X?"ms":"fps"),I},I.hide=function(){return I.pause(),Y.container.style.display="none",I},I.show=function(){return I.resume(),Y.container.style.display="block",I},I.destroy=function(){I.pause(),V(),I.tick=I.tickStart=function(){}},W(),_()}y.extend=l,window.FPSMeter=y,y.defaults={interval:100,smoothing:10,show:"fps",toggleOn:"click",decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"5px",top:"5px",right:"auto",bottom:"auto",margin:"0 0 0 0",theme:"dark",heat:0,graph:0,history:20};var w=["toggleOn","theme","heat","graph","history"],z=["position","zIndex","left","top","right","bottom","margin"]}(window),function(n,t,e){"use strict";t.theme={};var base=t.theme.base={heatmaps:[],container:{heatOn:null,heatmap:null,padding:"5px",minWidth:"95px",height:"30px",lineHeight:"30px",textAlign:"right",textShadow:"none"},count:{heatOn:null,heatmap:null,position:"absolute",top:0,right:0,padding:"5px 10px",height:"30px",fontSize:"24px",fontFamily:"Consolas, Andale Mono, monospace",zIndex:2},legend:{heatOn:null,heatmap:null,position:"absolute",top:0,left:0,padding:"5px 10px",height:"30px",fontSize:"12px",lineHeight:"32px",fontFamily:"sans-serif",textAlign:"left",zIndex:2},graph:{heatOn:null,heatmap:null,position:"relative",boxSizing:"padding-box",MozBoxSizing:"padding-box",height:"100%",zIndex:1},column:{width:4,spacing:1,heatOn:null,heatmap:null}};t.theme.dark=t.extend({},base,{heatmaps:[{saturation:.8,lightness:.8}],container:{background:"#222",color:"#fff",border:"1px solid #1a1a1a",textShadow:"1px 1px 0 #222"},count:{heatOn:"color"},column:{background:"#3f3f3f"}}),t.theme.light=t.extend({},base,{heatmaps:[{saturation:.5,lightness:.5}],container:{color:"#666",background:"#fff",textShadow:"1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},count:{heatOn:"color"},column:{background:"#eaeaea"}}),t.theme.colorful=t.extend({},base,{heatmaps:[{saturation:.5,lightness:.6}],container:{heatOn:"backgroundColor",background:"#888",color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.2)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},column:{background:"#777",backgroundColor:"rgba(0,0,0,.2)"}}),t.theme.transparent=t.extend({},base,{heatmaps:[{saturation:.8,lightness:.5}],container:{padding:0,color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.5)"},count:{padding:"0 5px",height:"40px",lineHeight:"40px"},legend:{padding:"0 5px",height:"40px",lineHeight:"42px"},graph:{height:"40px"},column:{width:5,background:"#999",heatOn:"backgroundColor",opacity:.5}})}(window,FPSMeter)},176:function(n,t,e){"use strict";e.r(t);var o=e(160),r=e(161),c=e(180),l=e.n(c),h=e(165),d=e.n(h),x=e(187),m=e.n(x),f=(e(188),e(162)),v=e(293),y=v(["precision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vNormal;\n\nvoid main () {\n  gl_FragColor = vec4(vNormal * 0.5 + 0.5, 1.0);\n}\n"]),w=v(["//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nfloat mod289(float x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip)\n  {\n  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n  vec4 p,s;\n\n  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n  s = vec4(lessThan(p, vec4(0.0)));\n  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n  return p;\n  }\n\n// (sqrt(5) - 1)/4 = F4, used once below\n#define F4 0.309016994374947451\n\nfloat snoise(vec4 v)\n  {\n  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n                        0.276393202250021,  // 2 * G4\n                        0.414589803375032,  // 3 * G4\n                       -0.447213595499958); // -1 + 4 * G4\n\n// First corner\n  vec4 i  = floor(v + dot(v, vec4(F4)) );\n  vec4 x0 = v -   i + dot(i, C.xxxx);\n\n// Other corners\n\n// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n  vec4 i0;\n  vec3 isX = step( x0.yzw, x0.xxx );\n  vec3 isYZ = step( x0.zww, x0.yyz );\n//  i0.x = dot( isX, vec3( 1.0 ) );\n  i0.x = isX.x + isX.y + isX.z;\n  i0.yzw = 1.0 - isX;\n//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n  i0.y += isYZ.x + isYZ.y;\n  i0.zw += 1.0 - isYZ.xy;\n  i0.z += isYZ.z;\n  i0.w += 1.0 - isYZ.z;\n\n  // i0 now contains the unique values 0,1,2,3 in each channel\n  vec4 i3 = clamp( i0, 0.0, 1.0 );\n  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n  //  x0 = x0 - 0.0 + 0.0 * C.xxxx\n  //  x1 = x0 - i1  + 1.0 * C.xxxx\n  //  x2 = x0 - i2  + 2.0 * C.xxxx\n  //  x3 = x0 - i3  + 3.0 * C.xxxx\n  //  x4 = x0 - 1.0 + 4.0 * C.xxxx\n  vec4 x1 = x0 - i1 + C.xxxx;\n  vec4 x2 = x0 - i2 + C.yyyy;\n  vec4 x3 = x0 - i3 + C.zzzz;\n  vec4 x4 = x0 + C.wwww;\n\n// Permutations\n  i = mod289(i);\n  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n  vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\n// 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n  vec4 p0 = grad4(j0,   ip);\n  vec4 p1 = grad4(j1.x, ip);\n  vec4 p2 = grad4(j1.y, ip);\n  vec4 p3 = grad4(j1.z, ip);\n  vec4 p4 = grad4(j1.w, ip);\n\n// Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n  p4 *= taylorInvSqrt(dot(p4,p4));\n\n// Mix contributions from the five corners\n  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n  m0 = m0 * m0;\n  m1 = m1 * m1;\n  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n  }\n\nprecision highp float;\n#define GLSLIFY 1\n\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform mat4  projection;\nuniform mat4  view;\nuniform mat4  rotationY;\nuniform float time;\n\nvarying vec3 vNormal;\n\nvoid main () {\n  vNormal = normal;\n  vec4 pos = projection * view * rotationY * vec4(position, 1.0);\n  float noise = snoise(vec4(pos.xyz, time));\n\n  // pos.x = pos.x + (noise / 1.0);\n  pos.y = pos.y + (noise / 1.0);\n  // pos.z = pos.z + (noise / 1.0);\n\n  gl_Position = pos;\n}\n"]),z=function(){function n(canvas,t){Object(o.a)(this,n),this.canvas=canvas,this.regl=f(canvas),this.initMeter(t),this.init()}return Object(r.a)(n,[{key:"initMeter",value:function(n){e(164),this.meter=new FPSMeter(n,{interval:100,smoothing:10,show:"fps",toggleOn:!1,decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"auto",top:"auto",right:"0px",bottom:"0px",margin:"0 0 0 0",height:"auto",theme:"transparent",heat:1,graph:1,history:20})}},{key:"init",value:function(){var n=this;this.view=m.a.lookAt([],[0,0,-13],[0,4.5,0],[0,1,0]),this.projection=m.a.perspective([],Math.PI/4,this.canvas.width/this.canvas.height,.01,1e5),this.rotationY=m.a.rotateY(m.a.create(),m.a.create(),2*Math.PI/360*190),this.regl.frame((function(t){var time=t.time;n.meter.tick(),n.draw(time)}))}},{key:"draw",value:function(time){this.regl.clear({depth:1,color:[.75,.85,.8,1]}),this.regl({vert:w,frag:y,attributes:{position:l.a.positions,normal:d()(l.a.cells,l.a.positions)},uniforms:{view:this.view,projection:this.projection,rotationY:this.rotationY,time:time},elements:l.a.cells})()}},{key:"destroy",value:function(){this.regl&&this.regl.destroy(),this.meter.destroy()}}]),n}();t.default=z},293:function(n,t){n.exports=function(n){"string"==typeof n&&(n=[n]);for(var t=[].slice.call(arguments,1),e=[],i=0;i<n.length-1;i++)e.push(n[i],t[i]||"");return e.push(n[i]),e.join("")}}}]);