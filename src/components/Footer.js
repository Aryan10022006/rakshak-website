import React from 'react';
import '../styles/Footer.css';
const logo = "/images/rakshak_logo.gif"; // Adjust path as necessary
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Team Rakshak Logo" className="footer-logo" />
            <p className="footer-description">
              Team Rakshak is dedicated to innovation and safety solutions. Based at IIT Bombay, we strive to make a positive impact through technology.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/join">Join Us</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul>
              <li><a href="mailto:contact@teamrakshak.com">contact@teamrakshak.com</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
              <li>IIT Bombay, Mumbai, India</li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">Stay Updated</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" aria-label="Email" />
              <button type="submit">Subscribe</button>
            </form>
            <div className="footer-social">
              <a href="https://linkedin.com/teamrakshak" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com/teamrakshak" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Team Rakshak, IIT Bombay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
