import regl from 'regl';
import bunny from 'snowden';
import camera from 'regl-camera';
import angleNormals from 'angle-normals';

class Exp {
  constructor(canvas) {
    this.regl = regl(canvas);
    this.camera = camera(this.regl, {
      center: [0, 0, 0],
      distance: 10,
      mouse: false,
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
        attribute vec3 normal;
        uniform mat4 projection;
        uniform mat4 view;
        varying vec3 vNormal;
        void main () {
          vNormal = normal;
          gl_Position = projection * view * vec4(position, 1.0);
        }
      `,

      frag: `
        precision mediump float;
        varying vec3 vNormal;
        void main () {
          gl_FragColor = vec4(vNormal * 0.5 + 0.5, 1.0);
        }
      `,

      attributes: {
        position: bunny.positions,
        normal: angleNormals(bunny.cells, bunny.positions),
      },

      elements: bunny.cells,
    })();
  }

  destroy() {
    this.regl && this.regl.destroy();
  }
}

export default Exp;
