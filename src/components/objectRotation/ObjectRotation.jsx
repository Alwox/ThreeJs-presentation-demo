import React, { Component } from 'react';
import Block from '../../styledComponents/Block';
import Flex from '../../styledComponents/Flex';
import Panel from '../../styledComponents/Panel';
import Text from '../../styledComponents/Text';
import { convertRadiansToDegrees } from '../../threeApp/helpers';
import { threeObjects } from '../../threeApp/ThreeApp';
import { threeState, setThreeState } from '../../threeApp/threeState';

class ObjectRotation extends Component {
  changeRotation = (event) => {
    threeObjects.cube.changeRotation(
      event.target.name, parseInt(event.target.value, 10),
    );
  };

  render() {
    return (
      <Panel
        column
        marginRight={2}
      >
        <Block marginBottom>
          <Text big>Object orientation</Text>
        </Block>
        <Flex
          marginBottom
        >
          <Block marginRight>
            <Text>X</Text>
          </Block>
          <input
            type="range"
            name="x"
            min={0}
            max={360}
            defaultValue={convertRadiansToDegrees(threeObjects.cube.threeObject.rotation.x)}
            onChange={this.changeRotation}
          />
        </Flex>
        <Flex
          marginBottom
        >
          <Block marginRight>
            <Text>Y</Text>
          </Block>
          <input
            type="range"
            name="y"
            min={0}
            max={360}
            defaultValue={convertRadiansToDegrees(threeObjects.cube.threeObject.rotation.y)}
            onChange={this.changeRotation}
          />
        </Flex>
        <Flex
          marginBottom
        >
          <Block marginRight>
            <Text>Z</Text>
          </Block>
          <input
            type="range"
            name="z"
            min={0}
            max={360}
            defaultValue={convertRadiansToDegrees(threeObjects.cube.threeObject.rotation.z)}
            onChange={this.changeRotation}
          />
        </Flex>
        <Flex>
          <Block marginRight>
            <input
              type="checkbox"
              value={threeState.autoRotate}
              onChange={() => setThreeState({ autoRotate: !threeState.autoRotate })}
            />
          </Block>
          <Text>auto rotate</Text>
        </Flex>
        <Flex>
          <Block marginRight>
            <input
              type="checkbox"
              value={threeState.mobileRotation}
              onChange={() => setThreeState({ mobileRotation: !threeState.mobileRotation })}
            />
          </Block>
          <Text>use device orientation (works only on mobile)</Text>
        </Flex>
      </Panel>
    );
  }
}

export default ObjectRotation;
