import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NaviBar from './NaviBar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import PageNotFound from './PageNotFound';

function App(props) {
  return (
    <div
      style={{
        height: '100%'
      }}
    >
      <NaviBar />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
