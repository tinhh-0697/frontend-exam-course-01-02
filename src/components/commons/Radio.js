import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Radio = ({ checked }) => {
  const Wrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid;
    border-color: ${({ theme }) => theme.ninth};
    background-color: ${({ theme }) => theme.eighth};
  `;
  const Circle = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => (checked ? theme.color.sixth : theme.seventh)};
  `;
  return (
    <Wrapper>
      <Circle />
    </Wrapper>
  );
};

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default Radio;
