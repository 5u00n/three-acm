import React from 'react';
import { Link } from 'react-router-dom';
import logoSm from '../../assets/cropped-3acm.png';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import { useState } from 'react';



function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <header id="page-topbar" style={{ backgroundColor: "#e3e8ec" }}>
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box text-center">

              <Link to="/" className="logo">
                <span className="logo-sm">
                  <img src={logoSm} alt="logo-sm-light" height="42" />
                </span>
                <span className="logo-lg">
                  <img src={logoSm} alt="logo-light" height="44" />
                  <label className="m-2 font-size-16">{"3ACM"}</label>
                </span>
              </Link>
            </div>
          </div>


          <div>
            <Navbar {...args}>
              <NavbarBrand href="/">reactstrap</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                      GitHub
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
              </Collapse>
            </Navbar>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header;