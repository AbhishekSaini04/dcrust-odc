import React from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import BackToTop from './BackToTop';
import '../styles/Footer.css';
import logo from '../assets/images/odc-logo2.png';
const Footer = () => {
  return (
    <footer className="footer">
      <BackToTop />
      
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={logo} alt="DCRUST ODC Logo" className="footer-logo" />
            <div className="footer-brand-text">
              <h3>DCRUST ODC</h3>
              <p>Open Source Developers Community</p>
            </div>
          </div>

          <div className="footer-social">
            <a href="https://github.com/dcrustodc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://instagram.com/dcrustodc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/dcrustodc" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/company/dcrustodc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#team">Team</a>
          <a href="/#events">Events</a>
          {/* <a href="/#projects">Projects</a> */}
          <a href="/#faq">FAQ</a>
          {/* <a href="/blog">Blog</a> */}
          {/* <a href="/resources">Resources</a> */}
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DCRUST ODC. All rights reserved.</p>
          <p className="footer-tagline">Empowering Developers, Building Community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 