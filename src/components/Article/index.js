import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Plus } from 'components/Commons/icons';
import { clearCurrentItem } from 'redux/actions/DataAction';
import styled from 'styled-components';
import Button from 'components/Commons/Button';
import TableArticle from 'components/Article/TableArticle';
import PropTypes from 'prop-types';
import Modals from 'components/Modal';
import { MediaQuery } from 'theme/globalStyle';

// eslint-disable-next-line no-shadow
const Article = ({ list, clearCurrentItem }) => {
  const [modal, setModal] = useState(false);

  const Content = styled.div`
    margin-bottom: 30px;
    border-radius: 7px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.table};

    ${MediaQuery.md`
      margin-bottom: 20px;
    `}
  `;

  const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 29px 20px 16px;
  `;

  const Title = styled.h3`
    color: ${({ theme }) => theme.article};
    font-size: ${({ theme }) => theme.fontSize.big};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    text-transform: capitalize;
  `;

  const AddIcon = styled(Plus)`
    margin-left: 15px;
    fill: ${({ theme }) => theme.color.primary};
    width: 14px;
    height: 14px;
  `;

  const ToggleModal = () => {
    setModal(!modal);
  };

  const toggleAndClearCurrentItem = () => {
    clearCurrentItem();
    setModal(!modal);
  };

  return (
    <Content>
      <Modals isOpen={modal} toggle={ToggleModal} />
      <Heading>
        <Title>articles</Title>
        <Button larger onClick={toggleAndClearCurrentItem}>
          Add new
          <AddIcon />
        </Button>
      </Heading>
      <TableArticle toggle={ToggleModal} data={list} />
    </Content>
  );
};

Article.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      status: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  clearCurrentItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ list: state.data.list });

const mapDispatchToProps = { clearCurrentItem };

export default connect(mapStateToProps, mapDispatchToProps)(Article);
