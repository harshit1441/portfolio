// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Import Google Font */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

  /* Reset & Global styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --bg-color: #1f242d;
    --second-bg-color: #323946;
    --main-color: #7cf03d;
    --white-color: #fff;
    --disabled-color: #fff3;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--bg-color);
    color: var(--white-color);
  }
  section {
  width: 100%;
  padding: 10rem 9% 2rem;
  background: var(--bg-color);
}

`;

export default GlobalStyle;
