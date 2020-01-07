import React, { useState } from 'react';
import styled from 'styled-components';
import { Setting } from 'components/Commons/icons';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

const Account = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
  `;
  const AccountName = styled.h2`
    margin: 0 20px 0 0;
    color: ${({ theme }) => theme.fifty};
    font-size: 20px;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
  `;
  const SettingIcon = styled(Setting)`
    width: 32px;
    height: 32px;
    fill: ${({ theme }) => theme.thirty};
  `;
  const Toggle = styled(DropdownToggle)`
    padding: 0;
    background-color: transparent;
    border: 0;
    &:hover {
      background-color: transparent;
      border: 0;
      outline: 0;
      box-shadow: 0;
    }
    &:focus {
      background-color: transparent;
      border: 0;
      outline: 0;
      box-shadow: 0;
    }
  `;
  return (
    <Wrapper>
      <AccountName>Kaie Reed</AccountName>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <Toggle>
          <SettingIcon />
        </Toggle>
        <DropdownMenu right>
          <DropdownItem>
            <Button color="primary">Sign out</Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Wrapper>
  );
};

export default Account;
