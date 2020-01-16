import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Brand from 'components/Sidebar/Brand';
import Category from 'components/Sidebar/Category';
import NavIcon from 'components/Sidebar/NavIcon';
import { Wrapper } from 'components/Sidebar/Wrapper';
import { categoryFirst, categoryLast } from 'components/Sidebar/DataCategory';
import { useOnClickOutside } from '../Commons/OutsideClickHook';

const Sidebar = () => {
  const [isDisplay, setDisplay] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setDisplay(false));

  const SidebarContent = styled.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.background};
  `;

  return (
    <Wrapper isDisplay={isDisplay} ref={ref}>
      <NavIcon open={isDisplay} setOpen={setDisplay} />
      <Brand />
      <SidebarContent>
        <Category heading="category 1" list={categoryFirst} />
        <Category heading="category 2" list={categoryLast} />
      </SidebarContent>
    </Wrapper>
  );
};

export default Sidebar;
