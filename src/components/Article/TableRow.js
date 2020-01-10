import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableRow = ({ children }) => {
  const Row = styled.tr`
    height: 85px;
    &&& {
      background-color: ${({ theme }) => theme.background};

      :nth-of-type(even) {
        height: 75px;
        background-color: ${({ theme }) => theme.row};
      }
      :hover {
        background-color: ${({ theme }) => theme.row};
      }
    }
  `;
  return <Row>{children}</Row>;
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableRow;
