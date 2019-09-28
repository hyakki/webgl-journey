---
path: "/experiment/07-look-at"
date: "2019-09-27"
title: "07-look-at"
slug: "07-look-at"
cover: ./../images/covers/07-look-at.png
---

## Content 

### Variable Qualifiers

Qualifiers give a special meaning to the variable. The following qualifiers are available:

Qualifier   | Meaning
------------|-----------------------------------------------
const 			| The declaration is of a compile time constant.
attribute   | Global variables that may change per vertex, that are passed from the OpenGL application to vertex shaders. This qualifier can only be used in vertex shaders. For the shader this is a read-only variable. See Attribute section.
uniform     | Global variables that may change per primitive [...], that are passed from the OpenGL application to the shaders. This qualifier can be used in both vertex and fragment shaders. For the shaders this is a read-only variable. See Uniform section.
varying     | used for interpolated data between a vertex shader and a fragment shader. Available for writing in the vertex shader, and read-only in a fragment shader. See Varying section. 


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
