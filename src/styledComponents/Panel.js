import styled from 'styled-components';
import Flex from './Flex';
import { spacingUnit, borderRadius } from './styleVariables';

const Panel = styled(Flex)`
  border: 1px solid gray;
  border-radius: ${borderRadius};
  padding: ${spacingUnit * 2}px;
`;

export default Panel;
