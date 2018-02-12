import React, { Component } from 'react';

class AirbnbComponent extends Component {
  // componentDidMount() {
  //   window.$(this.refs.list).fadeOut(); //**
  // }

  render() {
    return (
      <div
        class="airbnb-embed-frame"
        data-id="21917882"
        data-view="home"
        data-hide-price="false"
        style={{ width: '450px', height: '300px', margin: 'auto' }}
      >
        <a href="https://www.airbnb.com/rooms/21917882?s=51">
          <span>View On Airbnb</span>
        </a>
        <a href="https://www.airbnb.com/rooms/21917882?s=51" rel="nofollow">
          T2 hypercentre Capitole/St-Sernin, quiet &amp; bright
        </a>
      </div>
    );
  }
}

export default AirbnbComponent;
