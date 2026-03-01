import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Architectural Firm</h3>
                        <p className="footer-description">
                            Creating innovative and sustainable architectural solutions for modern living.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact</h4>
                        <ul className="footer-contact">
                            <li>Email: info@architecturalfirm.com</li>
                            <li>Phone: +1 (555) 123-4567</li>
                            <li>Address: 123 Design Street, City, State 12345</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Follow Us</h4>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Instagram">Instagram</a>
                            <a href="#" className="social-link" aria-label="LinkedIn">LinkedIn</a>
                            <a href="#" className="social-link" aria-label="Twitter">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Architectural Firm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
