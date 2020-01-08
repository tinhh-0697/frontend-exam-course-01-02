import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableName = ({ children }) => {
  const Name = styled.td`
    color: #a0a0a0;
    font-size: 17px;
    font-weight: 300;
    :first-of-type {
      padding-left: 19px;
    }
    p {
      margin-bottom: 0;
      max-width: 225px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `;
  return (
    <Name scope="row">
      <p>{children}</p>
    </Name>
  );
};

TableName.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TableName;
