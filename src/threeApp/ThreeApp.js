import {
  Scene,
  PerspectiveCamera,
  DirectionalLight,
  Color,
  WebGLRenderer,
} from 'three';
import Cube from './components/Cube';
import mainThreeAppLoop from './mainThreeAppLoop';

export default {
  state: {
    mobileRotation: false,
    mobileRotationValues: {
      alpha: 0,
      beta: 0,
      gamma: 0,
    },
    autoRotate: false,
  },

  init(isLoadedCallback) {
    this.scene = new Scene();
    this.scene.background = new Color('#a2fdff');
    const light = new DirectionalLight( 0xFFFFFF, 2.0 );
    light.position.set(0, 1, 1);
    this.scene.add(light);
    const camera = new PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, 400);

    document.getElementById('rootThreeApp').appendChild(renderer.domElement);

    this.addEventListeners();

    this.createObjects();

    const render = () => {
      requestAnimationFrame(render);

      mainThreeAppLoop(this.objects, this.state);

      renderer.render(this.scene, camera);
    };

    render();
    isLoadedCallback();

  },

  createObjects() {
    this.objects = {
      cube: new Cube(),
    };

    this.scene.add(this.objects.cube.threeObject);
  },

  changeSceneColor(color) {
    this.scene.background = new Color(color);
  },

  setState(changedValues) {
    this.state = {
      ...this.state,
      ...changedValues,
    };
  },

  addEventListeners() {
    window.addEventListener('deviceorientation', e => this.setState({
      mobileRotationValues: {
        alpha: e.alpha || 0,
        beta: e.beta || 0,
        gamma: e.gamma || 0,
      },
    }));
  },
};
