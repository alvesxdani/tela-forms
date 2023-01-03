import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body, html {
    width: 100%;
    height: 100vh;
  }

  body {
    font: 10px 'Calibri';
    background: #f7f7f7;
    color: #000;
  }
`;