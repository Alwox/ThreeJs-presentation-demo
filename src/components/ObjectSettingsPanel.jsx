import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThreeApp from '../threeApp/ThreeApp';

class ObjectSettingsPanel extends Component {
  render() {
    const { } = this.props;
    return (
      <>
        <input
          type="checkbox"
          value={ThreeApp.state.autoRotate}
          onChange={() => ThreeApp.setState({autoRotate: !ThreeApp.state.autoRotate})}
        />
        <span>auto rotate</span>
      </>
    );
  }
}

ObjectSettingsPanel.propTypes = {
  changeThreeState: PropTypes.func,
};

export default ObjectSettingsPanel;