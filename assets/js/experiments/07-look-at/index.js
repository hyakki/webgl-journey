import regl from 'regl';
import snowden from 'snowden';
// import camera from 'regl-camera';
import angleNormals from 'angle-normals';
import mat4 from 'gl-mat4';
import { create, set } from 'gl-vec3';

class Exp {
  constructor(canvas) {
    this.canvas = canvas;
    this.regl = regl(canvas);
    this.init();
  }

  init() {
    this.view = mat4.lookAt([], [10, 3, -3], [0, -0.5, 0], [0, 1, 0]);
    this.projection = mat4.perspective(
      [],
      Math.PI / 4,
      this.canvas.width / this.canvas.height,
      0.01,
      100000.0
    );

    this.rotationY = mat4.rotateY(
      mat4.create(),
      mat4.create(),
      Math.PI / 2,
    );

    this.regl.frame(({time}) => {
      this.regl.clear({
        depth: 1,
        color: [0.75, 0.85, 0.8, 1.0],
      });
      this.draw(time);
    });
  }

  draw(time) {

    this.regl({

      vert: `
        precision highp float;
        attribute vec3 position;
        attribute vec3 normal;
        uniform mat4 projection;
        uniform mat4 view;
        uniform mat4 rotationY;
        varying vec3 vNormal;
        void main () {
          vNormal = normal;
          gl_Position =  projection * view * rotationY * vec4(position, 1.0);
        }
      `,

      frag: `
        precision highp float;
        varying vec3 vNormal;
        void main () {
          gl_FragColor = vec4(vNormal * 0.5 + 0.5, 1.0);
        }
      `,

      attributes: {
        position: snowden.positions,
        normal: angleNormals(snowden.cells, snowden.positions),
      },

      uniforms: {
        view: this.view,
        projection: this.projection,
        rotationY: this.rotationY,
      },

      elements: snowden.cells,
    })();
  }

  destroy() {
    this.regl && this.regl.destroy();
  }
}

export default Exp;
