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
    z-index: 10;
    background-color: ${({ theme }) => theme.light};
  `;
  const SearchInput = styled.input`
    flex: 1;
    padding-left: 53px;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    border: 0;
    background-color: ${({ theme }) => theme.light};

    &:focus {
      outline: 0;
      color: ${({ theme }) => theme.color.ninth};
    }
    &::placeholder {
      color: ${({ theme }) => theme.color.ninth};
    }
    &:-ms-input-placeholder {
      color: ${({ theme }) => theme.color.ninth}; /* Internet Explorer 10-11 */
    }
    &::-ms-input-placeholder {
      color: ${({ theme }) => theme.color.ninth}; /* Microsoft Edge */
    }
  `;
  const SearchIcon = styled(Search)`
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.fourty};
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
