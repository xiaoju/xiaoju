import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../pictures/logo.png';

class NaviBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img
                src={logo}
                // width="40"
                height="60"
                alt="logo"
              />xiaoju.io
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav />
          <Nav pullRight>
            <NavItem eventKey={1} href="/portfolio">
              Portfolio
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
