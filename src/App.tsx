import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { MainHeader } from './components/shared/MainHeader';
import { AboutScreenContainer } from './containers/AboutScreenContainer';
import { HomeScreenContainer } from './containers/HomeScreenContainer';

const GlobalStyle = createGlobalStyle`
  body {
    color: black;
    padding: 1em;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto 30px;
  max-width: 50em;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  justify-content: center;
`;

const App: React.SFC<{}> = () => (
  <Router>
    <AppContainer>
      <GlobalStyle />
      <MainHeader />
      <Route exact path="/" component={HomeScreenContainer} />
      <Route path="/about" component={AboutScreenContainer} />
    </AppContainer>
  </Router>
);

export default hot(module)(App);
