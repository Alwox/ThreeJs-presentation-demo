import styled from 'styled-components';
import Flex from './Flex';
import { spacingUnit } from './styleVariables';

const Panel = styled(Flex)`
  border: 1px solid gray;
  border-radius: 4px;
  padding: ${spacingUnit * 2}px;
`;

export default Panel;