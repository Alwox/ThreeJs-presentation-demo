import Cube from './components/Cube';
import mobileObjectRotation from './functions/mobileObjectRotation';

const handleOrientation = (event, object) => {
  object.state.rotationValues = {
    alpha: event.alpha || 0,
    beta: event.beta || 0,
    gamma: event.gamma || 0,
  };
};

export default (scene, camera, renderer) => {

  camera.position.z = 2;

  const cube = Cube();
  scene.add(cube.object);

  window.addEventListener('deviceorientation', e => handleOrientation(e, cube));

  const render = () => {
    requestAnimationFrame(render);

    mobileObjectRotation(cube.object, cube.state.rotationValues);

    renderer.render(scene, camera);
  };

  render();
}