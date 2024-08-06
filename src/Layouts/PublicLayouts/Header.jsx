import React from 'react';
import { Link } from 'react-router-dom';
import logoSm from '../../assets/logo.svg';
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
            <div className="navbar-brand-box text-center text-info">

              <Link to="/" className="logo text-">
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
            <Navbar >
              <NavbarBrand href="/">Home</NavbarBrand>
              <NavbarBrand href="/contact">Contact</NavbarBrand>
              <NavbarBrand href="/about">About Us</NavbarBrand>
              <NavbarBrand href="https://www.facebook.com/3angelscallministry/"><i className=' mdi mdi-facebook'></i></NavbarBrand>
            </Navbar>
          </div>
        </div>
      </header>


    </React.Fragment>
  )
}

export default Header;