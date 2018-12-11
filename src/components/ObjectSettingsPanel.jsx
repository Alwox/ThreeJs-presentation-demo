import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThreeApp from '../threeApp/ThreeApp';
import Block from '../styledComponents/Block';

class ObjectSettingsPanel extends Component {
  render() {
    const { } = this.props;
    return (
      <Block>
        <input
          type="checkbox"
          value={ThreeApp.state.autoRotate}
          onChange={() => ThreeApp.setState({autoRotate: !ThreeApp.state.autoRotate})}
        />
        <span>auto rotate</span>
      </Block>
    );
  }
}

ObjectSettingsPanel.propTypes = {
  changeThreeState: PropTypes.func,
};

export default ObjectSettingsPanel;