import Cube from './components/Cube';
import renderLoopBody from './renderLoopBody';
import { addScene, setThreeState } from './threeData';
import { addObjectToScene } from './threeData';
import { createMainScene } from './managers/sceneManager';
import { createCamera } from './managers/cameraManager';
import { createRenderer } from './managers/rendererManager';

const addEventListeners = () => {
  window.addEventListener('deviceorientation', e => setThreeState({
    mobileRotationValues: {
      alpha: e.alpha || 0,
      beta: e.beta || 0,
      gamma: e.gamma || 0,
    },
  }));
};

export default (threeAppIsReady) => {
  const renderer = createRenderer();
  const camera = createCamera();
  const mainScene = createMainScene();

  addScene('mainScene', mainScene);
  addObjectToScene('cube', new Cube(), mainScene);
  addEventListeners();

  document.getElementById('rootThreeApp').appendChild(renderer.domElement);

  const render = () => {
    requestAnimationFrame(render);

    renderLoopBody();

    renderer.render(mainScene, camera);
  };

  render();
  threeAppIsReady();
};
