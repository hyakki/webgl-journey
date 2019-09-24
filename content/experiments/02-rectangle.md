---
path: "/experiment/02-rectangle"
date: "2019-09-07"
title: "02-rectangle"
slug: "02-rectangle"
cover: ./../images/covers/02-rectangle.png
---

## Content 

Amet atque eveniet laudantium rerum aliquam Rem ad quidem incidunt velit suscipit? Assumenda repellat numquam blanditiis blanditiis deleniti Iste aperiam hic blanditiis aliquid dicta! Optio est debitis assumenda a cum Amet quia officia cum inventore sequi? Sunt voluptatem debitis ad quisquam officia. Nam similique recusandae ipsam amet aperiam maxime Quia quae explicabo repellat elit dolorem repudiandae. Ad quae aliquam voluptate.

## Code highlights

### Vertices

The Float32Array typed array represents an array of 32-bit floating point numbers (corresponding to the C float data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation). <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array" target="_blank">source</a> 

```js
const vertices = new Float32Array([
  -0.7, 0.7, 1.0, 0.6, 0.6,
  -0.7, -0.7, 1.0, 0.6, 0.6,
  0.7,  -0.7, 1.0, 0.6, 0.6,

  0.7, 0.7, 0.0, 0.36, 0.52,
  0.7, -0.7, 0.0, 0.36, 0.52,
  -0.7, 0.7, 0.0, 0.36, 0.52,
]);
```

### vertexAttribPointer

The **WebGLRenderingContext.getAttribLocation()** method of the WebGL API returns the location of an attribute variable in a given WebGLProgram. <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getAttribLocation" target="_blank">source</a>

The **WebGLRenderingContext.vertexAttribPointer()** method of the WebGL API binds the buffer currently bound to **gl.ARRAY_BUFFER** to **a generic vertex attribute of the current vertex buffer object** and specifies its layout. <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer" target="_blank">source</a>

```js
const positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');

// void gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
gl.vertexAttribPointer(
  positionAttribLocation,
  2,
  gl.FLOAT,
  gl.FALSE,
  5 * Float32Array.BYTES_PER_ELEMENT,
  0,
);
```

### Draw

The **WebGLRenderingContext.drawArrays()** method of the WebGL API renders primitives from array data. <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays" target="_blank">source</a>

```js
gl.drawArrays(
  gl.TRIANGLES,
  0,
  6,
);
```

## Sources
- <a href="https://www.youtube.com/watch?v=kB0ZVUrI4Aw&t=2297s" target="_blank">Indigo Code - WebGL Tutorial 01 - Setup and Triangle</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API</a>
