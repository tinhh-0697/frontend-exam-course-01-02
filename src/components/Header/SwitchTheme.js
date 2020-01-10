import React, { useEffect } from 'react';
import { Sun, Moon } from 'components/Commons/icons';
import styled from 'styled-components';
import { changeTheme } from 'redux/actions/UIActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-shadow
const SwitchTheme = ({ changeTheme, isLightTheme }) => {
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
    background-color: ${({ theme }) => theme.reserve};
    svg {
      width: 30px;
      height: 30px;
      margin-bottom: 5px;
      &:first-child {
        transform: ${() => (!isLightTheme ? 'translateY(5px)' : 'translateY(-30px)')};
      }
      &:nth-child(2) {
        transform: ${() => (!isLightTheme ? 'translateY(5px)' : 'translateY(-30px)')};
      }
    }
    &:focus {
      outline: 0;
    }
  `;
  const IconContainer = styled.div`
    width: 30px;
    transition: transform 0.7s linear;
  `;

  const handleChangeTheme = () => {
    window.localStorage.setItem('lightMode', !isLightTheme);
    changeTheme(!isLightTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('lightMode');
    if (localTheme === null) {
      window.localStorage.setItem('lightMode', true);
    }
    if (JSON.parse(localTheme) !== isLightTheme) {
      changeTheme(JSON.parse(localTheme));
    }
  }, [isLightTheme]);

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
  isLightTheme: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ isLightTheme: state.ui.isLightTheme });

const mapDispatchToProps = { changeTheme };

export default connect(mapStateToProps, mapDispatchToProps)(SwitchTheme);
