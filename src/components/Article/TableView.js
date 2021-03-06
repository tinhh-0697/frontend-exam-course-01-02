import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableView = ({ children }) => {
  const Views = styled.td`
    width: 7%;
    color: ${({ theme }) => theme.color.thirty};
    font-size: ${({ theme }) => theme.fontSize.normal};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  `;
  return (
    <Views>
      <span>{children}</span>
    </Views>
  );
};

TableView.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TableView;
