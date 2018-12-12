import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThreeApp from '../threeApp/ThreeApp';
import Flex from '../styledComponents/Flex';
import Block from '../styledComponents/Block';
import Panel from '../styledComponents/Panel';
import Text from '../styledComponents/Text';

class ObjectSettingsPanel extends Component {
  render() {
    const {} = this.props;
    return (
      <Flex column>
        <Panel
          column
          marginBottom={2}
        >
          <Text>Display</Text>
          <Block>
            <input
              type="checkbox"
              value={ThreeApp.state.autoRotate}
              onChange={() => ThreeApp.setState({ autoRotate: !ThreeApp.state.autoRotate })}
            />
            <Text>auto rotate</Text>
          </Block>
          <Block>
            <input
              type="checkbox"
              value={ThreeApp.state.mobileRotation}
              onChange={() => ThreeApp.setState({ mobileRotation: !ThreeApp.state.mobileRotation })}
            />
            <Text>use device orientation (works only on mobile)</Text>
          </Block>
        </Panel>
        <Panel column>
          <Text>Object orientation</Text>
          <Block
            marginBottom={1}
          >
            <Text>x</Text>
            <input
              type="range"
              min="0" max="360"
              value={ThreeApp.objects.cube && ThreeApp.objects.cube.threeObject.rotation.x}
              onChange={e => ThreeApp.objects.cube.changeRotation('x', parseInt(e.target.value))}
            />
          </Block>
          <Block
            marginBottom={1}
          >
            <Text>y</Text>
            <input
              type="range"
              min="0" max="360"
              value={ThreeApp.objects.cube && ThreeApp.objects.cube.threeObject.rotation.y}
              onChange={e => ThreeApp.objects.cube.changeRotation('y', parseInt(e.target.value))}
            />
          </Block>
          <Block
            marginBottom={1}
          >
            <Text>z</Text>
            <input
              type="range"
              min="0" max="360"
              value={ThreeApp.objects.cube && ThreeApp.objects.cube.threeObject.rotation.z}
              onChange={e => ThreeApp.objects.cube.changeRotation('z', parseInt(e.target.value))}
            />
          </Block>
        </Panel>
      </Flex>
    );
  }
}

ObjectSettingsPanel.propTypes = {
  changeThreeState: PropTypes.func,
};

export default ObjectSettingsPanel;