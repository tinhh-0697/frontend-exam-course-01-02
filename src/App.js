import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Aside from 'components/Aside';
import Dashboard from 'components/containers/Dashboard';
import Home from 'components/containers/Home';
import Widget from 'components/containers/Widget';
import Elements from 'components/containers/Elements';
import Forms from 'components/containers/Forms';
import Charts from 'components/containers/Charts';
import Table from 'components/containers/Table';
import Maps from 'components/containers/Maps';
import Pages from 'components/containers/Pages';
import Blog from 'components/containers/Blog';
import Ecommerce from 'components/containers/Ecommerce';
import Container from 'components/Container';
import { themeLight, themeDark } from './theme/globalStyle';

function App() {
  const [theme] = useState(themeLight);
  const AppStyle = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Content = styled.div`
    width: 100%;
    flex: 1;
  `;
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppStyle>
          <Aside />
          <Container>
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
          </Container>
        </AppStyle>
      </Router>
    </ThemeProvider>
  );
}

export default App;
