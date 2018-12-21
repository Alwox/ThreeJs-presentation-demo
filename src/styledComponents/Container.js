import styled from 'styled-components';
import Flex from './Flex';
import { spacingUnit } from './styleVariables';

const Container = styled(Flex)`
  padding: ${spacingUnit * 2}px;
`;

export default Container;
