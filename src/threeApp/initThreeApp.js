import Cube from './components/Cube';
import renderLoopBody from './renderLoopBody';
import { threeState, addScene, setThreeState } from './threeData';
import { threeObjects, addObjectToScene } from './threeData';
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

  document.getElementById('rootThreeApp').appendChild(renderer.domElement);

  addObjectToScene('cube', new Cube(), mainScene);
  addEventListeners();

  const render = () => {
    requestAnimationFrame(render);

    renderLoopBody(threeObjects, threeState);

    renderer.render(mainScene, camera);
  };

  render();

  threeAppIsReady();
};
