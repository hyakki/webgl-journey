precision highp float;

attribute vec3 position;

uniform mat4  projection;
uniform mat4  view;

void main () {
  vec3 p = position;

  gl_Position = projection * view * vec4(p, 1.0);
}
