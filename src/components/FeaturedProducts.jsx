import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const FeaturedProducts = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({ name: '', phone: '', quantity: '' });

    // Filter products by category
    let filteredProducts = products.filter(product => {
        if (selectedCategory === 'All') return true;
        return product.category === selectedCategory;
    });

    // Show only 8 products
    filteredProducts = filteredProducts.slice(0, 8);

    // Categories
    const categories = ['All', 'Premium Plywood', 'Block Board', 'Standard Plywood', 'Furniture Grade'];

    const handleBookNow = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedProduct(null);
        setFormData({ name: '', phone: '', quantity: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! We will contact you soon about ${selectedProduct.name}.`);
        handleClose();
    };

    return (
        <>
            <section className="section featured-products">
                <div className="container">
                    {/* Header */}
                    <div className="section-header">
                        <h2 className="section-title">
                            Featured <span>Products</span>
                        </h2>
                        <p className="section-subtitle">
                            Discover our most popular and premium quality products
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="home-filter-section">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`home-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid - 4 per row */}
                    <div className="home-products-grid">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="home-product-card">
                                <div className="home-product-image">
                                    {product.image ? (
                                        <img src={product.image} alt={product.name} />
                                    ) : (
                                        <div className="home-image-placeholder">
                                            No Image
                                        </div>
                                    )}
                                    <div className="home-product-badge">{product.category}</div>
                                </div>
                                <div className="home-product-content">
                                    <h3 className="home-product-title">{product.name}</h3>
                                    <p className="home-product-brand">{product.brand}</p>
                                    <div className="home-product-details">
                                        <span className="home-product-size">{product.thickness}</span>
                                    </div>
                                    <div className="home-product-price">
                                        ₹{product.price} <span>/sqft</span>
                                    </div>
                                    <button
                                        className="home-product-btn"
                                        onClick={() => handleBookNow(product)}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="home-view-all">
                        <Link to="/products">
                            <button className="home-view-all-btn">
                                View All Products
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Modal - Same as Product Page */}
            {showModal && selectedProduct && (
                <div className="modal-overlay" onClick={handleClose}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleClose}>✕</button>
                        <h3 className="modal-title">Book This Product</h3>
                        <p className="modal-product">{selectedProduct.name} - ₹{selectedProduct.price}/sqft</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="modal-input"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="modal-input"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                            />
                            <input
                                type="number"
                                placeholder="Quantity (sqft)"
                                className="modal-input"
                                value={formData.quantity}
                                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                required
                            />
                            <button type="submit" className="modal-submit">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default FeaturedProducts;