import React, { useEffect } from 'react';
import Article from 'components/Article';
import Loading from 'components/Loading';
import { connect } from 'react-redux';
import { getData } from 'redux/actions/DataAction';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-shadow
const Elements = ({ getData, data }) => {
  const { isLoading } = data;

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
  data: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = { getData };

export default connect(mapStateToProps, mapDispatchToProps)(Elements);
