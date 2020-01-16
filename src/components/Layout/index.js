import React from 'react';
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import { logOutUser, logInByToken } from 'redux/actions/UserAction';
import { connect } from 'react-redux';

const Layout = ({ children, isAuthenticated, logOutUser, logInByToken }) => {
  const token = localStorage.Token;
  if (!isAuthenticated && token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem('Token');
      // logOutUser();
    } else {
      logInByToken(decodedToken.user_id);
    }
  }
  return <>{isAuthenticated ? children : <Redirect to="/login" />}</>;
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = { logOutUser, logInByToken };

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
