import React from 'react';
import styled from 'styled-components';
import Button from 'components/Commons/Button';
import { Plus } from 'components/Commons/icons';
import TableArticle from 'components/Article/TableArticle';

const index = () => {
  const Content = styled.div`
    border-radius: 5px;
    background-color: ${props => props.theme.table};
    border: 1px solid;
    border-color: ${props => props.theme.border};
  `;
  const Heading = styled.div`
    display: flex;
    padding: 29px 20px 16px 20px;
    justify-content: space-between;
    align-items: center;
  `;
  const Title = styled.h3`
    color: ${props => props.theme.article};
    font-size: 20px;
    font-weight: 400;
    text-transform: capitalize;
  `;
  const AddIcon = styled(Plus)`
    margin-left: 15px;
    width: 14px;
    height: 14px;
    fill: #fff;
  `;
  return (
    <Content>
      <Heading>
        <Title>articles</Title>
        <Button larger>
          Add new
          <AddIcon />
        </Button>
      </Heading>
      <TableArticle />
    </Content>
  );
};

export default index;
