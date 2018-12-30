export default (object) => {
  object.changeRotation('x', object.getRotation('x') + 0.5);
  object.changeRotation('y', object.getRotation('y') + 0.5);
  object.changeRotation('z', object.getRotation('z') + 0.5);
};
