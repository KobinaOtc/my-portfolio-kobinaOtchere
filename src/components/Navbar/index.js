import React from "react";
import Navbar from "./Navbar.js";

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
    this.toggler = this.toggler.bind(this);
  }
  toggler() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }))
  }
  render() {
    return (
      <div>
        <Navbar {...this.props} toggler={this.toggler} isOpen={this.state.isOpen}/>
      </div>
    )
  }
}

export default NavbarContainer;
