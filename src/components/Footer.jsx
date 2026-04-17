import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">

                {/* Logo + About */}
                <div>
                    <h3 className="footer-logo">
                        Interior<span>Design</span>
                    </h3>
                    <p className="footer-text">
                        We create modern, elegant and luxury interior spaces
                        for homes and offices since 2014.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="footer-heading">Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* Services */}
                <div>
                    <h4 className="footer-heading">Services</h4>
                    <p className="footer-text">Interior Design</p>
                    <p className="footer-text">Home Decoration</p>
                    <p className="footer-text">Office Setup</p>
                    <p className="footer-text">Furniture Design</p>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="footer-heading">Contact</h4>
                    <p className="footer-text">📍 Kolkata, India</p>
                    <p className="footer-text">📞 +91 98765 43210</p>
                    <p className="footer-text">✉️ info@interiordesign.com</p>
                </div>

            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Interior Design. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;