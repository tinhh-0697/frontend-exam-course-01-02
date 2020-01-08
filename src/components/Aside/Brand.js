import React from 'react';
import logo from 'images/logo.png';
import styled from 'styled-components';

const Brand = () => {
  const Wrapper = styled.div`
    width: 350px;
    display: flex;
    align-items: center;
    padding-left: 35px;
    height: 82px;
    z-index: 10;
    background-color: #38c6da;
  `;
  const BrandLogo = styled.img`
    vertical-align: middle;
  `;
  const BrandName = styled.h1`
    margin-left: 17px;
    margin-bottom: 0;
    color: #fff;
    font-size: 25px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
  `;

  return (
    <Wrapper>
      <BrandLogo src={logo} alt="logo" />
      <BrandName>orbita</BrandName>
    </Wrapper>
  );
};

export default Brand;
