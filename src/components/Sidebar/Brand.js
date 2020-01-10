import React from 'react';
import logo from 'images/logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Brand = () => {
  const Wrapper = styled(Link)`
    display: flex;
    align-items: center;
    padding-left: 35px;
    width: 100%;
    height: 82px;
    z-index: 10;
    background-color: ${({ theme }) => theme.color.sixth};
    &:hover {
      text-decoration: none;
    }

    @media screen and (max-width: 1063px) {
      padding-left: 0;
      justify-content: center;
    }
  `;
  const BrandLogo = styled.img`
    vertical-align: middle;

    @media screen and (max-width: 1063px) {
      width: 50px;
    }
  `;
  const BrandName = styled.h1`
    margin-left: 17px;
    margin-bottom: 0;
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.bigest};
    font-family: 'Rubik', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    text-transform: uppercase;

    @media screen and (max-width: 1063px) {
      display: none;
    }
  `;

  return (
    <Wrapper to="/">
      <BrandLogo src={logo} alt="logo" />
      <BrandName>orbita</BrandName>
    </Wrapper>
  );
};

export default Brand;
