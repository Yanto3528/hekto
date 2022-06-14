import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p, h1, h2, h3, h4, h5, h6, ul, li {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.gray};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`
