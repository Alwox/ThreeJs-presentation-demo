import * as THREE from 'three';
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

  objects: {},

  init() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#a2fdff');

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(600, 600);

    document.getElementById('rootThreeApp').appendChild(renderer.domElement);

    this.addEventListeners();

    this.objects.cube = new Cube();

    this.scene.add(this.objects.cube.threeObject);

    const render = () => {
      requestAnimationFrame(render);

      mainThreeAppLoop(this.objects, this.state);

      renderer.render(this.scene, camera);
    };

    render();
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
