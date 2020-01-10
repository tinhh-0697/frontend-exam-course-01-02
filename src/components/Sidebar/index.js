import React from 'react';
import styled from 'styled-components';
import Brand from 'components/Sidebar/Brand';
import Category from 'components/Sidebar/Category';
import { categoryFirst, categoryLast } from 'components/Sidebar/DataCategory';

const Sidebar = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    visibility: visible;
    max-width: 350px;
    background-color: ${({ theme }) => theme.background};

    @media screen and (max-width: 1048px) {
      max-width: 240px;
    }

    @media screen and (max-width: 1063px) {
      max-width: 70px;
    }
  `;

  const SidebarContent = styled.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.background};
  `;

  return (
    <Wrapper>
      <Brand />
      <SidebarContent>
        <Category heading="category 1" list={categoryFirst} />
        <Category heading="category 2" list={categoryLast} />
      </SidebarContent>
    </Wrapper>
  );
};

export default Sidebar;
