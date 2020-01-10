import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const Buttons = ({ children, larger, danger, mr, handleClick, id }) => {
  const ButtonStyling = styled(Button)`
    margin-right: ${`${mr}px`};
    width: 83px;
    height: 37px;
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-family: 'Rubik', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    text-align: center;
    border: 0;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.fifty};

    &:focus {
      outline: 0;
    }

    ${() =>
      larger &&
      css`
        width: 157px;
        height: 51px;
        font-size: ${({ theme }) => theme.fontSize.base};
        background-color: ${({ theme }) => theme.color.sixth};
      `};

    ${() =>
      danger &&
      css`
        background-color: ${({ theme }) => theme.color.seventh};
      `}
  `;

  const handleButtonClick = useCallback(() => {
    if (id) {
      handleClick(id);
    } else {
      handleClick();
    }
  }, [id]);

  return <ButtonStyling onClick={handleButtonClick}>{children}</ButtonStyling>;
};

Buttons.defaultProps = {
  children: false,
  larger: false,
  danger: false,
  mr: 0,
  id: null,
  handleClick: undefined,
};

Buttons.propTypes = {
  children: PropTypes.node,
  larger: PropTypes.bool,
  danger: PropTypes.bool,
  mr: PropTypes.number,
  id: PropTypes.number,
  handleClick: PropTypes.func,
};

export default Buttons;
