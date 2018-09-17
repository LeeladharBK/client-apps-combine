import React from "react";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
// Link is used to navigate similar  to an anchor tag
import { Link } from "react-router-dom";

export default class HeaderNavigation extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">React Projects</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            <Link to="/weather">Weather</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to="/youtube">Youtube App</Link>
          </NavItem>
          <NavItem eventKey={3} href="#">
            <Link to="/books">BookList App</Link>
          </NavItem>
          <NavDropdown eventKey={3} title="Documentation" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>React</MenuItem>
            <MenuItem eventKey={3.2}>Redux</MenuItem>
            <MenuItem eventKey={3.3}>React Router</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>React-Bootstrap</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

// <Navbar brand={"lalath"}>
//   {/* Nav content will go here */}
//   <Nav>
//     <NavItem eventKey={1} href="#">
//       Link
//     </NavItem>
//     <NavItem eventKey={2} href="#">
//       Link
//     </NavItem>
//   </Nav>
// </Navbar>
