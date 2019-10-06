#pragma glslify: snoise4 = require(glsl-noise/simplex/4d)

precision highp float;

attribute vec3 position;
attribute vec3 normal;

uniform mat4  projection;
uniform mat4  view;
uniform mat4  rotationY;
uniform float time;

varying vec3 vNormal;

void main () {
  vNormal = normal;
  vec4 pos = projection * view * rotationY * vec4(position, 1.0);
  float noise = snoise4(vec4(pos.xyz, time));

  // pos.x = pos.x + (noise / 1.0);
  pos.xyz = pos.xyz + (normal * (noise + 1.0));
  // pos.z = pos.z + (noise / 1.0);

  gl_Position = pos;
}
