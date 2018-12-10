import React, { Component } from 'react';
import ObjectSettingsPanel from './components/ObjectSettingsPanel';
import ThreeApp from './threeApp/ThreeApp';
import { version } from '../package.json';

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
        <h1>Three.js primitives creator</h1><span>v{version}</span>
        <div id="rootThreeApp" />
        <ObjectSettingsPanel />
      </>
    );
  }
}