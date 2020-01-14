import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteData, getCurrentItem } from 'redux/actions/DataAction';
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
import format from 'utils/formatNumber';

// eslint-disable-next-line no-shadow
const TableArticle = ({ data, deleteData, getCurrentItem, toggle }) => {
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

  const TableRowHeading = styled.tr`
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.border};
  `;

  const openModal = id => () => {
    getCurrentItem(id);
    toggle();
  };

  const deleteItem = id => () => deleteData(id);

  return (
    <>
      <TableStyling hover striped borderless mb={30}>
        <thead>
          <TableRowHeading>
            <TableHeading>Name</TableHeading>
            <TableHeading>Views</TableHeading>
            <TableHeading center>Status</TableHeading>
            <TableHeading center>Options</TableHeading>
          </TableRowHeading>
        </thead>
        <tbody>
          {data.map(item => {
            const { id, name, views, status } = item;
            return (
              <TableRow key={id}>
                <TableName scope="row">{name}</TableName>
                <TableView>{format(views)}</TableView>
                <TableStatus>
                  <Check checked={status} />
                </TableStatus>
                <TableOptions>
                  <Button mr={11} onClick={openModal(id)}>
                    Edit
                  </Button>
                  <Button danger onClick={deleteItem(id)}>
                    Delete
                  </Button>
                </TableOptions>
              </TableRow>
            );
          })}
        </tbody>
      </TableStyling>
    </>
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
  deleteData: PropTypes.func.isRequired,
  getCurrentItem: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

const mapDispatchToProps = { deleteData, getCurrentItem };

export default connect(null, mapDispatchToProps)(TableArticle);
