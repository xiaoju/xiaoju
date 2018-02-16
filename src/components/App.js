import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NaviBar from './NaviBar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Airbnb from './Airbnb';
import PageNotFound from './PageNotFound';

function App(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <NaviBar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          flexGrow: '1'
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/airbnb" component={Airbnb} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
