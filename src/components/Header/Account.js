import React, { useState } from 'react';
import styled from 'styled-components';
import { Setting } from 'components/Commons/icons';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { logOutUser } from 'redux/actions/UserAction';
import PropTypes from 'prop-types';
import { MediaQuery } from 'theme/globalStyle';

// eslint-disable-next-line no-shadow
const Account = ({ userInfo, logOutUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
  `;

  const AccountName = styled.h2`
    margin: 0 20px 0 0;
    color: ${({ theme }) => theme.fifty};
    font-size: ${({ theme }) => theme.fontSize.big};
    font-family: 'Rubik', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeight.regular};

    ${MediaQuery.xs`
      display: none;
    `}
  `;

  const SettingIcon = styled(Setting)`
    width: 32px;
    height: 32px;
    fill: ${({ theme }) => theme.thirty};

    /* ${MediaQuery.sm`
        width: 20px;
         height: 20px;
    `} */
  `;

  const Toggle = styled(DropdownToggle)`
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

  return (
    <Wrapper>
      <AccountName>{userInfo}</AccountName>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <Toggle>
          <SettingIcon />
        </Toggle>
        <DropdownMenu right>
          <DropdownItem>
            <Button onClick={logOutUser} color="primary">
              Sign out
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Wrapper>
  );
};

Account.propTypes = {
  userInfo: PropTypes.string.isRequired,
  logOutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ userInfo: state.user.userInfo });

const mapDispacthToProps = { logOutUser };

export default connect(mapStateToProps, mapDispacthToProps)(Account);
