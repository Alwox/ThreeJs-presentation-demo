import autoRotateObject from './functions/autoRotateObject';
import { threeObjects, threeState } from './threeData';

export default () => {
  const { cube } = threeObjects;
  if (threeState.autoRotate) {
    autoRotateObject(cube);
  }

  if (threeState.mobileRotation) {
    cube.changeRotation('x', -threeState.mobileRotationValues.beta);
    cube.changeRotation('y', -threeState.mobileRotationValues.gamma);
    cube.changeRotation('z', -threeState.mobileRotationValues.alpha);
  }
};
