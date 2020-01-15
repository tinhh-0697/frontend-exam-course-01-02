import React from 'react';
import styled from 'styled-components';
import { MediaQuery } from 'theme/globalStyle';

const NavbarICon = () => {
  const Icon = styled.i`
    color: ${({ theme }) => theme.fourty};
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 2px;
    margin-top: 10px;
    width: 25px;
    height: 3px;
    background-color: currentColor;
    transition: color 0.15s linear;

    &:before {
      content: '';
      position: absolute;
      top: -7px;
      left: 0;
      width: 25px;
      height: 3px;
      background-color: currentColor;
    }

    &:after {
      content: '';
      position: absolute;
      top: 7px;
      left: 0;
      width: 25px;
      height: 3px;
      background-color: currentColor;
    }
  `;

  const NavbarButton = styled.button`
    display: none;
    position: absolute;
    top: 30px;
    left: 20px;
    width: 25px;
    height: 25px;
    visibility: initial;
    border: 0;
    outline: 0;
    background-color: ${({ theme }) => theme.light};

    ${MediaQuery.md`
      display: block;
    `}

    &:focus {
      outline: 0;
    }

    &:hover {
      i {
        color: ${({ theme }) => theme.color.sixth};
      }
    }
  `;

  return (
    <NavbarButton>
      <Icon />
    </NavbarButton>
  );
};

export default NavbarICon;
