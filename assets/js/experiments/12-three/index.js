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

class Exp {
  constructor(canvas, frame) {
    this.canvas = canvas;

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

    shape.material = new MeshLambertMaterial( { color: new Color('#70CAF2') } );

    shape.position.x = -0.5;

    shape.scale.x = 1.0;
    shape.scale.y = 1.0;
    shape.scale.z = 1.0;

    shape.rotation.x = 0.55;

    scene.add( shape );

    lights.point.position.set(0.0, 4.0, 2.0);
    lights.point.castShadow = true;

    camera.position.z = 3;

    this.draw();
  }

  setCurrentColor(index) {
    this.currentColorIndex = index;
    this.currentColor = this.colors[this.currentColorIndex]
  }

  draw() {
    const { renderer, scene, camera, shape } = this.comp;

    renderer.render( scene, camera );
  }

  destroy() {
  }
}

export default Exp;
