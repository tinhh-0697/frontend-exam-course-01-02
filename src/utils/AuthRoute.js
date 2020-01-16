/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { logInByToken } from 'redux/actions/UserAction';

// eslint-disable-next-line no-shadow
const AuthRoute = ({ children, isAuthenticated, logInByToken, ...rest }) => {
  const token = localStorage.Token;
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    if (!isAuthenticated && token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('Token');
      } else {
        logInByToken(decodedToken.user_id, history, from);
      }
    }
  }, []);

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated === true ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from } }} />
        );
      }}
    />
  );
};

AuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logInByToken: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ isAuthenticated: state.user.isAuthenticated });

const mapDispatchToProps = { logInByToken };

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);
