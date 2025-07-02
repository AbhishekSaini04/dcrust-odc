import React, { useEffect, useRef } from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaLinkedin, FaGithub,FaDiscord } from 'react-icons/fa';
import logo from "../assets/images/odc-logo2.png"; // Uncomment when you have the logo


const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('footer-in-view');
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <footer ref={footerRef} className="footer-outer">
            <div className="footer-container">
                <div className="footer-col">
                    <div className="footer-logo-section">
                        <div className="footer-logo">
                            {/* Option 1: If you have logo image, uncomment this */}
                            <img src={logo} alt="dcrust-logo" className="footer-logo-rotate" />
                            <h2 className="footer-title footer-animate-left">DCRUSTODC</h2>
                            {/* <h3 className="footer-heading footer-animate-right">DCRUSTODC</h3> */}
                            
                            {/* Option 2: Text logo placeholder - remove when you have the image */}
                           
                        </div>
                       
                    </div>
                    <p className="footer-desc footer-animate-left">
                        An open source platform by students of DCRUST for welfare of the open source community
                    </p>
                </div>
                
                <div className="footer-col">
                    <h3 className="footer-heading footer-animate-right">About</h3>
                    <ul className="footer-list footer-animate-right">
                        <li><a href="#team">Our Team</a></li>
                        <li><a href="#resources">Resources</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#certificates">Verify Certificates</a></li>
                    </ul>
                </div>
                
                <div className="footer-col">
                    <h3 className="footer-heading footer-animate-left">Happenings</h3>
                    <ul className="footer-list footer-animate-left">
                        <li><a href="#events">Events</a></li>
                        <li><a href="#innovations">Innovations</a></li>
                        <li><a href="#opensource">Open Sources</a></li>
                    </ul>
                </div>
                
                <div className="footer-col">
                    <h3 className="footer-heading footer-animate-right">Follow Us</h3>
                    <div className="footer-icons footer-animate-right">
                        <a 
                            href="https://instagram.com/dcrustodc" 
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a 
                            href="https://linkedin.com/company/dcrustodc" 
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a 
                            href="https://github.com/dcrustodc" 
                            aria-label="Github"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a 
                            href="https://github.com/dcrustodc" 
                            aria-label="Github"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaDiscord size={24} />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                © 2025 DCRUST ODC. All rights reserved.
            </div>
            
            {/* <div className="footer-marquee">
                <span>
                    Welcome to DCRUST ODC - Open Source Community for Students &nbsp; • &nbsp; 
                    Welcome to DCRUST ODC - Open Source Community for Students &nbsp; • &nbsp; 
                    Welcome to DCRUST ODC - Open Source Community for Students
                </span>
            </div> */}
        </footer>
    );
};

export default Footer;