import styled from 'styled-components';
import { borderRadius } from '../../../styledComponents/styleVariables';

const ColorPreview = styled.div`
  width: 30px;
  height: 30px;
  border-radius: ${borderRadius};
  background-color: ${({ color }) => `rgb(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`};
  cursor: pointer;
  border: 1px solid gray;
`;

export default ColorPreview;
