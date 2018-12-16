import React, { Component } from 'react';
import get from 'lodash/get';
import Block from '../../styledComponents/Block';
import Panel from '../../styledComponents/Panel';
import Text from '../../styledComponents/Text';
import { convertRadiansToDegrees } from '../../threeApp/helpers';

class ObjectRotation extends Component {
  changeRotation = (event) => {
    this.props.threeApp.objects.cube.changeRotation(
      event.target.name, parseInt(event.target.value, 10),
    );
  };

  render() {
    const { threeApp } = this.props;

    return (
      <Panel column marginBottom={2}>
        <Text>Object orientation</Text>
        <Block
          marginBottom={1}
        >
          <Text>x</Text>
          <input
            type="range"
            name="x"
            min={0}
            max={360}
            defaultValue={convertRadiansToDegrees(get(threeApp, 'objects.cube.threeObject.rotation.x', 0))}
            onChange={this.changeRotation}
          />
        </Block>
        <Block
          marginBottom={1}
        >
          <Text>y</Text>
          <input
            type="range"
            name="y"
            min={0}
            max={360}
            defaultValue={convertRadiansToDegrees(get(threeApp, 'objects.cube.threeObject.rotation.y', 0))}
            onChange={this.changeRotation}
          />
        </Block>
        <Block
          marginBottom={1}
        >
          <Text>z</Text>
          <input
            type="range"
            name="z"
            min={0}
            max={360}
            defaultValue={convertRadiansToDegrees(get(threeApp, 'objects.cube.threeObject.rotation.z', 0))}
            onChange={this.changeRotation}
          />
        </Block>
      </Panel>
    );
  }
}

export default ObjectRotation;
