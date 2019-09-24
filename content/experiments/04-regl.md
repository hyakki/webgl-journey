---
path: "/experiment/04-regl"
date: "2019-09-24"
title: "04-regl"
slug: "04-regl"
cover: ./../images/covers/04-regl.png
---

## Content 

## Code highlights

```js
this.regl.clear({
  color: [0.75, 0.85, 0.8, 1.0],
  depth: 1.0,
});
```

```js
// In regl, draw operations are specified declaratively using. Each JSON
// command is a complete description of all state. This removes the need to
// .bind() things like buffers or shaders. All the boilerplate of setting up
// and tearing down state is automated.
this.regl({

  // In a draw call, we can pass the shader source code to regl
  frag: `
  precision mediump float;
  uniform vec4 color;
  void main () {
    gl_FragColor = color;
  }`,

  vert: `
  precision mediump float;
  attribute vec2 position;
  void main () {
    gl_Position = vec4(position, 0, 1);
  }`,

  attributes: {
    position: [
      [0.0, 0.5],
      [-0.5, -0.5],
      [0.5, -0.5]
    ]
  },

  uniforms: {
    color: [0.27, 0.32, 0.3, 1.0],
  },

  count: 3
})()
```

## Sources

- <a href="https://github.com/regl-project/regl" target="_blank">regl-project/regl (github)</a>
