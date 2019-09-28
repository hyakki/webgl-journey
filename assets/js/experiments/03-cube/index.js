const glm = require('gl-matrix');

class Exp {
  constructor(canvas, frame) {
    this.canvas = canvas;
    this.initMeter(frame);
    this.init();
  }

  initMeter(container) {
    require('fpsmeter');

    this.meter = new FPSMeter(container, {
      interval:  100,     // Update interval in milliseconds.
      smoothing: 10,      // Spike smoothing strength. 1 means no smoothing.
      show:      'fps',   // Whether to show 'fps', or 'ms' = frame duration in milliseconds.
      toggleOn:  false, // Toggle between show 'fps' and 'ms' on this event.
      decimals:  1,       // Number of decimals in FPS number. 1 = 59.9, 2 = 59.94, ...
      maxFps:    60,      // Max expected FPS value.
      threshold: 100,     // Minimal tick reporting interval in milliseconds.

      // Meter position
      position: 'absolute', // Meter position.
      zIndex:   10,         // Meter Z index.
      left:     'auto',      // Meter left offset.
      top:      '0px',      // Meter top offset.
      right:    '0px',     // Meter right offset.
      bottom:   'auto',     // Meter bottom offset.
      margin:   '0 0 0 0',  // Meter margin. Helps with centering the counter when left: 50%;

      // Theme
      theme: 'colorful', // Meter theme. Build in: 'dark', 'light', 'transparent', 'colorful'.
      heat:  1,      // Allow themes to use coloring by FPS heat. 0 FPS = red, maxFps = green.

      // Graph
      graph:   1, // Whether to show history graph.
      history: 20 // How many history states to show in a g
    });
  }

  init() {
    const gl = this.canvas.getContext('webgl');

    const vertexShaderT = `
      precision mediump float;
      attribute vec3 vertPosition;
      attribute vec3 vertColor;
      varying vec3 fragColor;
      uniform mat4 mWorld;
      uniform mat4 mView;
      uniform mat4 mProj;
      void main() {
        fragColor = vertColor;
        gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);
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
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.frontFace(gl.CCW);
    gl.cullFace(gl.BACK);

    // Create shaders

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, vertexShaderT);
    gl.shaderSource(fragmentShader, fragmentShaderT);

    // Compile shaders

    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.error('VERTEX SHADER : COMPILE ERROR', gl.getShaderInfoLog(vertexShader))
      return;
    }

    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error('FRAGMENT SHADER : COMPILE ERROR', gl.getShaderInfoLog(fragmentShader))
      return;
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

    const vertices = [
      // Top
      -1.0, 1.0, -1.0,   0.5, 0.5, 0.5,
      -1.0, 1.0, 1.0,    0.5, 0.5, 0.5,
      1.0, 1.0, 1.0,     0.5, 0.5, 0.5,
      1.0, 1.0, -1.0,    0.5, 0.5, 0.5,

      // Left
      -1.0, 1.0, 1.0,    0.75, 0.25, 0.5,
      -1.0, -1.0, 1.0,   0.75, 0.25, 0.5,
      -1.0, -1.0, -1.0,  0.75, 0.25, 0.5,
      -1.0, 1.0, -1.0,   0.75, 0.25, 0.5,

      // Right
      1.0, 1.0, 1.0,     0.25, 0.25, 0.75,
      1.0, -1.0, 1.0,    0.25, 0.25, 0.75,
      1.0, -1.0, -1.0,   0.25, 0.25, 0.75,
      1.0, 1.0, -1.0,    0.25, 0.25, 0.75,

      // Front
      1.0, 1.0, 1.0,     1.0, 0.0, 0.15,
      1.0, -1.0, 1.0,    1.0, 0.0, 0.15,
      -1.0, -1.0, 1.0,   1.0, 0.0, 0.15,
      -1.0, 1.0, 1.0,    1.0, 0.0, 0.15,

      // Back
      1.0, 1.0, -1.0,    0.0, 1.0, 0.15,
      1.0, -1.0, -1.0,   0.0, 1.0, 0.15,
      -1.0, -1.0, -1.0,  0.0, 1.0, 0.15,
      -1.0, 1.0, -1.0,   0.0, 1.0, 0.15,

      // Bottom
      -1.0, -1.0, -1.0,  0.5, 0.5, 1.0,
      -1.0, -1.0, 1.0,   0.5, 0.5, 1.0,
      1.0, -1.0, 1.0,    0.5, 0.5, 1.0,
      1.0, -1.0, -1.0,   0.5, 0.5, 1.0,
    ];

    const indices = [
   		// Top
      0, 1, 2,
      0, 2, 3,

      // Left
      5, 4, 6,
      6, 4, 7,

      // Right
      8, 9, 10,
      8, 10, 11,

      // Front
      13, 12, 14,
      15, 14, 12,

      // Back
      16, 17, 18,
      16, 18, 19,

      // Bottom
      21, 20, 22,
      22, 20, 23
    ];

    const boxVertexBufferObject = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    const boxIndexBufferObject = gl.createBuffer();

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Create positionAttribLocation

    const positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');

    gl.vertexAttribPointer(
      positionAttribLocation,
      3,
      gl.FLOAT,
      gl.FALSE,
      6 * Float32Array.BYTES_PER_ELEMENT,
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
      6 * Float32Array.BYTES_PER_ELEMENT,
      3 * Float32Array.BYTES_PER_ELEMENT,
    );

    gl.enableVertexAttribArray(colorAttribLocation);

    // Use program
    gl.useProgram(program);

    // Initiate the mWorld / mView / mProj uniforms

    var matWorldUniformLocaction = gl.getUniformLocation(program, 'mWorld');
    var matViewUniformLocaction = gl.getUniformLocation(program, 'mView');
    var matProjUniformLocaction = gl.getUniformLocation(program, 'mProj');

    var worldMatrix = new Float32Array(16);
    var viewMatrix = new Float32Array(16);
    var projMatrix = new Float32Array(16);

    glm.mat4.identity(worldMatrix);
    glm.mat4.lookAt(viewMatrix, [0, 0, -8], [0, 0, 0], [0, 1, 0]);
    glm.mat4.perspective(projMatrix,  glm.glMatrix.toRadian(45), canvas.width / canvas.height, 0.1, 1000.0);

    gl.uniformMatrix4fv(matWorldUniformLocaction, gl.FALSE, worldMatrix);
    gl.uniformMatrix4fv(matViewUniformLocaction, gl.FALSE, viewMatrix);
    gl.uniformMatrix4fv(matProjUniformLocaction, gl.FALSE, projMatrix);

    let xRotationMatrix = new Float32Array(16);
    let yRotationMatrix = new Float32Array(16);

    // Render
    let identityMatrix = new Float32Array(16);

    glm.mat4.identity(identityMatrix);

    let angle = 0;

    const loop = () => {
      this.meter.tick();
      angle = performance.now() / 1000 / 6 * 2 * Math.PI;
      glm.mat4.rotate(yRotationMatrix, identityMatrix, angle, [0, 1, 0]);
      glm.mat4.rotate(xRotationMatrix, identityMatrix, angle / 4, [1, 0, 0]);
      glm.mat4.mul(worldMatrix, yRotationMatrix, xRotationMatrix);
      gl.uniformMatrix4fv(matWorldUniformLocaction, gl.FALSE, worldMatrix);

      gl.clearColor(0.75, 0.85, 0.8, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }

  destroy() {
    this.meter.destroy();
  }
}

export default Exp;
