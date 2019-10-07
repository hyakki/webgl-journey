#pragma glslify: snoise4 = require(glsl-noise/simplex/4d)

precision highp float;

attribute vec3 position;
attribute vec3 vertexNormals;

uniform mat4  projection;
uniform mat4  view;
uniform mat4  rotationY;
uniform float time;

varying vec3 vVertexNormals;
varying vec3 vColor;

void main () {
  vVertexNormals = vertexNormals;

  vec3 p = position;
  float noise = snoise4(vec4(position, time));

  p += (vertexNormals * (noise / 5.0)); 

  vColor = mix(vec3(0.0, 0.2, 0.4), vec3(0.0, 1.0, 1.0), (noise + 1.0) / 2.0);

  gl_Position = projection * view * vec4(p, 1.0);
}
