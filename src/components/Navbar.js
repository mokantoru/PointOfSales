import React from "react";
import "../css/navbar.css";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <div onClick={this.props.onClickBurger} className="burger">
          <div className="divburger1"></div>
          <div className="divburger2"></div>
          <div className="divburger3"></div>
        </div>
        <NavbarBrand href="/">
          mokantoru
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        {/* <Collapse isOpen={this.state.isOpen} navbar> */}
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
              </NavLink>
          </NavItem>
          {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
        </Nav>
        {/* </Collapse> */}
      </Navbar>

    );
  }
}

export default NavBar;
