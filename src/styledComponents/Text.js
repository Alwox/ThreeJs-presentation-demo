import styled from 'styled-components';

const Text = styled.span`
  font-size: ${({ big }) => (big ? 16 : 14)}px;
  font-weight: ${({ big }) => big && 'bold'};
`;

export default Text;
