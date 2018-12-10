import React, { Component } from 'react';
import ObjectSettingsPanel from './components/ObjectSettingsPanel';
import ThreeApp from './threeApp/ThreeApp';

export default class App extends Component {

  componentDidMount() {
    ThreeApp.init();
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <>
        <h1>Three.js primitives creator</h1><span>v 0.0.1</span>
        <div id="rootThreeApp" />
        <ObjectSettingsPanel />
      </>
    );
  }
}