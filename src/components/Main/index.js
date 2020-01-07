import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import PropTypes from 'prop-types';

const index = props => {
  const { children } = props;
  const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
  `;
  const Content = styled.div`
    padding: 30px;
  `;
  return (
    <Main>
      <Header />
      <Content>{children}</Content>
    </Main>
  );
};

index.defaultProps = {
  children: true,
};

index.propTypes = {
  children: PropTypes.node,
};

export default index;
