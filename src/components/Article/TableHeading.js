import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const TableHeading = ({ children, center }) => {
  const Wrapper = styled.th`
    padding-bottom: 15px;
    color: ${({ theme }) => theme.color.fourty};
    font-size: ${({ theme }) => theme.fontSize.normal};
    font-weight: ${({ theme }) => theme.fontWeight.regular};

    :first-of-type {
      padding-left: 19px;
    }
    ${() =>
      center &&
      css`
        text-align: center;
      `}
  `;
  return <Wrapper>{children}</Wrapper>;
};

TableHeading.defaultProps = {
  center: false,
};

TableHeading.propTypes = {
  children: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

export default TableHeading;
