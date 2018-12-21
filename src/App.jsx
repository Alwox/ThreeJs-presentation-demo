import React, { Component } from 'react';
import ObjectSettingsPanel from './components/ObjectSettingsPanel/ObjectSettingsPanel';
import ThreeApp from './threeApp/ThreeApp';
import GlobalStyles from './globalStyles';
import Block from './styledComponents/Block';

export default class App extends Component {
  state = {
    threeAppLoaded: false,
  };

  componentDidMount() {
    ThreeApp.init(this.threeAppIsLoaded);
  }

  threeAppIsLoaded = () => {
    this.setState({
      threeAppLoaded: true,
    });
  };

  render() {
    const { threeAppLoaded } = this.state;
    return (
      <>
        <GlobalStyles />
        <Block
          id="rootThreeApp"
        />
        {threeAppLoaded && (
          <ObjectSettingsPanel
            threeApp={ThreeApp}
          />
        )}
      </>
    );
  }
}
