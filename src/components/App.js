import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NaviBar from './NaviBar';
import Home from './Home';
import Portfolio from './Portfolio';
import Airbnb from './Airbnb';
import Leboncoin from './Leboncoin';
import PageNotFound from './PageNotFound';
import ReactSlickDemo from './ReactSlickDemo';
import Footer from './Footer';

function App(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Route path="/:activeKey?" component={NaviBar} />
      <Home
        style={{
          height: '100%'
        }}
      />
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
          <Route exact path="/" component={Portfolio} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/github" component={Portfolio} />
          <Route path="/airbnb" component={Airbnb} />
          <Route path="/leboncoin" component={Leboncoin} />
          <Route path="/slick" component={ReactSlickDemo} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
