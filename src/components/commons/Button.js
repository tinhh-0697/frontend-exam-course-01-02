import styled, { css } from 'styled-components';
import { Button } from 'reactstrap';
import { MediaQuery } from 'theme/globalStyle';

const ButtonStyling = styled(Button)`
  margin-right: ${`${props => props.mr}px`};
  width: 83px;
  height: 37px;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: 'Rubik', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-align: center;
  border: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.fifty};

  ${MediaQuery.sm`
    width: 70px;
  `}

  &:focus, &:active {
    outline: 0;
    background-color: #33b0c1 !important;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3) !important;
  }

  &:hover {
    background-color: #33b0c1;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  }

  ${props =>
    props.mr &&
    css`
      margin-right: ${`${props.mr}px`};
    `}

  ${props =>
    props.larger &&
    css`
      display: flex;
      align-items: center;
      width: 157px !important;
      height: 51px !important;
      font-size: ${({ theme }) => theme.fontSize.base};
      background-color: ${({ theme }) => theme.color.sixth};

      ${MediaQuery.xs`
        width: 127px !important;
        height: 41px !important;
      `}
    `};

  ${props =>
    props.danger &&
    css`
      background-color: ${({ theme }) => theme.color.seventh};
    `}
`;

export default ButtonStyling;
