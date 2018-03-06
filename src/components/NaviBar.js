import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import iconXiaoju_passive from '../pictures/iconXiaoju.svg';
import iconXiaoju_hover from '../pictures/iconXiaoju_hover.svg';

class NaviBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: this.props.match.params.activeKey
    };
  }

  handleSelect = (e, { activeKey }) => this.setState({ activeKey: activeKey });

  render() {
    const { activeKey } = this.state;
    return (
      <Navbar inverse collapseOnSelect style={{ marginBottom: '0.3em' }}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" className="logo_swapping">
              <img
                className="logo_passive"
                src={iconXiaoju_passive}
                height="50"
                alt="logo"
              />
              <img
                className="logo_hover"
                src={iconXiaoju_hover}
                height="50"
                alt="logo"
              />xiaoju.io
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* <Nav /> */}
          <Nav pullRight activeKey={activeKey} onSelect={this.handleSelect}>
            <NavItem eventKey="portfolio" href="/portfolio">
              Portfolio
            </NavItem>
            <NavItem eventKey="contact" href="/contact">
              Contact
            </NavItem>
            <Nav />
            <Nav />
            <Nav />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NaviBar;
