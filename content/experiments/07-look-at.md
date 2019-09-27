---
path: "/experiment/07-look-at"
date: "2019-09-27"
title: "07-look-at"
slug: "07-look-at"
cover: ./../images/covers/07-look-at.png
---

## Content 
Difference attributes / uniforms

## Code highlights
```js
  vert: `
    precision highp float;
    attribute vec3 position;
    attribute vec3 normal;
    uniform mat4 projection;
    uniform mat4 view;
    uniform mat4 rotationY;
    varying vec3 vNormal;
    void main () {
      vNormal = normal;
      gl_Position =  projection * view * rotationY * vec4(position, 1.0);
    }
  `,
```

## Sources
