import {
  Scene,
  PerspectiveCamera,
  DirectionalLight,
  Color,
  WebGLRenderer,
} from 'three';
import Cube from './components/Cube';
import mainThreeAppLoop from './mainThreeAppLoop';
import { threeState } from './threeState';

export const setSceneColor = (scene, color) => scene.background = new Color(color);

const addDefaultLightToScene = (scene) => {
  const light = new DirectionalLight( 0xFFFFFF, 2.0 );
  light.position.set(0, 1, 1);
  scene.add(light);
};

const createCamera = () => {
  const camera = new PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
  camera.position.z = 2;
  return camera
};

const createRenderer = () => {
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, 400);
  return renderer
};

const addEventListeners = () => {
  window.addEventListener('deviceorientation', e => this.setState({
    mobileRotationValues: {
      alpha: e.alpha || 0,
      beta: e.beta || 0,
      gamma: e.gamma || 0,
    },
  }));
};

const addObjectToScene = (object, scene) => {
  scene.add(object.threeObject);
};

export const threeObjects = {
  scene: new Scene(),
  cube: new Cube(),
};


export const initThreeApp = (threeAppIsReady) => {
  const { scene } = threeObjects;
  setSceneColor(scene, '#a2fdff');
  addDefaultLightToScene(scene);

  const renderer = createRenderer();
  const camera = createCamera();

  document.getElementById('rootThreeApp').appendChild(renderer.domElement);

  addEventListeners();


  addObjectToScene(threeObjects.cube, scene);

  const render = () => {
    requestAnimationFrame(render);

    mainThreeAppLoop(threeObjects, threeState);

    renderer.render(scene, camera);
  };
  render();

  threeAppIsReady();
};
