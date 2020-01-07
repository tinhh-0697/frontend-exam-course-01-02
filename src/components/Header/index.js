import React from 'react';
import styled from 'styled-components';
import { Search } from 'components/Commons/icons';
import SwitchTheme from 'components/Header/SwitchTheme';
import Account from 'components/Header/Account';

const index = () => {
  const Header = styled.div`
    position: relative;
    display: flex;
    padding: 0 30px;
    height: 82px;
    background-color: ${props => props.theme.light};
  `;
  const SearchInput = styled.input`
    flex: 1;
    padding-left: 53px;
    font-size: 18px;
    font-weight: 300;
    border: 0;
    background-color: ${props => props.theme.light};

    &:focus {
      outline: 0;
      color: #b5b5b5;
    }
    &::placeholder {
      color: #b5b5b5;
    }
    &:-ms-input-placeholder {
      color: red; /* Internet Explorer 10-11 */
    }
    &::-ms-input-placeholder {
      color: red; /* Microsoft Edge */
    }
  `;
  const SearchIcon = styled(Search)`
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.fourty};
  `;
  return (
    <Header>
      <SearchIcon />
      <SearchInput type="search" placeholder="Search now" onChange={() => {}} />
      <SwitchTheme />
      <Account />
    </Header>
  );
};

export default index;
