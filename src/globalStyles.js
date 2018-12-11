import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${styledNormalize};
  html {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
  };
  * {
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
  a {
    text-decoration: none;
    
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
    }
 
  }
`;

export default GlobalStyles;
