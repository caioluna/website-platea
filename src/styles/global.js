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
    background: linear-gradient(180deg, #212121 0%, #212121 100%);
background: radial-gradient(60% 150% at 50% 100%, #212121 0%, #000000 100%);

    font-size: 14px;
    font-weight: 400;
    overflow-x: hidden;
  }
`
