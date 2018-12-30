export const threeObjects = {};
export const threeScenes = {};
export let threeState = {
  mobileRotation: false,
  mobileRotationValues: {
    alpha: 0,
    beta: 0,
    gamma: 0,
  },
  autoRotate: false,
};

export const setThreeState = (changedValues) => {
  threeState = {
    ...threeState,
    ...changedValues,
  };
};

export const addScene = (name, scene) => {
  threeScenes[name] = scene;
};

export const addObjectToScene = (name, object, scene) => {
  threeObjects[name] = object;
  scene.add(object.threeObject);
};
