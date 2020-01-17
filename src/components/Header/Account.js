import React, { useState } from 'react';
import Button from 'components/Commons/Button';
import { Dropdown } from 'reactstrap';
import { connect } from 'react-redux';
import { logOutUser } from 'redux/actions/UserAction';
import PropTypes from 'prop-types';
import { DropdownWrapper, DropdownItemWrapper, Toggle } from 'components/Header/Dropdown';
import { Wrapper, AccountName, SettingIcon } from 'components/Header/HeaderComponent';

// eslint-disable-next-line no-shadow
const Account = ({ userInfo, logOutUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const handleLogout = () => {};

  return (
    <Wrapper>
      <AccountName>{userInfo}</AccountName>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <Toggle>
          <SettingIcon />
        </Toggle>
        <DropdownWrapper right>
          <DropdownItemWrapper>
            <Button onClick={logOutUser} color="primary">
              Sign out
            </Button>
          </DropdownItemWrapper>
        </DropdownWrapper>
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
