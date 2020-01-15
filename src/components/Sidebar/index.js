import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Brand from 'components/Sidebar/Brand';
import Category from 'components/Sidebar/Category';
import NavbarICon from 'components/Sidebar/NavbarIcon';
import { categoryFirst, categoryLast } from 'components/Sidebar/DataCategory';
import { MediaQuery } from 'theme/globalStyle';

const Sidebar = () => {
  const [isDisplay, setDisplay] = useState(false);
  const ref = useRef();

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    visibility: visible;
    max-width: 350px;
    background-color: ${({ theme }) => theme.background};
    transition: all 0.9s;

    ${MediaQuery.lg`
      max-width: 260px;
    `}

    ${MediaQuery.md`
      position: fixed;
      visibility: ${isDisplay ? 'visible' : 'hidden'};
      z-index: 20;
      width: 260px;
      height: 100vh;
      box-shadow: 400px 400px 0 400px rgba(0,0,0,.3);
    `}
  `;

  const SidebarContent = styled.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.background};
  `;

  const handleClick = e => {
    if (ref.current.contains(e.target)) {
      setDisplay(true);
      return;
    }
    setDisplay(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <Wrapper ref={ref}>
      <NavbarICon onClick={() => setDisplay(true)} />
      <Brand />
      <SidebarContent>
        <Category heading="category 1" list={categoryFirst} />
        <Category heading="category 2" list={categoryLast} />
      </SidebarContent>
    </Wrapper>
  );
};

export default Sidebar;
