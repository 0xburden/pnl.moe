import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --font-display: 'Press Start 2P', cursive;
    --font-body: Inconsolata, monospace;
    --color-sexy: #b00b69;
  }

  body {
    display: flex;
    font-family: var(--font-body);
    width: 100vw;
    height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
  }

  a {
    color: var(--color-sexy);
    text-decoration: none;

    &:visited {
      color: var(--color-sexy);
    }

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`

export default GlobalStyles
