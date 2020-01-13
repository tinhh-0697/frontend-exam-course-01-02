import React, { useEffect } from 'react';
import Article from 'components/Article';
import Loading from 'components/Loading';
import { connect } from 'react-redux';
import { getData } from 'redux/actions/DataAction';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-shadow
const Elements = ({ getData, isLoading }) => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {isLoading && <Loading />}
      <Article />
      <Article />
    </div>
  );
};

Elements.propTypes = {
  getData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ isLoading: state.data.isLoading });

const mapDispatchToProps = { getData };

export default connect(mapStateToProps, mapDispatchToProps)(Elements);
