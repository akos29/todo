import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button type="button" onClick={toggleNav}>{navbarOpen ? <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} /> : <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />}</button>
      <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
        <li><NavLink to="/" activeClassName="active-link" onClick={() => closeMenu()} exact> Home </NavLink></li>
        <li><NavLink to="about" activeClassName="active-link" onClick={() => closeMenu()} exact> About </NavLink></li>
      </ul>
    </nav>
  );
};
export default Navbar;
