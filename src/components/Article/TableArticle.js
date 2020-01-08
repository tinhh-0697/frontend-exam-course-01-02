import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Check from 'components/Commons/Check';
import Button from 'components/Commons/Button';
import TableHeading from 'components/Article/TableHeading';
import TableName from 'components/Article/TableName';
import TableView from 'components/Article/TableView';
import TableRow from 'components/Article/TableRow';
import TableOptions from 'components/Article/TableOptions';
import TableStatus from 'components/Article/TableStatus';
import styled from 'styled-components';

const TableArticle = ({ data }) => {
  const TableStyling = styled(Table)`
    margin-bottom: 30px;
    th {
      vertical-align: middle;
      padding-bottom: 17px;
    }
    td {
      vertical-align: middle;
    }
  `;
  const TableBody = styled.tbody`
    border-top: 1px solid;
    border-color: ${({ theme }) => theme.border};
  `;

  return (
    <TableStyling hover striped borderless mb={30}>
      <thead>
        <tr>
          <TableHeading>Name</TableHeading>
          <TableHeading>Views</TableHeading>
          <TableHeading center>Status</TableHeading>
          <TableHeading center>Options</TableHeading>
        </tr>
      </thead>
      <TableBody>
        {data.map(item => {
          const { id, name, views, status } = item;
          return (
            <TableRow key={id}>
              <TableName scope="row">{name}</TableName>
              <TableView>{views}</TableView>
              <TableStatus>
                <Check checked={status} />
              </TableStatus>
              <TableOptions>
                <Button mr={11}>Edit</Button>
                <Button danger>Delete</Button>
              </TableOptions>
            </TableRow>
          );
        })}
      </TableBody>
    </TableStyling>
  );
};

TableArticle.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      status: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({ data: state.data.data });

export default connect(mapStateToProps, null)(TableArticle);
