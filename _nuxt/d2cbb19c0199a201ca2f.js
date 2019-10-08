(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{229:function(t,n,e){"use strict";e.r(n);var o=e(161),r=e(162),h=e(177),l=e.n(h),c=e(235),v=e.n(c),m=e(180),d=e.n(m),f=e(228),w=e.n(f),y=(e(187),function(){function t(canvas,n){Object(o.a)(this,t),this.canvas=canvas,this.regl=l()(canvas),this.initMeter(n),this.init()}return Object(r.a)(t,[{key:"initMeter",value:function(t){e(176),this.meter=new FPSMeter(t,{interval:100,smoothing:10,show:"fps",toggleOn:!1,decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"auto",top:"auto",right:"0px",bottom:"0px",margin:"0 0 0 0",height:"auto",theme:"transparent",heat:1,graph:1,history:20})}},{key:"init",value:function(){var t=this;this.view=w.a.lookAt([],[0,0,-20],[0,5,0],[0,1,0]),this.projection=w.a.perspective([],Math.PI/4,this.canvas.width/this.canvas.height,.01,1e5),this.handleOrientation=this.handleOrientation.bind(this),window.addEventListener("deviceorientation",this.handleOrientation,!0),this.rotationY=w.a.rotateY(w.a.create(),w.a.create(),2*Math.PI/360*190),this.regl.frame((function(n){var time=n.time;t.meter.tick(),t.draw(time)}))}},{key:"handleOrientation",value:function(t){t.alpha,t.beta;var n=t.gamma,e=(parseInt(n)-25)/5;this.view=w.a.lookAt([],[e,0,-20],[0,5,0],[0,1,0])}},{key:"draw",value:function(time){this.regl.clear({depth:1,color:[.75,.85,.8,1]}),this.regl({vert:"\n        precision highp float;\n        attribute vec3 position;\n        attribute vec3 normal;\n        uniform mat4 projection;\n        uniform mat4 view;\n        uniform mat4 rotationY;\n        varying vec3 vNormal;\n        void main () {\n          vNormal = normal;\n          gl_Position =  projection * view * rotationY * vec4(position, 1.0);\n        }\n      ",frag:"\n        precision highp float;\n        varying vec3 vNormal;\n        void main () {\n          gl_FragColor = vec4(vNormal * 0.5 + 0.5, 1.0);\n        }\n      ",attributes:{position:v.a.positions,normal:d()(v.a.cells,v.a.positions)},uniforms:{view:this.view,projection:this.projection,rotationY:this.rotationY},elements:v.a.cells})()}},{key:"destroy",value:function(){this.regl&&this.regl.destroy(),this.meter.destroy()}}]),t}());n.default=y}}]);