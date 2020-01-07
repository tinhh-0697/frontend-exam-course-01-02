import React from 'react';
import { Table } from 'reactstrap';
import Check from 'components/Commons/Check';
import Button from 'components/Commons/Button';
import styled, { css } from 'styled-components';

const TableArticle = () => {
  const TableStyling = styled(Table)`
    margin-bottom: 30px;
    th {
      vertical-align: middle;
      padding-bottom: 17px;
      /* display: inline; */
    }
    td {
      vertical-align: middle;
    }
  `;
  const TableHeading = styled.th`
    padding-bottom: 15px;
    color: #555555;
    font-size: 17px;
    font-weight: 400;
    :first-of-type {
      padding-left: 19px;
    }
    ${props =>
      props.center &&
      css`
        text-align: center;
      `}
  `;
  const TableBody = styled.tbody`
    border-top: 1px solid;
    border-color: ${props => props.theme.border};
  `;
  const Row = styled.tr`
    height: 85px;
    :nth-of-type(odd) {
      height: 75px;
      background-color: ${props => props.theme.row} !important;
    }
    :hover {
      background-color: ${props => props.theme.row} !important;
    }
  `;

  const Name = styled.td`
    color: #a0a0a0;
    font-size: 17px;
    font-weight: 300;
    :first-of-type {
      padding-left: 19px;
    }
  `;
  const Views = styled.td`
    color: #676767;
    font-size: 17px;
    font-weight: 400;
  `;
  const Status = styled.td`
    text-align: center;
  `;
  const Options = styled.td`
    /* display: flex; */
    /* align-items: center; */
    /* height: 75px; */
    :first-of-type {
      padding-right: 37px;
    }
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
        <Row>
          <Name scope="row">Creating Remarkable Poster Creating Remarkable Poster</Name>
          <Views>2567</Views>
          <Status>
            <Check />
          </Status>
          <Options>
            <Button mr={11}>Edit</Button>
            <Button danger>Delete</Button>
          </Options>
        </Row>
        <Row>
          <Name scope="row">Creating Remarkable Poster Creating Remarkable Poster</Name>
          <Views>3735</Views>
          <Status>
            <Check checked />
          </Status>
          <Options>
            <Button mr={11}>Edit</Button>
            <Button danger> Delete</Button>
          </Options>
        </Row>
      </TableBody>
    </TableStyling>
  );
};
export default TableArticle;
