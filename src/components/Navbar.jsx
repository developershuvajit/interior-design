import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/services', name: 'Services' },
        { path: '/contact', name: 'Contact' }
    ];

    const productCategories = [
        { name: 'Premium Plywood', path: '/products?category=Premium%20Plywood' },
        { name: 'Block Board', path: '/products?category=Block%20Board' },
        { name: 'Door Grade', path: '/products?category=Door%20Grade' },
        { name: 'Furniture Grade', path: '/products?category=Furniture%20Grade' },
        { name: 'Standard Plywood', path: '/products?category=Standard%20Plywood' },
        { name: 'Budget Plywood', path: '/products?category=Budget%20Plywood' },
        { name: 'Accessories', path: '/products?category=Accessories' }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
            setSearchTerm('');
            setOpen(false);
        }
    };

    const handleCategoryClick = (categoryPath) => {
        navigate(categoryPath);
        setDropdownOpen(false);
        setOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                {/* Logo */}
                <h2 className="navbar-logo">
                    <Link to="/">
                        Interior<span>Design</span>
                    </Link>
                </h2>

                {/* Desktop Navigation */}
                <div className="navbar-desktop">
                    <ul className="navbar-links">
                        {navItems.map(item => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={location.pathname === item.path ? "active" : ""}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                        {/* Products Dropdown */}
                        <li className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                            <span className="dropdown-trigger">
                                Products <span className="dropdown-arrow">▼</span>
                            </span>
                            {dropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/products" onClick={() => setDropdownOpen(false)}>All Products</Link></li>
                                    <li className="dropdown-divider"></li>
                                    {productCategories.map(cat => (
                                        <li key={cat.name}>
                                            <button onClick={() => handleCategoryClick(cat.path)}>
                                                {cat.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="navbar-search">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">🔍</button>
                    </form>
                </div>

                {/* Mobile Menu Button */}
                <button className="navbar-mobile-btn" onClick={() => setOpen(!open)}>
                    ☰
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`navbar-mobile ${open ? 'active' : ''}`}>
                <ul className="mobile-links">
                    {navItems.map(item => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={location.pathname === item.path ? "active" : ""}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li className="mobile-dropdown">
                        <div className="mobile-dropdown-title">Products</div>
                        <ul className="mobile-dropdown-menu">
                            <li><Link to="/products" onClick={() => setOpen(false)}>All Products</Link></li>
                            {productCategories.map(cat => (
                                <li key={cat.name}>
                                    <button onClick={() => {
                                        handleCategoryClick(cat.path);
                                        setOpen(false);
                                    }}>
                                        {cat.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mobile-search">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">🔍 Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;