import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThreeApp from '../threeApp/ThreeApp';
import Flex from '../styledComponents/Flex';
import Block from '../styledComponents/Block';

class ObjectSettingsPanel extends Component {
  render() {
    const {} = this.props;
    return (
      <Flex column>
        <Block>
          <input
            type="checkbox"
            value={ThreeApp.state.autoRotate}
            onChange={() => ThreeApp.setState({ autoRotate: !ThreeApp.state.autoRotate })}
          />
          <span>auto rotate</span>
        </Block>
        <Block>
          <input
            type="checkbox"
            value={ThreeApp.state.mobileRotation}
            onChange={() => ThreeApp.setState({ mobileRotation: !ThreeApp.state.mobileRotation })}
          />
          <span>use device orientation (works only on mobile)</span>
        </Block>
      </Flex>
    );
  }
}

ObjectSettingsPanel.propTypes = {
  changeThreeState: PropTypes.func,
};

export default ObjectSettingsPanel;