import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;

    --gray-100: #F3F5F6;
    --gray-200: #DCE2E6;
    --gray-500: #617480;
    --gray-600: #737380;
    --gray-700: #5D5D6D;
    --gray-900: #123952;

    --blue-500: #115D8C;
    --orange-500: #F25D27;
    --orange-200: #FFA585;
    --red-500: #DE3838;
    --green-500: #51B853;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  body {
    background: var(--gray-200);
    color: var(--gray-900);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Saira', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }  
`