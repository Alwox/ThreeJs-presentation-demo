import React, { Component } from 'react';
import ColorPicker from './components/colorPicker/ColorPicker';
import ObjectRotation from './components/objectRotation/ObjectRotation';
import Container from './styledComponents/Container';
import initThreeApp from './threeApp/initThreeApp';
import GlobalStyles from './globalStyles';
import Block from './styledComponents/Block';

export default class App extends Component {
  state = {
    threeAppLoaded: false,
  };

  componentDidMount() {
    initThreeApp(this.threeAppIsLoaded);
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
          <Container>
            <ObjectRotation />
            <ColorPicker />
          </Container>
        )}
      </>
    );
  }
}
