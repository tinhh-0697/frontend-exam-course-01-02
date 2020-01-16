import styled from 'styled-components';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const DropdownWrapper = styled(DropdownMenu)`
  background-color: ${({ theme }) => theme.thirty};
`;

export const DropdownItemWrapper = styled(DropdownItem)`
  :hover {
    background-color: ${({ theme }) => theme.thirty};
  }
`;

export const Toggle = styled(DropdownToggle)`
  padding: 0;
  background-color: transparent;
  border: 0;

  &:hover,
  &:active,
  &:focus {
    background-color: transparent !important;
    border: 0 !important;
    outline: 0 !important;
    box-shadow: none !important;
  }
`;
