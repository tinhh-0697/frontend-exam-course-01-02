import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  const rotate = keyframes`
    from {transform: rotate(0deg);}
    to   {transform: rotate(360deg);}
  `;
  const Wrapper = styled.div`
    z-index: 20;
  `;
  const Icon = styled.div`
    box-shadow: 0px 0px 0px 1500px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    height: 52px;
    width: 52px;
    z-index: 300;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.sixth};
    transform: translate(-50%, -50%);
    animation: ${rotate} 1s ease infinite;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: -10px;
      width: 16px;
      height: 16px;
      overflow: hidden;
      z-index: 3;
      box-sizing: content-box;
      border: 4px solid rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      box-shadow: inset 0px 0px 0px 16px #fff;
      background-color: ${({ theme }) => theme.loading};
      transform: translateY(-50%);
    }
  `;

  return (
    <Wrapper>
      <Icon />
    </Wrapper>
  );
};

export default Loading;
