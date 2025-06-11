import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/planes', label: 'Planes' },
    { path: '/subsystems', label: 'Subsystems' },
    { path: '/team', label: 'Team' },
    { path: '/competitions', label: 'Competitions' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const navbarClass = isHomePage 
    ? `navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`
    : 'navbar navbar-colored';

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        <div className="navbar-content">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="navbar-brand"
          >
            <Link to="/" className="brand-link">
              <img
                src="/images/rakshak_logo.gif"
                alt="Team Rakshak Logo"
                className="navbar-logo"
              />
              <span className={`brand-name ${scrolled && isHomePage ? 'scrolled' : ''}`}>
                Team Rakshak
              </span>
            </Link>
          </motion.div>

          <div className="navbar-links-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''} ${
                  scrolled && isHomePage ? 'scrolled' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`navbar-toggle ${scrolled && isHomePage ? 'scrolled' : ''}`}
            aria-label="Toggle navigation"
          >
            <span className={`toggle-icon ${isOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        <div className={`navbar-mobile ${isOpen ? 'show' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link-mobile ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
