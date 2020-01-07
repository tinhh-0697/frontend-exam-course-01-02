import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const index = props => {
  const { children, larger, danger, mr } = props;

  const ButtonStyling = styled.button`
    margin-right: ${`${mr}px`};
    width: 83px;
    height: 37px;
    color: #fff;
    font-size: 15px;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    text-align: center;
    border: 0;
    border-radius: 5px;
    background-color: #6ad36e;
    &:focus {
      outline: 0;
    }
    ${() =>
      larger &&
      css`
        width: 157px;
        height: 51px;
        font-size: 18px;
        background-color: #38c6da;
      `};
    ${() =>
      danger &&
      css`
        background-color: #fb5867;
      `}
  `;

  return <ButtonStyling>{children}</ButtonStyling>;
};

index.defaultProps = {
  children: false,
  larger: false,
  danger: false,
  mr: 0,
};

index.propTypes = {
  children: PropTypes.node,
  larger: PropTypes.bool,
  danger: PropTypes.bool,
  mr: PropTypes.number,
};

export default index;
