import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white-100: #ffffff;
    --white-200: #F6F6F6;
    --black: #3E3E3E;
    --blue-100: #E2F2FF;
    --blue-200: #445C80;
    --green: #3AA6AC;
    --red: #CB3738;
    --gray: #626262;
    --yellow: #EBD41C;
  }

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: var(--white-100);
    font-size: 1.6rem;
    color: var(---black);
    overflow-x: hidden;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  button {
    cursor: pointer;
    border: 0;
  }

  @media (max-width: 1096px) {
    html {
      font-size: 56.25%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 375px) {
    html {
      font-size: 43.75%;
    }
  }
`

export const MainContainer = styled.div`
  margin: 0 auto;
  width: min(90vw, 140rem);
`
