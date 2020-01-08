import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableView = ({ children }) => {
  const Views = styled.td`
    color: #676767;
    font-size: 17px;
    font-weight: 400;
  `;
  return <Views>{children}</Views>;
};

TableView.propTypes = {
  children: PropTypes.number.isRequired,
};

export default TableView;
