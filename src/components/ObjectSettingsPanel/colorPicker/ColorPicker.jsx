import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import Block from '../../../styledComponents/Block';
import Flex from '../../../styledComponents/Flex';
import Panel from '../../../styledComponents/Panel';
import Text from '../../../styledComponents/Text';
import ThreeApp from '../../../threeApp/ThreeApp';
import ColorPreview from './styling/ColorPreview';

class ColorPicker extends Component {
  state = {
    openedPicker: false,
  };

  changeOpened = (picker) => {
    this.setState(prevState => {
      return prevState.openedPicker === picker ? {openedPicker: false} : {openedPicker: picker}
    })
  };

  render() {
    const { openedPicker } = this.state;

    return (
      <Panel>
        <Flex column>
          <Block marginBottom={1}>
            <Text>Colors</Text>
          </Block>
          <Block>
            <Text>Object color</Text>
            <ColorPreview
              color={ThreeApp.scene && ThreeApp.scene.background}
              onClick={() => this.changeOpened('object')}
            />
            {openedPicker === 'object' && (
              <SketchPicker
                color={ThreeApp.objects.cube && ThreeApp.objects.cube.threeObject.material.color}
                onChange={color => ThreeApp.objects.cube && ThreeApp.objects.cube.changeColor(color.hex)}
                disableAlpha
              />
            )}
          </Block>
          <Block>
            <Text>Background color</Text>
            <ColorPreview
              color={ThreeApp.objects.cube && ThreeApp.objects.cube.threeObject.material.color}
              onClick={() => this.changeOpened('background')}
            />
            {openedPicker === 'background' && (
              <SketchPicker
                color={ThreeApp.objects.cube && ThreeApp.objects.cube.threeObject.material.color}
                onChange={color => ThreeApp.changeSceneColor(color.hex)}
                disableAlpha
              />
            )}
          </Block>
        </Flex>
      </Panel>
    )
  }
}

export default ColorPicker;