import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const FeaturedProducts = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // শুধুমাত্র প্রথম 6 টি প্রোডাক্ট দেখাবে (হোম পেজের জন্য)
    let filteredProducts = products.filter(product => {
        if (selectedCategory === 'All') return true;
        return product.category === selectedCategory;
    });

    // শুধু 6 টি প্রোডাক্ট দেখান
    filteredProducts = filteredProducts.slice(0, 6);

    // ইউনিক ক্যাটাগরি (শুধু প্রথম 4 টি)
    const categories = ['All', 'Premium Plywood', 'Block Board', 'Standard Plywood'];

    return (
        <section className="section featured-products">
            <div className="container">
                {/* হেডার */}
                <div className="section-header">
                    <h2 className="section-title">
                        Featured <span>Products</span>
                    </h2>
                    <p className="section-subtitle">
                        Discover our most popular and premium quality products
                    </p>
                </div>

                {/* ক্যাটাগরি ফিল্টার (হোম পেজের জন্য ছোট) */}
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

                {/* প্রোডাক্ট গ্রিড */}
                <div className="home-products-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="home-product-card">
                            <div className="home-product-image">
                                {product.image ? (
                                    <img src={product.image} alt={product.name} />
                                ) : (
                                    <div className="home-image-placeholder">
                                        <span>🖼️</span>
                                    </div>
                                )}
                                <div className="home-product-badge">{product.category}</div>
                            </div>
                            <div className="home-product-content">
                                <h3 className="home-product-title">{product.name}</h3>
                                <p className="home-product-brand">{product.brand}</p>
                                <div className="home-product-price">
                                    ₹{product.price} <span>/sqft</span>
                                </div>
                                <Link to="/products">
                                    <button className="home-product-btn">View Details →</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* দেখুন বাটন */}
                <div className="home-view-all">
                    <Link to="/products">
                        <button className="home-view-all-btn">
                            View All Products →
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;