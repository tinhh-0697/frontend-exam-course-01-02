import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableName = ({ children }) => {
  const Name = styled.td`
    color: ${({ theme }) => theme.color.second};
    font-size: ${({ theme }) => theme.fontSize.normal};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    position: relative;

    &:before {
      content: '&nbsp;';
      visibility: hidden;
    }

    :first-of-type {
      padding-left: 19px;
    }

    span {
      position: absolute;
      left: 19px;
      right: 0;
      margin-bottom: 0;
      max-width: 90%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `;
  return (
    <Name>
      <span>{children}</span>
    </Name>
  );
};

TableName.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TableName;
