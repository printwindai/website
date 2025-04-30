import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navigation-menu'>
      <div className='nav-left'>
        <Link to="/" className='logo'>PrintWindAI</Link>
      </div>
      <div className='nav-right'>
        <ol>
          <li><Link to="/Product">Product</Link></li>
          <li><Link to="/About">Our Team</Link></li>
          <li><Link to="/Contact">Contact Sales</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Careers">Careers</Link></li>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
