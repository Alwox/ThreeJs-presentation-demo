import * as THREE from 'three';

export default () => {
  const state = {
    rotationValues: {
      alpha: 0,
      beta: 0,
      gamma: 0,
    }
  };

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: '#24617e' } );
  const object = new THREE.Mesh( geometry, material );
  return {object, state}
}