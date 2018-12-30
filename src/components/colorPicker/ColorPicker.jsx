import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import Block from '../../styledComponents/Block';
import Panel from '../../styledComponents/Panel';
import Text from '../../styledComponents/Text';
import ColorPreview from './styling/ColorPreview';
import SketchPickerContainer from './styling/SketchPickerContainer';
import SketchPickerClosingBg from './styling/SketchPickerClosingBg';
import { threeObjects, setSceneColor } from '../../threeApp/ThreeApp';

class ColorPicker extends Component {
  state = {
    openedPicker: false,
  };

  changeOpened = (picker) => {
    this.setState(
      prevState => (
        prevState.openedPicker === picker ? { openedPicker: false } : { openedPicker: picker }
      ),
    );
  };

  render() {
    const { openedPicker } = this.state;

    return (
      <Panel
        marginRight={2}
        column
      >
        <Block marginBottom>
          <Text big>Colors</Text>
        </Block>
        <Block marginBottom>
          <Text>Object color</Text>
          <ColorPreview
            color={threeObjects.cube.threeObject.material.color}
            onClick={() => this.changeOpened('object')}
          />
          {openedPicker === 'object' && (
            <>
              <SketchPickerContainer>
                <SketchPicker
                  color={threeObjects.cube.threeObject.material.color}
                  onChange={
                    color => threeObjects.cube.changeColor(color.hex)
                  }
                  disableAlpha
                />
              </SketchPickerContainer>
              <SketchPickerClosingBg
                onClick={() => this.changeOpened('object')}
              />
            </>
          )}
        </Block>
        <Block>
          <Text>Background color</Text>
          <ColorPreview
            color={threeObjects.scene.background}
            onClick={() => this.changeOpened('background')}
          />
          {openedPicker === 'background' && (
            <>
              <SketchPickerContainer>
                <SketchPicker
                  color={threeObjects.scene.background}
                  onChange={color => setSceneColor(threeObjects.scene, color.hex)}
                  disableAlpha
                />
              </SketchPickerContainer>
              <SketchPickerClosingBg
                onClick={() => this.changeOpened('background')}
              />
            </>
          )}
        </Block>
      </Panel>
    );
  }
}

export default ColorPicker;
