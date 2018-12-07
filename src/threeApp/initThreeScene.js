import * as THREE from 'three';

export default () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#a2fdff');

  const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( 600, 600 );

  document.getElementById('rootThreeApp').appendChild(renderer.domElement);

  return {scene, camera, renderer};
};
