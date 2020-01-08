import React from 'react';
import styled from 'styled-components';
import Brand from 'components/Aside/Brand';
import Category from 'components/Aside/Category';
import { categoryFirst, categoryLast } from 'components/Aside/categoryList';

const Aside = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    visibility: visible;
    max-width: 350px;

    background-color: ${({ theme }) => theme.background};
    flex: 1;
    @media screen and (max-width: 919px) {
      position: fixed;
      visibility: hidden;
    }
    @media screen and (max-width: 1048px) {
      max-width: 240px;
    }
  `;
  const AsideContent = styled.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.background};
  `;
  return (
    <Wrapper>
      <Brand />
      <AsideContent>
        <Category heading="category 1" list={categoryFirst} />
        <Category heading="category 2" list={categoryLast} />
      </AsideContent>
    </Wrapper>
  );
};

export default Aside;
