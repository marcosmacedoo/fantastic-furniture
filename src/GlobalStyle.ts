import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white-100: #ffffff;
    --white-200: #F6F6F6;
    --black: #3E3E3E;
    --blue: #E2F2FF;
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
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }
`

export const MainContainer = styled.div`
  margin: 0 auto;
  width: min(85vw, 126.1rem);
`
