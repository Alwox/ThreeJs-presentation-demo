import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import Block from '../../../styledComponents/Block';
import Panel from '../../../styledComponents/Panel';
import Text from '../../../styledComponents/Text';
import ColorPreview from './styling/ColorPreview';
import SketchPickerContainer from './styling/SketchPickerContainer';
import SketchPickerClosingBg from './styling/SketchPickerClosingBg';

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
    const { threeApp } = this.props;

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
            color={threeApp.objects.cube.threeObject.material.color}
            onClick={() => this.changeOpened('object')}
          />
          {openedPicker === 'object' && (
            <>
              <SketchPickerContainer>
                <SketchPicker
                  color={threeApp.objects.cube.threeObject.material.color}
                  onChange={
                    color => threeApp.objects.cube.changeColor(color.hex)
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
            color={threeApp.scene.background}
            onClick={() => this.changeOpened('background')}
          />
          {openedPicker === 'background' && (
            <>
              <SketchPickerContainer>
                <SketchPicker
                  color={threeApp.scene.background}
                  onChange={color => threeApp.changeSceneColor(color.hex)}
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

ColorPicker.propTypes = {
  threeApp: PropTypes.object.isRequired,
};

export default ColorPicker;
