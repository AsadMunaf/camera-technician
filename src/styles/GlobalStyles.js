// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
