import styled from 'styled-components';
import PropTypes from 'prop-types';
import { spacingUnit } from './styleVariables';

const Block = styled.div`
  margin-right: ${({marginRight}) => marginRight && `${marginRight * spacingUnit}px`};
  margin-bottom: ${({marginBottom}) => marginBottom && `${marginBottom * spacingUnit}px`};
`;

Block.propTypes = {
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
};

export default Block;
