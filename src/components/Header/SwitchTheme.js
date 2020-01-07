import React, { useState } from 'react';
import { Sun, Moon } from 'components/Commons/icons';
import styled from 'styled-components';

const SwitchTheme = () => {
  const [isDarkMode, changeMode] = useState(false);
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
    background-color: ${props => props.theme.reserve};
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
    transform: ${props => (!props.theme.lightMode ? 'translateY(5px)' : 'translateY(-30px)')};
  `;
  const handleChangeTheme = () => {
    changeMode(!isDarkMode);
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

export default SwitchTheme;
