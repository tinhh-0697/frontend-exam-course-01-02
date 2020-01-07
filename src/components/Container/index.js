import React from 'react';
import styled from 'styled-components';
import Header from 'components/Container/Header';
import PropTypes from 'prop-types';

const index = props => {
  const { children } = props;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;
  return (
    <Container>
      <Header />
      <div>{children}</div>
    </Container>
  );
};

index.defaultProps = {
  children: true,
};

index.propTypes = {
  children: PropTypes.node,
};

export default index;
