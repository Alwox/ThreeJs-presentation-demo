import React, { Component } from 'react';
import initThreeScene from './threeApp/initThreeScene';
import mainThreeApp from './threeApp/mainThreeApp';

export default class ThreeContainer extends Component {

  componentDidMount() {
    const { scene, camera, renderer } = initThreeScene();
    mainThreeApp(scene, camera, renderer);
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <div id="rootThreeApp" />
    );
  }
}