import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'theme/globalStyle';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import Widget from 'pages/Widget';
import Elements from 'pages/Elements';
import Forms from 'pages/Forms';
import Charts from 'pages/Charts';
import Table from 'pages/Table';
import Maps from 'pages/Maps';
import Pages from 'pages/Pages';
import Blog from 'pages/Blog';
import Ecommerce from 'pages/Ecommerce';
import Login from 'pages/Login';
import Main from 'components/Main';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import AuthRoute from 'utils/AuthRoute';
import { logOutUser, logInByToken } from 'redux/actions/UserAction';
import { themeLight, themeDark } from './theme/globalStyle';

const App = ({ ui, isAuthenticated, logOutUser, logInByToken }) => {
  const { isLightTheme } = ui;

  const AppStyle = styled.div`
    background-color: ${({ theme }) => theme.sixth};
    height: 100vh;
  `;

  const Content = styled.div`
    width: 100%;
    flex: 1;
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  useEffect(() => {
    const token = localStorage.Token;
    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < Date.now()) {
        logOutUser();
        window.location.href = '/login';
      } else {
        logInByToken(decodedToken.user_id);
      }
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isLightTheme ? themeLight : themeDark}>
        <Router>
          <AppStyle>
            <Route path="/login" component={isAuthenticated ? null : Login} />
            <AuthRoute>
              <Wrapper>
                <Sidebar />
                <Main>
                  <Switch>
                    <Content>
                      <Route exact path="/" component={Dashboard} />
                      <Route path="/home" component={Home} />
                      <Route path="/widget" component={Widget} />
                      <Route path="/elements" component={Elements} />
                      <Route path="/form" component={Forms} />
                      <Route path="/chart" component={Charts} />
                      <Route path="/table" component={Table} />
                      <Route path="/maps" component={Maps} />
                      <Route path="/page" component={Pages} />
                      <Route path="/blog" component={Blog} />
                      <Route path="/ecommerce" component={Ecommerce} />
                    </Content>
                  </Switch>
                </Main>
              </Wrapper>
            </AuthRoute>
          </AppStyle>
        </Router>
      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  ui: PropTypes.shape({
    isLightTheme: PropTypes.bool.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logOutUser: PropTypes.func.isRequired,
  logInByToken: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ui: state.ui,
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = { logOutUser, logInByToken };

export default connect(mapStateToProps, mapDispatchToProps)(App);
