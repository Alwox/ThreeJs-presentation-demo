import * as THREE from 'three';

export default () => {
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: '#24617e' } );
  return new THREE.Mesh( geometry, material );
}