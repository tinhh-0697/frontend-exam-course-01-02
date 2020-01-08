import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CategoryLink = ({ icon, title, notiNumber, path }) => {
  const Content = styled.li`
    position: relative;
    padding-left: 34px;
    transition: 0.25s;
    &:before {
      content: '';
      visibility: hidden;
      position: absolute;
      left: 0;
      width: 4px;
      height: 100%;
      background-color: #38c6da;
    }
    &:hover:before {
      visibility: visible;
    }
  `;
  const LinkMenu = styled(Link)`
    padding: 17px 0;
    display: flex;
    align-items: center;
    &:hover {
      text-decoration: none;
    }
  `;
  const Icon = styled(icon)`
    margin-right: 26px;
    width: 26px;
    height: 26px;
    fill: ${({ theme }) => theme.thirty};

    transition: 0.25s;
    ${Content}:hover & {
      fill: #38c6da;
    }
  `;
  const Title = styled.h4`
    margin-bottom: 0;
    color: ${({ theme }) => theme.title};

    font-size: 18px;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    text-transform: capitalize;
    transition: 0.25s;
    ${Content}:hover & {
      color: #38c6da;
    }
  `;
  const NotificationNumber = styled.p`
    display: inline-block;
    margin: 0 31px 0 auto;
    width: 50px;
    height: 27px;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    border-radius: 27px;
    background-color: #38c6da;
    @media screen and (max-width: 1048px) {
      margin-right: 10px;
      width: 40px;
    }
  `;
  return (
    <Content>
      <LinkMenu to={path}>
        <Icon />
        <Title>{title}</Title>
        {notiNumber && <NotificationNumber>{notiNumber}</NotificationNumber>}
      </LinkMenu>
    </Content>
  );
};

CategoryLink.defaultProps = {
  notiNumber: false,
};

CategoryLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  notiNumber: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  path: PropTypes.string.isRequired,
};

export default CategoryLink;
