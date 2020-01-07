import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'theme/globalStyle';
import Aside from 'components/Aside';
import Dashboard from 'components/Containers/Dashboard';
import Home from 'components/Containers/Home';
import Widget from 'components/Containers/Widget';
import Elements from 'components/Containers/Elements';
import Forms from 'components/Containers/Forms';
import Charts from 'components/Containers/Charts';
import Table from 'components/Containers/Table';
import Maps from 'components/Containers/Maps';
import Pages from 'components/Containers/Pages';
import Blog from 'components/Containers/Blog';
import Ecommerce from 'components/Containers/Ecommerce';
import Main from 'components/Main';
import { themeLight, themeDark } from './theme/globalStyle';

function App() {
  const [isLightTheme, setTheme] = useState(true);
  const handleChangeTheme = () => {
    setTheme(!isLightTheme);
  };
  const AppStyle = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.sixth};
    height: 100vh;
  `;
  const Content = styled.div`
    width: 100%;
    flex: 1;
  `;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isLightTheme ? themeLight : themeDark}>
        <Router>
          <AppStyle>
            <Aside />
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
          </AppStyle>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
