(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{157:function(n,o){n.exports={attributes:{path:"/experiment/07-look-at",date:"2019-09-27",title:"07-look-at",slug:"07-look-at",cover:"./../images/covers/07-look-at.png"},html:'<h2>Content</h2>\n<p>Difference attributes / uniforms</p>\n<h2>Code highlights</h2>\n<pre><code class="language-js">  vert: `\n    precision highp float;\n    attribute vec3 position;\n    attribute vec3 normal;\n    uniform mat4 projection;\n    uniform mat4 view;\n    uniform mat4 rotationY;\n    varying vec3 vNormal;\n    void main () {\n      vNormal = normal;\n      gl_Position =  projection * view * rotationY * vec4(position, 1.0);\n    }\n  `,\n</code></pre>\n<h2>Sources</h2>\n'}}}]);