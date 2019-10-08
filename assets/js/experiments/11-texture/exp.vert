precision highp float;

attribute vec3 position;

uniform mat4  projection;
uniform mat4  view;

attribute vec2 uv;
varying vec2 vUv;

void main () {
  vUv = uv;

  vec3 p = position;

  gl_Position = projection * view * vec4(p, 1.0);
}
