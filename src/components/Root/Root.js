import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');
  html, body {
    margin: 0;
    padding: 0;
  }
  html, body, #app {
    width: 100%;
    height: 100%;
  }
  body {
    font-family: Roboto, sans-serif;
  }
`;

const Root = () => {
  return <>
  <GlobalStyle />
  <div>Root</div>
</>
}

export default Root;
