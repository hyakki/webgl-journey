(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{164:function(t,n){t.exports=1e-6},165:function(t,n){t.exports=function(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}},166:function(t,n){t.exports=function(t,n,r){var o=new Float32Array(3);return o[0]=t,o[1]=n,o[2]=r,o}},167:function(t,n){t.exports=function(t,a){var n=a[0],r=a[1],o=a[2],e=n*n+r*r+o*o;e>0&&(e=1/Math.sqrt(e),t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e);return t}},168:function(t,n){t.exports=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}},169:function(t,n){t.exports=function(t,a,b){return t[0]=a[0]-b[0],t[1]=a[1]-b[1],t[2]=a[2]-b[2],t}},170:function(t,n){t.exports=function(t,a,b){return t[0]=a[0]*b[0],t[1]=a[1]*b[1],t[2]=a[2]*b[2],t}},171:function(t,n){t.exports=function(t,a,b){return t[0]=a[0]/b[0],t[1]=a[1]/b[1],t[2]=a[2]/b[2],t}},172:function(t,n){t.exports=function(a,b){var t=b[0]-a[0],n=b[1]-a[1],r=b[2]-a[2];return Math.sqrt(t*t+n*n+r*r)}},173:function(t,n){t.exports=function(a,b){var t=b[0]-a[0],n=b[1]-a[1],r=b[2]-a[2];return t*t+n*n+r*r}},174:function(t,n){t.exports=function(a){var t=a[0],n=a[1],r=a[2];return Math.sqrt(t*t+n*n+r*r)}},175:function(t,n){t.exports=function(a){var t=a[0],n=a[1],r=a[2];return t*t+n*n+r*r}},187:function(t,n,r){t.exports={EPSILON:r(164),create:r(165),clone:r(188),angle:r(189),fromValues:r(166),copy:r(190),set:r(191),equals:r(192),exactEquals:r(193),add:r(194),subtract:r(169),sub:r(195),multiply:r(170),mul:r(196),divide:r(171),div:r(197),min:r(198),max:r(199),floor:r(200),ceil:r(201),round:r(202),scale:r(203),scaleAndAdd:r(204),distance:r(172),dist:r(205),squaredDistance:r(173),sqrDist:r(206),length:r(174),len:r(207),squaredLength:r(175),sqrLen:r(208),negate:r(209),inverse:r(210),normalize:r(167),dot:r(168),cross:r(211),lerp:r(212),random:r(213),transformMat4:r(214),transformMat3:r(215),transformQuat:r(216),rotateX:r(217),rotateY:r(218),rotateZ:r(219),forEach:r(220)}},188:function(t,n){t.exports=function(a){var t=new Float32Array(3);return t[0]=a[0],t[1]=a[1],t[2]=a[2],t}},189:function(t,n,r){t.exports=function(a,b){var t=o(a[0],a[1],a[2]),n=o(b[0],b[1],b[2]);e(t,t),e(n,n);var r=c(t,n);return r>1?0:Math.acos(r)};var o=r(166),e=r(167),c=r(168)},190:function(t,n){t.exports=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t}},191:function(t,n){t.exports=function(t,n,r,o){return t[0]=n,t[1]=r,t[2]=o,t}},192:function(t,n,r){t.exports=function(a,b){var t=a[0],n=a[1],r=a[2],e=b[0],c=b[1],f=b[2];return Math.abs(t-e)<=o*Math.max(1,Math.abs(t),Math.abs(e))&&Math.abs(n-c)<=o*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(r-f)<=o*Math.max(1,Math.abs(r),Math.abs(f))};var o=r(164)},193:function(t,n){t.exports=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]}},194:function(t,n){t.exports=function(t,a,b){return t[0]=a[0]+b[0],t[1]=a[1]+b[1],t[2]=a[2]+b[2],t}},195:function(t,n,r){t.exports=r(169)},196:function(t,n,r){t.exports=r(170)},197:function(t,n,r){t.exports=r(171)},198:function(t,n){t.exports=function(t,a,b){return t[0]=Math.min(a[0],b[0]),t[1]=Math.min(a[1],b[1]),t[2]=Math.min(a[2],b[2]),t}},199:function(t,n){t.exports=function(t,a,b){return t[0]=Math.max(a[0],b[0]),t[1]=Math.max(a[1],b[1]),t[2]=Math.max(a[2],b[2]),t}},200:function(t,n){t.exports=function(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t[2]=Math.floor(a[2]),t}},201:function(t,n){t.exports=function(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t[2]=Math.ceil(a[2]),t}},202:function(t,n){t.exports=function(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t[2]=Math.round(a[2]),t}},203:function(t,n){t.exports=function(t,a,b){return t[0]=a[0]*b,t[1]=a[1]*b,t[2]=a[2]*b,t}},204:function(t,n){t.exports=function(t,a,b,n){return t[0]=a[0]+b[0]*n,t[1]=a[1]+b[1]*n,t[2]=a[2]+b[2]*n,t}},205:function(t,n,r){t.exports=r(172)},206:function(t,n,r){t.exports=r(173)},207:function(t,n,r){t.exports=r(174)},208:function(t,n,r){t.exports=r(175)},209:function(t,n){t.exports=function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t}},210:function(t,n){t.exports=function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t[2]=1/a[2],t}},211:function(t,n){t.exports=function(t,a,b){var n=a[0],r=a[1],o=a[2],e=b[0],c=b[1],f=b[2];return t[0]=r*f-o*c,t[1]=o*e-n*f,t[2]=n*c-r*e,t}},212:function(t,n){t.exports=function(t,a,b,n){var r=a[0],o=a[1],e=a[2];return t[0]=r+n*(b[0]-r),t[1]=o+n*(b[1]-o),t[2]=e+n*(b[2]-e),t}},213:function(t,n){t.exports=function(t,n){n=n||1;var r=2*Math.random()*Math.PI,o=2*Math.random()-1,e=Math.sqrt(1-o*o)*n;return t[0]=Math.cos(r)*e,t[1]=Math.sin(r)*e,t[2]=o*n,t}},214:function(t,n){t.exports=function(t,a,n){var r=a[0],o=a[1],e=a[2],c=n[3]*r+n[7]*o+n[11]*e+n[15];return c=c||1,t[0]=(n[0]*r+n[4]*o+n[8]*e+n[12])/c,t[1]=(n[1]*r+n[5]*o+n[9]*e+n[13])/c,t[2]=(n[2]*r+n[6]*o+n[10]*e+n[14])/c,t}},215:function(t,n){t.exports=function(t,a,n){var r=a[0],o=a[1],e=a[2];return t[0]=r*n[0]+o*n[3]+e*n[6],t[1]=r*n[1]+o*n[4]+e*n[7],t[2]=r*n[2]+o*n[5]+e*n[8],t}},216:function(t,n){t.exports=function(t,a,q){var n=a[0],r=a[1],o=a[2],e=q[0],c=q[1],f=q[2],h=q[3],l=h*n+c*o-f*r,v=h*r+f*n-e*o,x=h*o+e*r-c*n,M=-e*n-c*r-f*o;return t[0]=l*h+M*-e+v*-f-x*-c,t[1]=v*h+M*-c+x*-e-l*-f,t[2]=x*h+M*-f+l*-c-v*-e,t}},217:function(t,n){t.exports=function(t,a,b,n){var r=b[1],o=b[2],e=a[1]-r,c=a[2]-o,f=Math.sin(n),h=Math.cos(n);return t[0]=a[0],t[1]=r+e*h-c*f,t[2]=o+e*f+c*h,t}},218:function(t,n){t.exports=function(t,a,b,n){var r=b[0],o=b[2],e=a[0]-r,c=a[2]-o,f=Math.sin(n),h=Math.cos(n);return t[0]=r+c*f+e*h,t[1]=a[1],t[2]=o+c*h-e*f,t}},219:function(t,n){t.exports=function(t,a,b,n){var r=b[0],o=b[1],e=a[0]-r,c=a[1]-o,f=Math.sin(n),h=Math.cos(n);return t[0]=r+e*h-c*f,t[1]=o+e*f+c*h,t[2]=a[2],t}},220:function(t,n,r){t.exports=function(a,t,n,r,e,c){var i,f;t||(t=3);n||(n=0);f=r?Math.min(r*t+n,a.length):a.length;for(i=n;i<f;i+=t)o[0]=a[i],o[1]=a[i+1],o[2]=a[i+2],e(o,o,c),a[i]=o[0],a[i+1]=o[1],a[i+2]=o[2];return a};var o=r(165)()},227:function(t,n,r){"use strict";r.r(n);var o=r(161),e=r(162),c=r(177),f=r.n(c),h=r(242),l=r.n(h),v=r(180),x=r.n(v),M=r(228),m=r.n(M),d=(r(187),function(){function t(canvas){Object(o.a)(this,t),this.canvas=canvas,this.regl=f()(canvas),this.init()}return Object(e.a)(t,[{key:"init",value:function(){var t=this;this.view=m.a.lookAt([],[10,3,-3],[0,-.5,0],[0,1,0]),this.projection=m.a.perspective([],Math.PI/4,this.canvas.width/this.canvas.height,.01,1e5),this.rotationY=m.a.rotateY(m.a.create(),m.a.create(),Math.PI/2),this.regl.frame((function(n){var time=n.time;t.regl.clear({depth:1,color:[.75,.85,.8,1]}),t.draw(time)}))}},{key:"draw",value:function(time){this.regl({vert:"\n        precision highp float;\n        attribute vec3 position;\n        attribute vec3 normal;\n        uniform mat4 projection;\n        uniform mat4 view;\n        uniform mat4 rotationY;\n        varying vec3 vNormal;\n        void main () {\n          vNormal = normal;\n          gl_Position =  projection * view * rotationY * vec4(position, 1.0);\n        }\n      ",frag:"\n        precision highp float;\n        varying vec3 vNormal;\n        void main () {\n          gl_FragColor = vec4(vNormal * 0.5 + 0.5, 1.0);\n        }\n      ",attributes:{position:l.a.positions,normal:x()(l.a.cells,l.a.positions)},uniforms:{view:this.view,projection:this.projection,rotationY:this.rotationY},elements:l.a.cells})()}},{key:"destroy",value:function(){this.regl&&this.regl.destroy()}}]),t}());n.default=d}}]);