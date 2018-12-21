import styled from 'styled-components';
import PropTypes from 'prop-types';
import { spacingUnit } from './styleVariables';

const Block = styled.div`
  margin-right: ${({ marginRight = 1 }) => marginRight && `${marginRight * spacingUnit}px`};
  margin-bottom: ${({ marginBottom = 1 }) => marginBottom && `${marginBottom * spacingUnit}px`};
`;

Block.propTypes = {
  marginRight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  marginBottom: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
};

export default Block;
