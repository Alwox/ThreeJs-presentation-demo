import * as THREE from 'three';
import { convertDegreesToRadians } from '../helpers';

export default function() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: '#24617e' });
  this.threeObject = new THREE.Mesh(geometry, material);

  this.changeRotation = function (axis, value) {
    if(axis === 'x') {
      this.threeObject.rotation.x = convertDegreesToRadians(value);
    }
    if(axis === 'y') {
      this.threeObject.rotation.y = convertDegreesToRadians(value);
    }
    if(axis === 'z') {
      this.threeObject.rotation.z = convertDegreesToRadians(value);
    }
  }
};
