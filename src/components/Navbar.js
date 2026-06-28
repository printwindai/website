import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src="/images/solarroll-logo.png" alt="SolarRoll" className="navbar__logo-img" />
          <span className="navbar__logo-text">PrintWind<span>AI</span></span>
        </Link>

        <button
          className="navbar__hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links${open ? ' open' : ''}`}>
          <li><Link to="/product"    className={isActive('/product')    ? 'active' : ''}>Product</Link></li>
          <li><Link to="/about"      className={isActive('/about')      ? 'active' : ''}>Our Team</Link></li>
          <li><Link to="/blog"       className={isActive('/blog')       ? 'active' : ''}>Blog</Link></li>
          <li><Link to="/careers"    className={isActive('/careers')    ? 'active' : ''}>Careers</Link></li>
        </ul>

        <Link to="/contact" className="btn btn--primary navbar__cta">Contact Sales</Link>
      </div>
    </nav>
  );
}

export default Navbar;
