precision highp float;

varying vec3 vVertexNormals;

void main () {
  gl_FragColor = vec4(vVertexNormals * 0.5 + 0.5, 1.0);
}
