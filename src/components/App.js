import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Home0 from './Home0';
import Responsive from './Responsive';
import Bootstrap from './Bootstrap';
import Airbnb from './Airbnb';
import Sandbox from './Sandbox';
import Flexbox from './Flexbox';
import PageNotFound from './PageNotFound';

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/Responsive" component={Responsive} />
        <Route path="/bootstrap" component={Bootstrap} />
        <Route path="/sandbox" component={Sandbox} />
        <Route path="/flexbox" component={Flexbox} />
        <Route path="/airbnb" component={Airbnb} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
