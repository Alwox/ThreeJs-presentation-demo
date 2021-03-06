import styled from 'styled-components';
import PropTypes from 'prop-types';
import Block from './Block';

const Flex = styled(Block)`
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
`;

Flex.propTypes = {
  column: PropTypes.bool,
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
};

export default Flex;
