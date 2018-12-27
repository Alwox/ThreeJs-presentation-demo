import {
  BoxGeometry,
  MeshLambertMaterial,
  Mesh,
  Color,
} from 'three';
import { convertDegreesToRadians, convertRadiansToDegrees } from '../helpers';

export default function () {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshLambertMaterial({ color: '#24617e' });
  this.threeObject = new Mesh(geometry, material);

  this.getRotation = function (axis) {
    return convertRadiansToDegrees(this.threeObject.rotation[axis]);
  };

  this.changeRotation = function (axis, value) {
    this.threeObject.rotation[axis] = convertDegreesToRadians(value);
  };

  this.changeColor = function (color) {
    this.threeObject.material.color = new Color(color);
  };
};
