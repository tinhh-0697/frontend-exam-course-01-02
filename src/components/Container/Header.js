import React from 'react';
import styled from 'styled-components';

const index = () => {
  const Header = styled.div`
    display: flex;
  `;
  return (
    <Header>
      <input type="search" onChange={() => {}} />
      <div>Login</div>
    </Header>
  );
};

export default index;
