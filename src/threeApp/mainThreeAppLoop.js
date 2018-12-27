export default (objects, state) => {
  const CubeObject = objects.cube;
  if (state.autoRotate) {
    CubeObject.changeRotation('x', CubeObject.getRotation('x') + 0.5);
    CubeObject.changeRotation('y', CubeObject.getRotation('y') + 0.5);
    CubeObject.changeRotation('z', CubeObject.getRotation('z') + 0.5);
  }

  if (state.mobileRotation) {
    CubeObject.changeRotation('x', -state.mobileRotationValues.beta);
    CubeObject.changeRotation('y', -state.mobileRotationValues.gamma);
    CubeObject.changeRotation('z', -state.mobileRotationValues.alpha);
  }
};
