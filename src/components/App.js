import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Bootstrap from './Bootstrap';
import Sandbox from './Sandbox';
import PageNotFound from './PageNotFound';

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bootstrap" component={Bootstrap} />
        <Route path="/sandbox" component={Sandbox} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
