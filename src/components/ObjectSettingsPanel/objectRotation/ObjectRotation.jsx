import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Block from '../../../styledComponents/Block';
import Flex from '../../../styledComponents/Flex';
import Panel from '../../../styledComponents/Panel';
import Text from '../../../styledComponents/Text';
import { convertRadiansToDegrees } from '../../../threeApp/helpers';

class ObjectRotation extends Component {
  changeRotation = (event) => {
    this.props.threeApp.objects.cube.changeRotation(
      event.target.name, parseInt(event.target.value, 10),
    );
  };

  render() {
    const { threeApp } = this.props;

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
            defaultValue={convertRadiansToDegrees(threeApp.objects.cube.threeObject.rotation.x)}
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
            defaultValue={convertRadiansToDegrees(threeApp.objects.cube.threeObject.rotation.y)}
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
            defaultValue={convertRadiansToDegrees(threeApp.objects.cube.threeObject.rotation.z)}
            onChange={this.changeRotation}
          />
        </Flex>
        <Flex>
          <Block marginRight>
            <input
              type="checkbox"
              value={threeApp.state.autoRotate}
              onChange={() => threeApp.setState({ autoRotate: !threeApp.state.autoRotate })}
            />
          </Block>
          <Text>auto rotate</Text>
        </Flex>
        <Flex>
          <Block marginRight>
            <input
              type="checkbox"
              value={threeApp.state.mobileRotation}
              onChange={() => threeApp.setState({ mobileRotation: !threeApp.state.mobileRotation })}
            />
          </Block>
          <Text>use device orientation (works only on mobile)</Text>
        </Flex>
      </Panel>
    );
  }
}

ObjectRotation.propTypes = {
  threeApp: PropTypes.object.isRequired,
};

export default ObjectRotation;
