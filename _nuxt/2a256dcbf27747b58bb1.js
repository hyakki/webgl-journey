(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{164:function(n,o,t){"use strict";t.r(o);var e=t(158),r=t(159),c=t(165),l=function(){function n(canvas){Object(e.a)(this,n),this.regl=c(canvas),this.init()}return Object(r.a)(n,[{key:"init",value:function(){this.clear(),this.draw()}},{key:"clear",value:function(){this.regl.clear({color:[.75,.85,.8,1],depth:1})}},{key:"draw",value:function(){this.regl({frag:"\n      precision mediump float;\n      uniform vec4 color;\n      void main () {\n        gl_FragColor = color;\n      }",vert:"\n      precision mediump float;\n      attribute vec2 position;\n      void main () {\n        gl_Position = vec4(position, 0, 1);\n      }",attributes:{position:[[0,.5],[-.5,-.5],[.5,-.5]]},uniforms:{color:[.27,.32,.3,1]},count:3})()}}]),n}();o.default=l}}]);