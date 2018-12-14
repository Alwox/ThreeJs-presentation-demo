import * as THREE from 'three';
import { convertDegreesToRadians } from '../helpers';

export default function () {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: '#24617e' });
  this.threeObject = new THREE.Mesh(geometry, material);

  this.changeRotation = function (axis, value) {
    this.threeObject.rotation[axis] = convertDegreesToRadians(value);
  };

  this.changeColor = function (color) {
    this.threeObject.material.color = new THREE.Color(color);
  };
};
