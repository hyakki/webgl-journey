const regl = require('regl');
const resl = require('resl');
import camera from 'regl-camera';
const glslify = require('glslify');
const frag = glslify('./exp.frag');
const vert = glslify('./exp.vert');

import box from 'geo-3d-box';

class Exp {
  constructor(canvas, frame) {
    this.canvas = canvas;
    this.regl = regl(canvas);
    this.initMeter(frame);

    this.load();
  }

  load() {
    resl({
      manifest: {
        texture: {
          type: 'image',
          src: '/textures/box.png',
          parser: (data) => this.regl.texture({
            data: data,
            mag: 'linear',
            min: 'linear'
          })
        }
      },
      onDone: ({texture}) => {
        this.texture = texture;
        this.init();
      }
    })
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
      top:      'auto',      // Meter top offset.
      right:    '0px',     // Meter right offset.
      bottom:   '0px',     // Meter bottom offset.
      margin:   '0 0 0 0',  // Meter margin. Helps with centering the counter when left: 50%;
      height:   'auto',

      // Theme
      theme: 'transparent', // Meter theme. Build in: 'dark', 'light', 'transparent', 'colorful'.
      heat:  1,      // Allow themes to use coloring by FPS heat. 0 FPS = red, maxFps = green.

      // Graph
      graph:   1, // Whether to show history graph.
      history: 20 // How many history states to show in a g
    });
  }

  init() {
    this.box = box({
      size: [1, 1, 1],
      segments: [1, 1, 1],
    });

    this.camera = camera(this.regl, {
      center: [0, 0, 0],
      distance: 4,
      zoomSpeed: 0,
    });

    this.regl.frame(({time}) => {
      this.camera(() => {
        this.meter.tick();
        this.draw(time);
      });
    });
  }

  draw(time) {
    this.regl.clear({
      depth: 1,
      color: [0.75, 0.85, 0.8, 1.0],
    });

    this.regl({

      vert,
      frag,

      attributes: {
        position: this.box.positions,
        uv: this.box.uvs,
      },

      uniforms: {
        tex: this.texture,
      },

      elements: this.box.cells,
    })();
  }

  destroy() {
    this.regl && this.regl.destroy();
    this.meter.destroy();
  }
}

export default Exp;
