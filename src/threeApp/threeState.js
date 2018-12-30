const defaultState = {
  mobileRotation: false,
  mobileRotationValues: {
    alpha: 0,
    beta: 0,
    gamma: 0,
  },
  autoRotate: false,
};

export let threeState = {
  ...defaultState,
};

export const setThreeState = (changedValues) => {
  threeState = {
    ...threeState,
    ...changedValues,
  };
};