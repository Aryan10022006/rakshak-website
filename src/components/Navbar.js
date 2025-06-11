import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  // Handle page transitions
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Match this with CSS transition duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

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

  // Determine navbar class based on current page and scroll position
  const getNavbarClass = () => {
    const baseClass = 'navbar';
    if (isHomePage) {
      return `${baseClass} ${scrolled ? 'navbar--scrolled' : 'navbar--transparent'}`;
    }
    return `${baseClass} navbar--colored`;
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.nav 
      className={`${getNavbarClass()} ${isTransitioning ? 'navbar--transitioning' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar__container">
        <div className="navbar__content">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="navbar__brand"
          >
            <Link to="/" className="navbar__brand-link">
              <img
                src="/images/rakshak_logo.gif"
                alt="Team Rakshak Logo"
                className="navbar__logo"
              />
              <span className={`navbar__brand-name ${scrolled && isHomePage ? 'navbar__brand-name--scrolled' : ''}`}>
                Team Rakshak
              </span>
            </Link>
          </motion.div>

          <div className="navbar__links">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''} ${
                    scrolled && isHomePage ? 'navbar__link--scrolled' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`navbar__toggle ${scrolled && isHomePage ? 'navbar__toggle-icon--scrolled' : ''}`}
            aria-label="Toggle navigation"
            whileTap={{ scale: 0.95 }}
          >
            <span className={`navbar__toggle-icon ${isOpen ? 'navbar__toggle-icon--open' : ''}`}></span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`navbar__mobile ${isOpen ? 'navbar__mobile--show' : ''}`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 