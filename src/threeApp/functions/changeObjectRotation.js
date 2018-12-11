import { convertDegreesToRadians } from '../helpers';

export default (object, rotationValues) => {
  object.rotation.y = -convertDegreesToRadians(rotationValues.gamma);
  object.rotation.x = -convertDegreesToRadians(rotationValues.beta);
  object.rotation.z = -convertDegreesToRadians(rotationValues.alpha);
};
