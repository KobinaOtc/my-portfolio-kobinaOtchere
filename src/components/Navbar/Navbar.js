import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Navbar.css"

let NavbarCustom = (props) => (
  <div>
    <Navbar color="faded" light expand="md" className="nav-custom">
      <NavbarBrand href="#">{props.brand}</NavbarBrand>
      <NavbarToggler onClick={props.toggler}/>
      <Collapse navbar isOpen={props.isOpen}>
        <Nav className="ml-auto" navbar>
          {props.links.map((item, index) => (
            <NavItem key={item.name + index}>
              <NavLink href={item.url}>{item.name}</NavLink>
            </NavItem>
          ))}

        </Nav>
      </Collapse>
    </Navbar>
  </div>
)

export default NavbarCustom;
