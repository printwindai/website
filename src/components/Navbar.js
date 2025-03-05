import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navigation-menu'>
      <h1 className='header'>PrintWindAI</h1>
      <ol>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">Our Team</Link></li>
        <li><Link to="/Blog">Blogs</Link></li>
        <li><Link to="/Contact">Contact Sales</Link></li>
        <li><Link to="/Support">Get Support</Link></li>
        <li><Link to="/Investors">Investors</Link></li>
        <li><Link to="/Careers">Careers</Link></li>

      </ol>
    </div>
  );
}

export default Navbar;