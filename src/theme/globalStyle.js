import { createGlobalStyle } from 'styled-components';

export const themeLight = {
  primary: '#38C6DA',
  secondary: '#38C6DA',
  thirty: '#D5D8DB',
  fourty: '#B8B8B8',
  fifty: '#5A5A5A',
  sixth: '#EEEFF1',
  seventh: '#CFCFCF',
  eighth: '#FFF',
  ninth: '#E2E2E2',
  title: '#757D89',
  danger: '#FB5867',
  light: '#FAFBFC',
  dark: '#EDEFF0',
  table: '#FFF',
  article: '#555',
  background: '#FFF',
  row: '#F7F8F9',
  border: '#eaeced',
  reserve: '#1E2125',
};

export const themeDark = {
  primary: '#1E2125',
  secondary: '#38C6DA',
  thirty: '#494C53',
  fourty: '#84878D',
  fifty: '#797C80',
  sixth: '#191C1E',
  seventh: '#222427',
  eighth: '#2B2D31',
  ninth: '#2B2D31',
  title: '#9398A2',
  danger: '#FB5867',
  light: '#1D2023',
  dark: '#191C1E',
  table: '#1C1E22',
  article: '#FFF',
  background: '#1E2125',
  row: '#1E2125',
  border: '#2e3033',
  reserve: '#FFF',
};

export const GlobalStyle = createGlobalStyle`
  body {
    position: fixed;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Rubik', 'HelveticaNeue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  }
  /* clears the 'X' from Internet Explorer */
  input::-ms-clear,
  input::-ms-reveal {  
    display: none;
    width : 0;
    height: 0; 
  }

  /* clears the 'X' from Chrome */
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration { display: none; }
`;
