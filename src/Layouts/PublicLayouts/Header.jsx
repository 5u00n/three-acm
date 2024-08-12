import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoSm from '../../assets/logo.svg';
import { useState } from 'react';
import { Navbar } from "flowbite-react";


function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar fluid rounded className='z-50 bg-gradient-to-b from-purple-800 to-[#00000000] bg-transparent text-white'>
      <Navbar.Brand as={Link} href="/">
        <img src={logoSm} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold ">3ACM</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className=' text-white'>
        <NavLink to="/about" className='text-white'>About</NavLink>
        <NavLink to="/contact" className='text-white'>Contact</NavLink>
        <NavLink to="/mission-trips" className='text-white'>Mission Trips</NavLink>
        <NavLink to="/projects" className='text-white'>Projects</NavLink>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;