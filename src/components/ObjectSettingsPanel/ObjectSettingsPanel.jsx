import React from 'react';
import get from 'lodash/get';
import Block from '../../styledComponents/Block';
import Flex from '../../styledComponents/Flex';
import Panel from '../../styledComponents/Panel';
import Text from '../../styledComponents/Text';
import ColorPicker from './colorPicker/ColorPicker';
import ObjectRotation from './ObjectRotation';

const ObjectSettingsPanel = ({ threeApp }) => (
  <Flex>
    <Panel
      column
      marginRight={2}
    >
      <Text>Display</Text>
      <Block>
        <input
          type="checkbox"
          value={get(threeApp, 'state.autoRotate', false)}
          onChange={() => threeApp.setState({ autoRotate: !threeApp.state.autoRotate })}
        />
        <Text>auto rotate</Text>
      </Block>
      <Block>
        <input
          type="checkbox"
          value={get(threeApp, 'state.mobileRotation', false)}
          onChange={() => threeApp.setState({ mobileRotation: !threeApp.state.mobileRotation })}
        />
        <Text>use device orientation (works only on mobile)</Text>
      </Block>
    </Panel>
    <ObjectRotation
      threeApp={threeApp}
    />
    <ColorPicker
      threeApp={threeApp}
    />
  </Flex>
);

export default ObjectSettingsPanel;
