import React, { Component } from 'react';
import Block from '../../styledComponents/Block';
import Panel from '../../styledComponents/Panel';
import Text from '../../styledComponents/Text';
import ThreeApp from '../../threeApp/ThreeApp';

class ObjectRotation extends Component {
  changeRotation = (event) => {
    ThreeApp.objects.cube.changeRotation(event.target.name, parseInt(event.target.value, 10));
  };

  render() {
    return (
      <Panel column>
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
            value={ThreeApp.objects.cube && ThreeApp.objects.cube.threeObject.rotation.x}
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
            value={ThreeApp.objects.cube && ThreeApp.objects.cube.threeObject.rotation.y}
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
            value={ThreeApp.objects.cube && ThreeApp.objects.cube.threeObject.rotation.z}
            onChange={this.changeRotation}
          />
        </Block>
      </Panel>
    );
  }
}

export default ObjectRotation;
