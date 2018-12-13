import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThreeApp from '../threeApp/ThreeApp';
import Flex from '../styledComponents/Flex';
import Block from '../styledComponents/Block';
import Panel from '../styledComponents/Panel';
import Text from '../styledComponents/Text';
import ObjectRotation from './ObjectRotation';

class ObjectSettingsPanel extends Component {
  render() {
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
        <ObjectRotation />
      </Flex>
    );
  }
}

ObjectSettingsPanel.propTypes = {
  changeThreeState: PropTypes.func,
};

export default ObjectSettingsPanel;