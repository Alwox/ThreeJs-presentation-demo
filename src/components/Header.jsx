import React from 'react';
import Text from '../styledComponents/Text';
import Flex from '../styledComponents/Flex';

const Header = () => (
  <Flex
    marginBottom={4}
    justifyContent="center"
    alignItems="flex-end"
  >
    <Text big>Three.js demo</Text>
  </Flex>
);

export default Header;
