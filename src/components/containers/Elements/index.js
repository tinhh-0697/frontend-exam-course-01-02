import React from 'react';
import styled from 'styled-components';
import Article from 'components/Article';

const index = () => {
  const Elements = styled.div`
    /* background-color: ${({ theme }) => theme.table}; */
  `;
  return (
    <Elements>
      <Article />
    </Elements>
  );
};

export default index;
