import React from 'react';
import { Link } from 'react-router-dom';
import logoSm from '../../assets/logo.svg';
import { useState } from 'react';
import { Navbar } from "flowbite-react";


function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar fluid rounded className='z-50 bg-purple-700'>
      <Navbar.Brand as={Link} href="/">
        <img src={logoSm} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">3ACM</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;