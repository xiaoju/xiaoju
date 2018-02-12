import React, { Component } from 'react';

class JQueryExample extends Component {
  componentDidMount() {
    window.$(this.refs.list).fadeOut();
  }

  render() {
    return (
      <ul ref="list">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    );
  }
}

export default JQueryExample;
