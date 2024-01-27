import { createGlobalStyle } from 'styled-components';

import 'modern-normalize';

import ManropeRegular from './fonts/Manrope-Regular.ttf';
import ManropeMedium from './fonts/Manrope-Medium.ttf';
import ManropeBold from './fonts/Manrope-Bold.ttf';
import ManropeSemiBold from './fonts/Manrope-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${ManropeRegular});
    font-weight: normal;
    font-style: normal;
  }

   @font-face {
    font-family: 'Manrope';
    src: url(${ManropeMedium});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${ManropeSemiBold});
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${ManropeBold});
    font-weight: bold;
    font-style: normal;
  }
body {
width: 100%;
margin: 0 auto;
font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

ul 
 {
    list-style: none;
  }
  input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
               -webkit-appearance: none;
                margin: 0;
        }
 
        input[type=number] {
            -moz-appearance: textfield;
            appearance: textfield;
        }

  
`;
