import regl from 'regl';
import bunny from 'bunny';
import camera from 'regl-camera';

class Exp {
  constructor(canvas) {
    this.regl = regl(canvas);
    this.camera = camera(this.regl, {
      center: [0, 2.5, 0],
      distance: 30,
    });
    this.init();
  }

  init() {
    this.regl.frame(() => {
      this.camera(() => {
        this.regl.clear({
          depth: 1,
          color: [0.75, 0.85, 0.8, 1.0],
        });
        this.draw();
      })
    });
  }

  draw() {
    this.regl({

      vert: `
        precision mediump float;
        attribute vec3 position;
        uniform mat4 projection;
        uniform mat4 view;
        void main () {
          gl_Position = projection * view * vec4(position, 1.0);
        }
      `,

      frag: `
        precision mediump float;
        void main () {
          gl_FragColor = vec4(0.3, 0.4, 0.3, 1.0);
        }
      `,

      attributes: {
        position: bunny.positions,
      },

      elements: bunny.cells,
    })();
  }
}

export default Exp;
