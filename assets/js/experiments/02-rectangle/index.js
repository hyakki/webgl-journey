class Exp {
  constructor(canvas) {
    this.canvas = canvas;
    this.init();
  }

  init() {
    const gl = this.canvas.getContext('webgl');

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

    // Init

    gl.clearColor(0.75, 0.85, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Create shaders

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, vertexShaderT);
    gl.shaderSource(fragmentShader, fragmentShaderT);

    // Compile shaders

    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.error('VERTEX SHADER : COMPILE ERROR', gl.getShaderInfoLog(vertexShader))
    }

    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error('FRAGMENT SHADER : COMPILE ERROR', gl.getShaderInfoLog(fragmentShader))
    }

    // Create program

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    // Link program

    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('LINK PROGRAM : ERROR', gl.getProgramInfoLog(program));
    }

    // Validate program

    gl.validateProgram(program);
    if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
      console.error('VALIDATE PROGRAM : ERROR', gl.getProgramInfoLog(program));
    }

    // Create Buffer

    const vertices = new Float32Array([
      -0.5, 0.5, 1.0, 0.6, 0.6,
      -0.5, -0.5, 1.0, 0.6, 0.6,
      0.5,  -0.5, 1.0, 0.6, 0.6,

      0.5, 0.5, 0.0, 0.36, 0.52,
      0.5, -0.5, 0.0, 0.36, 0.52,
      -0.5, 0.5, 0.0, 0.36, 0.52,
    ]);

    const buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Create positionAttribLocation

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

    gl.enableVertexAttribArray(positionAttribLocation);

    // Create colorAttribLocation

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

    // Render
    gl.useProgram(program);

    gl.drawArrays(
      gl.TRIANGLES,
      0,
      6,
    );
  }
}

export default Exp;
