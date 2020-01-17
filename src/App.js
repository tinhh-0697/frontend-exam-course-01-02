import React from 'react';
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
import PropTypes from 'prop-types';
import AuthRoute from 'utils/AuthRoute';
import { themeLight, themeDark } from './theme/globalStyle';

const App = ({ ui, isAuthenticated }) => {
  const { isLightTheme } = ui;

  const AppStyle = styled.div`
    background-color: ${({ theme }) => theme.sixth};
  `;

  const Content = styled.div`
    width: 100%;
    flex: 1;
  `;

  const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
  `;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isLightTheme ? themeLight : themeDark}>
        <Router>
          <AppStyle>
            <Route exact path="/login" component={isAuthenticated ? null : Login} />
            <AuthRoute>
              <Wrapper>
                <Sidebar />
                <Main>
                  <Switch>
                    <Content>
                      <Route exact path="/" component={Dashboard} />
                      <Route exact path="/home" component={Home} />
                      <Route exact path="/widget" component={Widget} />
                      <Route exact path="/elements" component={Elements} />
                      <Route exact path="/form" component={Forms} />
                      <Route exact path="/chart" component={Charts} />
                      <Route exact path="/table" component={Table} />
                      <Route exact path="/maps" component={Maps} />
                      <Route exact path="/page" component={Pages} />
                      <Route exact path="/blog" component={Blog} />
                      <Route exact path="/ecommerce" component={Ecommerce} />
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
};

const mapStateToProps = state => ({
  ui: state.ui,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, null)(App);
