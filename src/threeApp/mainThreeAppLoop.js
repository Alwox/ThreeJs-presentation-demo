import changeObjectRotation from './functions/changeObjectRotation';

export default (objects, state) => {
  if (state.autoRotate) {
    objects.cube.threeObject.rotation.x = objects.cube.threeObject.rotation.x + 0.01;
    objects.cube.threeObject.rotation.y = objects.cube.threeObject.rotation.y + 0.01;
  }

  if (state.mobileRotation) {
    changeObjectRotation(objects.cube.threeObject, state.mobileRotationValues);
  }
};
