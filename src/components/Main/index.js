import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import { MediaQuery } from 'theme/globalStyle';

const Main = ({ children }) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
  `;
  const Content = styled.div`
    flex: 1;
    padding: 30px;
    overflow-y: auto;

    ${MediaQuery.md`
      padding: 20px;
      width: 100vw;
    `}
  `;

  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
};

Main.defaultProps = {
  children: true,
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
