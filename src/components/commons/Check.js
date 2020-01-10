import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Check = ({ checked }) => {
  const Wrapper = styled.div`
    display: inline-block;
    color: ${({ theme }) => theme.color.eight};
    position: relative;
    bottom: 3px;
    width: 14px;
    height: 8px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: ${({ theme }) => (checked ? theme.color.sixth : '#CFD3D8')};
    transform: rotate(-45deg);
  `;
  return <Wrapper />;
};

Check.defaultProps = {
  checked: false,
};

Check.propTypes = {
  checked: PropTypes.bool,
};
export default Check;
