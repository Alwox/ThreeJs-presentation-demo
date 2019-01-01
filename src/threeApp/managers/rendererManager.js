import { WebGLRenderer } from 'three';

export const createRenderer = () => {
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, 400);
  return renderer
};