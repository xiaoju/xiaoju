import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import PageNotFound from './PageNotFound';

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
