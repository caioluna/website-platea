import { createGlobalStyle } from 'styled-components'
import DINAlternateBlack from '../fonts/DINAlternateBlack.ttf'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'DINAlternateBlack';
    src: url(${DINAlternateBlack}) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(90deg, rgba(33,33,33,1) 0%, rgba(18,18,18,1) 100%);
    font-size: 14px;
    font-weight: 400;
    overflow-x: hidden;
  }
`
