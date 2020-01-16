import React from 'react';
import styled from 'styled-components';

const NavIcon = ({ open, setOpen }) => {
  const StyledBurger = styled.button`
    position: absolute;
    top: 29px;
    right: -45px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 25px;
    height: 25px;
    background: transparent;
    border: 0;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 25px;
      height: 4px;
      background: ${({ theme }) => theme.fourty};
      border-radius: 7px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${() => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }

      :nth-child(2) {
        opacity: ${() => (open ? '0' : '1')};
        transform: ${() => (open ? 'translateX(20px)' : 'translateX(0)')};
      }

      :nth-child(3) {
        transform: ${() => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  `;

  return (
    <StyledBurger onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default NavIcon;
