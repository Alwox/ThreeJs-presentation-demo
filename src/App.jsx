import React, { Component } from 'react';
import Header from './components/Header';
import ObjectSettingsPanel from './components/ObjectSettingsPanel/ObjectSettingsPanel';
import ThreeApp from './threeApp/ThreeApp';
import GlobalStyles from './globalStyles';
import Flex from './styledComponents/Flex';
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
        <Header />
        <Flex>
          <Block
            id="rootThreeApp"
            marginRight={1}
          />
          {threeAppLoaded && (
            <ObjectSettingsPanel
              threeApp={ThreeApp}
            />
          )}
        </Flex>
      </>
    );
  }
}
