(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{306:function(n,o,t){"use strict";t.r(o),o.default="precision highp float;\n\nattribute vec3 position;\n\nuniform mat4  projection;\nuniform mat4  view;\n\nattribute vec2 uv;\nvarying vec2 vUv;\n\nvoid main () {\n  vUv = uv;\n\n  vec3 p = position;\n\n  gl_Position = projection * view * vec4(p, 1.0);\n}\n"}}]);