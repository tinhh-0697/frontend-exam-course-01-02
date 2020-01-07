import styled, { createGlobalStyle, css } from 'styled-components';

export const themeLight = {
  primary: '#38C6DA',
  secondary: '#38C6DA',
  thirty: '#D5D8DB',
  title: '#757D89',
  danger: '#FB5867',
  light: '#FAFBFC',
  dark: '#EDEFF0',
  background: '#FFF',
  border: '#eaeced',
};
export const themeDark = {
  primary: '#1E2125',
  secondary: '#38C6DA',
  thirty: '#494C53',
  title: '#9398A2',
  danger: '#FB5867',
  light: '#1D2023',
  dark: '#191C1E',
  background: '#1E2125',
  border: '#2e3033',
};

export const globalStyle = createGlobalStyle`
  body: {
    padding: 0;
    margin: 0;
  }
`;

export const Button = styled.button`
  color: #fff;
  font-size: 15px;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  text-align: center;
  width: 83px;
  height: 37px;
  border: 0;
  border-radius: 5px;
  background-color: #6ad36e;
  &:focus {
    outline: 0;
  }
  ${props =>
    (props.larger &&
      css`
        width: 157px;
        font-size: 18px;
        background-color: #38c6da;
      `) ||
    (props.danger &&
      css`
        background-color: #fb5867;
      `)}
`;

export const Check = styled.div`
  color: #000;
  position: absolute;
  margin-left: 3px;
  margin-top: 4px;
  width: 14px;
  height: 8px;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-color: ${props => (props.checked ? '#38C6DA' : '#CFD3D8')};
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
`;
