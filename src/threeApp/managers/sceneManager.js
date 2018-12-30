import { Color, Scene, DirectionalLight } from 'three';

export const changeSceneColor = (scene, color) => scene.background = new Color(color);

export const createMainScene = () => {
  const scene = new Scene();
  const light = new DirectionalLight( 0xFFFFFF, 2.0 );
  light.position.set(0, 1, 1);
  scene.add(light);
  changeSceneColor(scene, '#a2fdff');
  return scene;
};