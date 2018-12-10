import React, { Component } from 'react';
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
      <div>
        <button onClick={() => ThreeApp.setState({autoRotate: !ThreeApp.state.autoRotate})}>auto rotate</button>
        <div id="rootThreeApp" />
      </div>
    );
  }
}