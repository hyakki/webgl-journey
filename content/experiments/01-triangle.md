---
path: "/experiment/01-triangle"
date: "2019-09-03"
title: "01-triangle"
slug: "01-triangle"
cover: ./../images/covers/01-triangle.png
---

## Content 

Adipisicing doloremque excepturi itaque a officiis? Ducimus velit ipsam repellendus eveniet eos est. Nam quaerat voluptatum corporis in recusandae. Sapiente molestias odio nihil sequi quis Recusandae porro in similique eligendi.

## Code highlights

```js
const canvas = this.$el.querySelector('#canvas');
const gl = canvas.getContext('webgl');

const vertexShaderT = `
    precision mediump float;
    attribute vec2 vertPosition;
    attribute vec3 vertColor;
    varying vec3 fragColor;
    void main() {
      fragColor = vertColor;
      gl_Position = vec4(vertPosition, 0.0, 1.0);
    }
  `;

const fragmentShaderT = `
    precision mediump float;
    varying vec3 fragColor;
    void main() {
      gl_FragColor = vec4(fragColor, 1.0);
    }
  `;
```

### Init
```js
gl.clearColor(0.75, 0.85, 0.8, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
```

### Create shaders
```js
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(vertexShader, vertexShaderT);
gl.shaderSource(fragmentShader, fragmentShaderT);
```

### Compile shaders
```js
gl.compileShader(vertexShader);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
  console.error('VERTEX SHADER : COMPILE ERROR', gl.getShaderInfoLog(vertexShader))
}

gl.compileShader(fragmentShader);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
  console.error('FRAGMENT SHADER : COMPILE ERROR', gl.getShaderInfoLog(fragmentShader))
}
```

### Create program
```js
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
```

### Link program
```js
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  console.error('LINK PROGRAM : ERROR', gl.getProgramInfoLog(program));
}
```

### Validate program
```js
gl.validateProgram(program);
if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
  console.error('VALIDATE PROGRAM : ERROR', gl.getProgramInfoLog(program));
}
```

### Create Buffer
```js
const vertices = new Float32Array([
  0.0, 0.5, 1.0, 1.0, 0.0,
  -0.5, -0.5, 0.7, 0.0, 1.0,
  0.5, -0.5, 0.1, 1.0, 0.6,
]);

const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
```

### Create positionAttribLocation
```js
const positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');

gl.vertexAttribPointer(
  positionAttribLocation,
  2,
  gl.FLOAT,
  gl.FALSE,
  5 * Float32Array.BYTES_PER_ELEMENT,
  0,
);

gl.enableVertexAttribArray(positionAttribLocation);
```

### Create colorAttribLocation
```js
const colorAttribLocation = gl.getAttribLocation(program, 'vertColor');

gl.vertexAttribPointer(
  colorAttribLocation,
  3,
  gl.FLOAT,
  gl.FALSE,
  5 * Float32Array.BYTES_PER_ELEMENT,
  2 * Float32Array.BYTES_PER_ELEMENT,
);

gl.enableVertexAttribArray(colorAttribLocation);
```

### Use program & Draw
```js
gl.useProgram(program);

gl.drawArrays(
  gl.TRIANGLES,
  0,
  3,
);
```
