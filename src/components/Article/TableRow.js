import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableRow = ({ children }) => {
  const Row = styled.tr`
    height: 85px;
    :nth-of-type(odd) {
      height: 75px;
      background-color: ${({ theme }) => theme.row} !important;
    }
    :hover {
      background-color: ${({ theme }) => theme.row} !important;
    }
  `;
  return <Row>{children}</Row>;
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableRow;
