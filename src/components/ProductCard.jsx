import React, { useState } from 'react';

const ProductCard = ({ product }) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', quantity: '' });

    // যদি product undefined হয় তাহলে কিছু দেখাবেন না
    if (!product) {
        return null;
    }

    const handleBookNow = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! We will contact you soon.`);
        setShowModal(false);
        setFormData({ name: '', phone: '', quantity: '' });
    };

    // ইমেজ এরর হ্যান্ডলিং
    const handleImageError = (e) => {
        e.target.style.display = 'none';
        const placeholder = e.target.nextSibling;
        if (placeholder) {
            placeholder.style.display = 'flex';
        }
    };

    return (
        <>
            <div className="product-card">
                <div className="product-image">
                    {/* ইমেজ দেখানো */}
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-img"
                            onError={handleImageError}
                        />
                    ) : null}

                    {/* প্লেসহোল্ডার (ইমেজ না থাকলে বা লোড না হলে) */}
                    <div
                        className="image-placeholder"
                        style={{ display: product.image ? 'none' : 'flex' }}
                    >
                        <span>🖼️</span>
                        <p>Image Coming Soon</p>
                    </div>

                    {/* ব্যাজ */}
                    <div className="product-badge">{product.category || 'General'}</div>
                </div>

                <div className="product-content">
                    <h3 className="product-title">{product.name || 'Product Name'}</h3>
                    <p className="product-brand">{product.brand || 'Brand'}</p>
                    <div className="product-details">
                        <span className="product-thickness">📏 {product.thickness || 'N/A'}</span>
                        <span className="product-bestfor">🎯 {product.bestFor || 'General'}</span>
                    </div>
                    <div className="product-price-wrapper">
                        <span className="product-price">₹{product.price || 0}</span>
                        <span className="product-perunit">/sqft</span>
                    </div>
                    <button className="product-btn" onClick={handleBookNow}>
                        Book Now →
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={handleClose}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleClose}>✕</button>
                        <h3 className="modal-title">Book This Product</h3>
                        <p className="modal-product">{product.name} - ₹{product.price}/sqft</p>
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

export default ProductCard;