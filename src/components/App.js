import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Roboto from 'typeface-roboto-mono';

import NaviBar from './NaviBar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Airbnb from './Airbnb';
import Leboncoin from './Leboncoin';
import PageNotFound from './PageNotFound';
import ReactSlickDemo from './ReactSlickDemo';

function App(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Route path="/:activeKey?" component={NaviBar} />
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
          <Route path="/leboncoin" component={Leboncoin} />
          <Route path="/github" component={Portfolio} />
          <Route path="/slick" component={ReactSlickDemo} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
