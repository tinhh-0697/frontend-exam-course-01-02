import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from 'components/Commons/Button';
import { Plus } from 'components/Commons/icons';
import TableArticle from 'components/Article/TableArticle';
import { connect } from 'react-redux';
import { getData } from 'redux/actions/DataAction';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-shadow
const Article = ({ getData }) => {
  const Content = styled.div`
    margin-bottom: 30px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.table};
    border: 1px solid;
    border-color: ${({ theme }) => theme.border};
  `;
  const Heading = styled.div`
    display: flex;
    padding: 29px 20px 16px 20px;
    justify-content: space-between;
    align-items: center;
  `;
  const Title = styled.h3`
    color: ${({ theme }) => theme.article};
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

  useEffect(() => {
    getData();
  }, []);

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

Article.propTypes = {
  getData: PropTypes.func.isRequired,
};

const mapDispatchToProps = { getData };

export default connect(null, mapDispatchToProps)(Article);
