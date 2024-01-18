import { createGlobalStyle } from 'styled-components';

import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
margin: 0 ;
font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
`;
