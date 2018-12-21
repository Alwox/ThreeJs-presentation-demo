import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../styledComponents/Container';
import ColorPicker from './colorPicker/ColorPicker';
import ObjectRotation from './objectRotation/ObjectRotation';

const ObjectSettingsPanel = ({ threeApp }) => (
  <Container>
    <ObjectRotation
      threeApp={threeApp}
    />
    <ColorPicker
      threeApp={threeApp}
    />
  </Container>
);

ObjectSettingsPanel.propTypes = {
  threeApp: PropTypes.object.isRequired,
};

export default ObjectSettingsPanel;
