import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/services', name: 'Services' },
        { path: '/products', name: 'Products' },
        { path: '/contact', name: 'Contact' }
    ];

    return (
        <nav className="nav">
            <div className="container nav-wrapper">
                <h2 className="logo">
                    <Link to="/">Interior<span>Design</span></Link>
                </h2>

                <div className="menu" onClick={() => setOpen(!open)}>☰</div>

                <ul className={open ? "nav-links active" : "nav-links"}>
                    {navItems.map(item => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={location.pathname === item.path ? "active" : ""}
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;