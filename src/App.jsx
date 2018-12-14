import React, { Component } from 'react';
import Header from './components/Header';
import ObjectSettingsPanel from './components/ObjectSettingsPanel/ObjectSettingsPanel';
import ThreeApp from './threeApp/ThreeApp';
import GlobalStyles from './globalStyles';
import Flex from './styledComponents/Flex';
import Block from './styledComponents/Block';

export default class App extends Component {
  componentDidMount() {
    ThreeApp.init();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <Header />
        <Flex>
          <Block
            id="rootThreeApp"
            marginRight={1}
          />
          <ObjectSettingsPanel />
        </Flex>
      </>
    );
  }
}
