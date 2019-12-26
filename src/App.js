import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Favs from './pages/Favs/Favs';

import GlobalStyle from './assets/styles/Global';
const App = props => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/country/:numericcode" render={localProps => <Detail {...localProps} />} />
        <Route path="/favs" render={() => <Favs />} />
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
  </>
);


export default App;
