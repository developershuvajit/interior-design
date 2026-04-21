import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [categoriesDropdown, setCategoriesDropdown] = useState(false);
    const [showEnquiryModal, setShowEnquiryModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
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
        setCategoriesDropdown(false);
        setOpen(false);
    };

    const handleEnquirySubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! We will contact you soon.`);
        setShowEnquiryModal(false);
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-container">
                    <div className="top-bar-contact">
                        <span className="top-bar-phone">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            +91 1234 567890
                        </span>
                        <span className="top-bar-email">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            info@interiordesign.com
                        </span>
                    </div>
                    <div className="top-bar-social">
                        <button className="social-icon" onClick={() => window.open('https://facebook.com', '_blank')}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </button>
                        <button className="social-icon" onClick={() => window.open('https://instagram.com', '_blank')}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </button>
                        <button className="social-icon" onClick={() => window.open('https://linkedin.com', '_blank')}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar">
                <div className="container navbar-container">
                    <h2 className="navbar-logo">
                        <Link to="/">CLAP4<span>MAGIC</span></Link>
                    </h2>

                    {/* Desktop Navigation */}
                    <div className="navbar-desktop">
                        <ul className="navbar-links">
                            <li>
                                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                                    Home
                                </Link>
                            </li>

                            <li className="dropdown" onMouseEnter={() => setCategoriesDropdown(true)} onMouseLeave={() => setCategoriesDropdown(false)}>
                                <span className="dropdown-trigger">
                                    Our Products <span className="dropdown-arrow">▼</span>
                                </span>
                                {categoriesDropdown && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/products" onClick={() => setCategoriesDropdown(false)}>All Products</Link></li>
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

                            {navItems.filter(item => item.path !== '/').map(item => (
                                <li key={item.path}>
                                    <Link to={item.path} className={location.pathname === item.path ? "active" : ""}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <form onSubmit={handleSearch} className="navbar-search">
                            <input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <button type="submit">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="10" cy="10" r="7" />
                                    <line x1="21" y1="21" x2="15" y2="15" />
                                </svg>
                            </button>
                        </form>

                        <button className="enquiry-btn" onClick={() => setShowEnquiryModal(true)}>
                            Get Enquiry
                        </button>
                    </div>

                    <button className="navbar-mobile-btn" onClick={() => setOpen(!open)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className={`navbar-mobile ${open ? 'active' : ''}`}>
                    <form onSubmit={handleSearch} className="mobile-search">
                        <input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <button type="submit">Search</button>
                    </form>
                    <ul className="mobile-links">
                        <li><Link to="/" onClick={() => setOpen(false)} className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                        <li className="mobile-dropdown">
                            <div className="mobile-dropdown-title">Our Products</div>
                            <ul className="mobile-dropdown-menu">
                                <li><Link to="/products" onClick={() => setOpen(false)}>All Products</Link></li>
                                {productCategories.map(cat => (
                                    <li key={cat.name}>
                                        <button onClick={() => { handleCategoryClick(cat.path); setOpen(false); }}>
                                            {cat.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        {navItems.filter(item => item.path !== '/').map(item => (
                            <li key={item.path}>
                                <Link to={item.path} onClick={() => setOpen(false)} className={location.pathname === item.path ? "active" : ""}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="mobile-enquiry-btn" onClick={() => { setShowEnquiryModal(true); setOpen(false); }}>
                        Get Enquiry
                    </button>
                    <div className="mobile-contact">
                        <p>+91 1234 567890</p>
                        <p>info@interiordesign.com</p>
                    </div>
                </div>
            </nav>

            {showEnquiryModal && (
                <div className="modal-overlay" onClick={() => setShowEnquiryModal(false)}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowEnquiryModal(false)}>✕</button>
                        <h3 className="modal-title">Get Enquiry</h3>
                        <p className="modal-subtitle">We'll get back to you within 24 hours</p>
                        <form onSubmit={handleEnquirySubmit}>
                            <input type="text" placeholder="Your Name" className="modal-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                            <input type="tel" placeholder="Phone Number" className="modal-input" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                            <input type="email" placeholder="Email Address" className="modal-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                            <textarea placeholder="Your Message" className="modal-textarea" rows="3" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                            <button type="submit" className="modal-submit">Submit Enquiry</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;