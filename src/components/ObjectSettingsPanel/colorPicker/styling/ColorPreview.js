import styled from 'styled-components';
import { borderRadius } from '../../../../styledComponents/styleVariables';

const ColorPreview = styled.div`
  width: 30px;
  height: 30px;
  border-radius: ${borderRadius};
  background-color: ${({ color }) => color};
  cursor: pointer;
  border: 1px solid gray;
`;

export default ColorPreview;
