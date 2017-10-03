import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export default class NewNavbar extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            {this.props.brand}
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="http://aaronmassey.pro">Home</NavItem>
            <NavItem href="https://medium.com/@aaronmassey45">Blog</NavItem>
            <NavItem href="https://github.com/aaronmassey45">Github</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
