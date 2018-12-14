import React from 'react';
import Block from '../../styledComponents/Block';
import Flex from '../../styledComponents/Flex';
import Panel from '../../styledComponents/Panel';
import Text from '../../styledComponents/Text';
import ThreeApp from '../../threeApp/ThreeApp';
import ColorPicker from './colorPicker/ColorPicker';
import ObjectRotation from './ObjectRotation';

const ObjectSettingsPanel = () => (
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
    <ColorPicker />
  </Flex>
);

export default ObjectSettingsPanel;
