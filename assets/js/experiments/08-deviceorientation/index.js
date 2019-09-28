import regl from 'regl';
import snowden from 'snowden';
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
    this.view = mat4.lookAt([], [0, 0, -10], [0, -0.5, 0], [0, 1, 0]);
    this.projection = mat4.perspective(
      [],
      Math.PI / 4,
      this.canvas.width / this.canvas.height,
      0.01,
      100000.0
    );

    // this.handleOrientation = this.handleOrientation.bind(this);
    // window.addEventListener('deviceorientation', this.handleOrientation, true);

    window.addEventListener('deviceorientation', function(event) {
      console.log(event.alpha + ' : ' + event.beta + ' : ' + event.gamma);
    });

    this.rotationY = mat4.rotateY(
      mat4.create(),
      mat4.create(),
      (Math.PI * 2 / 360) * 190,
    );

    this.regl.frame(({time}) => {
      this.draw(time);
    });
  }

  handleOrientation(e) {
    const alpha = e.alpha;

    this.view = mat4.lookAt([], [-5, 0, -10], [0, -0.5, 0], [0, 1, 0]);
  }

  draw(time) {
    this.regl.clear({
      depth: 1,
      color: [0.75, 0.85, 0.8, 1.0],
    });

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
