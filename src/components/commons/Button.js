import styled, { css } from 'styled-components';
import { Button } from 'reactstrap';

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

  &:focus {
    outline: 0;
  }
  ${props =>
    props.mr &&
    css`
      margin-right: ${`${props.mr}px`};
    `}
  ${props =>
    props.larger &&
    css`
      width: 157px;
      height: 51px;
      font-size: ${({ theme }) => theme.fontSize.base};
      background-color: ${({ theme }) => theme.color.sixth};
    `};

  ${props =>
    props.danger &&
    css`
      background-color: ${({ theme }) => theme.color.seventh};
    `}
`;

export default ButtonStyling;
