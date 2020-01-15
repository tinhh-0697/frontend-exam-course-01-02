import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MediaQuery } from 'theme/globalStyle';

const TableOptions = ({ children }) => {
  const Options = styled.td`
    width: 250px;
    text-align: center;
    ${MediaQuery.sm`
      width: 175px;
    `}
      :first-of-type {
      padding-right: 37px;
    }
  `;
  return <Options>{children}</Options>;
};

TableOptions.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableOptions;
