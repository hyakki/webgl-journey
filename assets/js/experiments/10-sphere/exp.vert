#pragma glslify: snoise4 = require(glsl-noise/simplex/4d)

precision highp float;

attribute vec3 position;
attribute vec3 vertexNormals;

uniform mat4  projection;
uniform mat4  view;
uniform mat4  rotationY;
uniform float time;

varying vec3 vVertexNormals;

void main () {
  vVertexNormals = vertexNormals;

  vec4 pos = projection * view * vec4(position, 1.0);
  float noise = snoise4(vec4(pos.xyz, time));

  // pos.xyz = pos.xyz + (vertexNormals * sin(time));

  // pos.x = pos.x + (vertexNormals.x);
  pos.y = pos.y + (vertexNormals.y * noise);
  // pos.z = pos.z + (vertexNormals.z);

  gl_Position = pos;
}
