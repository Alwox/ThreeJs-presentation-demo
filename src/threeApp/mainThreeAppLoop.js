import changeObjectRotation from './functions/changeObjectRotation';

export default (objects, state) => {
  if (state.autoRotate) {
    objects.cube.rotation.x = objects.cube.rotation.x + 0.01;
    objects.cube.rotation.y = objects.cube.rotation.y + 0.01;
  } else {
    changeObjectRotation(objects.cube, state.mobileRotationValues);
  }
}