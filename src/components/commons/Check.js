import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const index = props => {
  const { checked } = props;
  const Check = styled.div`
    display: inline-block;
    color: #000;
    position: relative;
    bottom: 3px;
    width: 14px;
    height: 8px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: ${() => (checked ? '#38C6DA' : '#CFD3D8')};
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  `;
  return (
    <>
      <Check />
    </>
  );
};

index.defaultProps = {
  checked: false,
};

index.propTypes = {
  checked: PropTypes.bool,
};
export default index;
