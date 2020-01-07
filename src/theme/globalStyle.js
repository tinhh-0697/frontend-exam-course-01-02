import { createGlobalStyle } from 'styled-components';

export const themeLight = {
  primary: '#38C6DA',
  secondary: '#38C6DA',
  thirty: '#D5D8DB',
  fourty: '#B8B8B8',
  fifty: '#5A5A5A',
  sixth: '#EEEFF1',
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
  lightMode: true,
};

export const themeDark = {
  primary: '#1E2125',
  secondary: '#38C6DA',
  thirty: '#494C53',
  fourty: '#84878D',
  fifty: '#797C80',
  sixth: '#191C1E',
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
  lightMode: false,
};

export const GlobalStyle = createGlobalStyle`
  body {
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
