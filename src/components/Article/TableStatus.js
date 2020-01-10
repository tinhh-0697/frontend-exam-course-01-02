import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableStatus = ({ children }) => {
  const Status = styled.td`
    width: 5%;
    text-align: center;
  `;
  return <Status>{children}</Status>;
};

TableStatus.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableStatus;
