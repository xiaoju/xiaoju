import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import NaviBar from './NaviBar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Airbnb from './Airbnb';
import PageNotFound from './PageNotFound';

const Mobile = props => <MediaQuery {...props} maxWidth={767} />;
const Default = props => <MediaQuery {...props} minWidth={768} />;

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

        // <MediaQuery minDeviceWidth={768}>
        //  {(matches) => {
        // if (matches) {
        // return <div>Media query matches!</div>;
        // } else {
        // return <div>Media query does not match!</div>;
        // }
        // }}
        // </MediaQuery>
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
