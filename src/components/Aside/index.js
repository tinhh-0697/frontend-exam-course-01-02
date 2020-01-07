import React from 'react';
import styled from 'styled-components';
import Brand from 'components/Aside/Brand';
import Category from 'components/Aside/Category';
import { categoryFirst, categoryLast } from 'components/Aside/categoryList';

const Aside = () => {
  const AsideStyle = styled.div`
    position: fixed;
    visibility: hidden;
    max-width: 350px;
    background-color: ${props => props.theme.background};
    flex: 1;
    @media screen and (min-width: 919px) {
      position: relative;
      visibility: visible;
    }
  `;
  const AsideContent = styled.div`
    background-color: ${props => props.theme.background};
  `;
  return (
    <AsideStyle>
      <Brand />
      <AsideContent>
        <Category heading="category 1" list={categoryFirst} />
        <Category heading="category 2" list={categoryLast} />
      </AsideContent>
    </AsideStyle>
  );
};

export default Aside;
