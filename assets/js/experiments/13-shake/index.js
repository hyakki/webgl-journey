import {
  AmbientLight,
  BoxGeometry,
  Color,
  Mesh,
  MeshPhongMaterial,
  MeshLambertMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  WebGLRenderer,
} from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import Shake from 'shake.js';

class Exp {
  constructor(canvas, frame) {
    this.canvas = canvas;

    this.shake = new Shake({
      threshold: 5,
      timeout: 300,
    });
    this.shake.start()

    this.onShake = this.onShake.bind(this);
    window.addEventListener('shake', this.onShake, false);

    this.colors = [
      '#70CAF2',
      '#FABC50',
      '#89CBC0',
      '#FBEF82',
      '#EC6D9B',
    ];

    this.load();
  }

  load() {
    this.loader = new GLTFLoader();

    this.loader.load(require('~/static/models/foo.gltf'), data => {
      this.imports = {
        shape: data.scene.children[0],
      };

      this.init();
    });
  }

  init() {
    this.comp = {
      scene: new Scene(),
      camera: new PerspectiveCamera( 75, this.canvas.width / this.canvas.height, 0.1, 1000 ),
      renderer: new WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
      }),
      lights: {
        ambient: new AmbientLight ( 0xffffff, 0.8 ),
        point: new PointLight ( 0xffffff, 0.8, 18 ),
      },
    };

    this.comp.shape = this.imports.shape;

    const { camera, renderer, scene, lights, shape } = this.comp;

    scene.background = new Color('#8FD0D2');
    renderer.setSize( this.canvas.width, this.canvas.height );

    scene.add( lights.ambient );
    scene.add( lights.point );

    this.setCurrentColor(0);

    shape.material = new MeshLambertMaterial( { color: new Color(this.currentColor) } );

    shape.scale.x = 0.7;
    shape.scale.y = 0.7;
    shape.scale.z = 0.7;

    scene.add( shape );

    lights.point.position.set(0.0, 4.0, 2.0);
    lights.point.castShadow = true;

    camera.position.z = 3;

    this.draw();
  }

  onShake() {
    const { shape } = this.comp;
    const next = this.currentColorIndex + 1;

    if (next >= this.colors.length) {
      this.setCurrentColor(0);
    } else {
      this.setCurrentColor(next);
    }

    shape.material = new MeshLambertMaterial( { color: new Color(this.currentColor) } );
  }

  setCurrentColor(index) {
    this.currentColorIndex = index;
    this.currentColor = this.colors[this.currentColorIndex]
  }

  draw() {
    const { renderer, scene, camera, shape } = this.comp;

    renderer.render( scene, camera );

    shape.rotation.y += 0.01;
    shape.rotation.x += 0.02;

    window.requestAnimationFrame(() => {
      this.draw();
    });
  }

  destroy() {
    window.removeEventListener('shake', this.onShake, false);
    this.shake.stop();
  }
}

export default Exp;
