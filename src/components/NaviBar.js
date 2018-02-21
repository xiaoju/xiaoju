import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo_passive from '../pictures/logo.svg';
import logo_hover from '../pictures/logo_hover.svg';

function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

class NaviBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect style={{ marginBottom: '0.3em' }}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" className="logo_swapping">
              <img
                className="logo_passive"
                src={logo_passive}
                height="50"
                alt="logo"
              />
              <img
                className="logo_hover xj-logo"
                src={logo_hover}
                height="50"
                alt="logo"
              />xiaoju.io
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav />
          <Nav pullRight activeKey={1} onSelect={handleSelect}>
            <NavItem eventKey={1} href="/portfolio">
              Github portfolio
            </NavItem>
            <NavItem eventKey={2} href="/contact">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NaviBar;
