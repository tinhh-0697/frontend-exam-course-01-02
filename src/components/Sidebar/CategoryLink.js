import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CategoryLink = ({ icon, title, notiNumber, path }) => {
  const Content = styled.li`
    position: relative;
    padding-left: 34px;

    @media screen and (max-width: 1063px) {
      padding-left: 0;
    }
  `;
  const LinkMenu = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 17px 0;
    width: 100%;

    @media screen and (max-width: 1063px) {
      justify-content: center;
    }

    &:before {
      content: '';
      visibility: hidden;
      position: absolute;
      left: 0;
      width: 4px;
      height: 100%;
      background-color: ${({ theme }) => theme.color.sixth};
    }

    &:hover {
      text-decoration: none;
    }

    &.active {
      svg {
        fill: ${({ theme }) => theme.color.sixth};
      }
      h4 {
        color: ${({ theme }) => theme.color.sixth};
      }
      &:before {
        visibility: visible;
      }
    }
  `;
  const Icon = styled(icon)`
    margin-right: 26px;
    width: 26px;
    height: 26px;
    fill: ${({ theme }) => theme.thirty};

    @media screen and (max-width: 1063px) {
      margin-right: 0;
    }

    ${Content}:hover & {
      fill: ${({ theme }) => theme.color.sixth};
    }
  `;
  const Title = styled.h4`
    margin-bottom: 0;
    color: ${({ theme }) => theme.title};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-family: 'Rubik', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    text-transform: capitalize;

    @media screen and (max-width: 1063px) {
      display: none;
    }

    ${Content}:hover & {
      color: ${({ theme }) => theme.color.sixth};
    }
  `;
  const NotificationNumber = styled.p`
    display: inline-block;
    margin: 0 31px 0 auto;
    width: 50px;
    height: 27px;
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    text-align: center;
    border-radius: 27px;
    background-color: ${({ theme }) => theme.color.sixth};

    @media screen and (max-width: 1063px) {
      display: none;
    }

    @media screen and (max-width: 1048px) {
      margin-right: 10px;
      width: 40px;
    }
  `;

  return (
    <Content>
      <LinkMenu exact to={path}>
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
