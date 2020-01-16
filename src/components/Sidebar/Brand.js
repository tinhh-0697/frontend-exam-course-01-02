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
  `;

  const BrandLogo = styled.img`
    vertical-align: middle;
  `;

  const BrandName = styled.h1`
    margin-left: 17px;
    margin-bottom: 0;
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.bigest};
    font-family: 'Rubik', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    text-transform: uppercase;
  `;

  return (
    <Wrapper to="/">
      <BrandLogo src={logo} alt="logo" />
      <BrandName>orbita</BrandName>
    </Wrapper>
  );
};

export default Brand;
