import React from 'react';
import { version } from '../../package.json';
import Text from '../styledComponents/Text';
import Flex from '../styledComponents/Flex';

const Header = () => (
  <Flex
    marginBottom={4}
    justifyContent="center"
    alignItems="flex-end"
  >
    <Text big>Three.js primitives creator</Text>
    <Text>
      v
      {version}
    </Text>
  </Flex>
);

export default Header;
