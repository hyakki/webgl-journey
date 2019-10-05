const regl = require('regl');

class Exp {
  constructor(canvas) {
    this.regl = regl(canvas);
    this.init();
  }

  init() {
    this.clear();
    this.draw();
  }

  clear() {
    this.regl.clear({
      color: [0.75, 0.85, 0.8, 1.0],
      depth: 1.0,
    });
  }

  draw() {
    this.regl({
      frag: require('./exp.frag'),
      vert: require('./exp.vert'),
      attributes: {
        position: [
          [0.0, 0.5],
          [-0.5, -0.5],
          [0.5, -0.5]
        ]
      },

      uniforms: {
        color: [0.27, 0.32, 0.3, 1.0],
      },

      count: 3
    })()
  }
}

export default Exp;
