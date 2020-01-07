import React from 'react';
import { Sun, Moon } from 'components/Commons/icons';
import styled from 'styled-components';
import { changeTheme } from 'redux/actions/UIActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-shadow
const SwitchTheme = ({ changeTheme }) => {
  const SwitchButton = styled.button`
    display: flex;
    justify-content: center;
    align-self: center;
    overflow: hidden;
    margin-right: 20px;
    padding: 0;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 50%;
    transition: all 0.3s linear;
    background-color: ${({ theme }) => theme.reserve};
    svg {
      width: 30px;
      height: 30px;
      margin-bottom: 5px;
    }
    &:focus {
      outline: 0;
    }
  `;
  const IconContainer = styled.div`
    width: 30px;
    transition: all 0.3s linear;
    transform: ${({ theme }) => (!theme.lightMode ? 'translateY(5px)' : 'translateY(-30px)')};
  `;
  const handleChangeTheme = () => {
    changeTheme();
  };

  return (
    <SwitchButton type="button" onClick={handleChangeTheme}>
      <IconContainer>
        <Sun />
        <Moon />
      </IconContainer>
    </SwitchButton>
  );
};

SwitchTheme.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

const mapDispatchToProps = { changeTheme };

export default connect(null, mapDispatchToProps)(SwitchTheme);
