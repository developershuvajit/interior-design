import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import products, { categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [sortBy, setSortBy] = useState('default');
    const productsPerPage = 9;

    // URL থেকে প্যারামিটার পড়ুন
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const categoryParam = params.get('category');
        const searchParam = params.get('search');

        if (categoryParam && categories.includes(categoryParam)) {
            setSelectedCategory(categoryParam);
        } else if (categoryParam) {
            setSelectedCategory('All');
        }

        if (searchParam) {
            setSearchTerm(searchParam);
        }
    }, [location.search]);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchTerm, priceRange, sortBy]);

    // URL আপডেট
    const updateURL = (category, search) => {
        const params = new URLSearchParams();
        if (category && category !== 'All') {
            params.set('category', category);
        }
        if (search) {
            params.set('search', search);
        }
        navigate(`/products${params.toString() ? `?${params.toString()}` : ''}`, { replace: true });
    };

    // ফিল্টার এবং সর্টিং
    let filteredProducts = products.filter(product => {
        if (!product) return false;
        const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchSearch = searchTerm === '' ||
            (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (product.brand && product.brand.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchPrice = product.price >= priceRange.min && product.price <= priceRange.max;
        return matchCategory && matchSearch && matchPrice;
    });

    // সর্টিং
    if (sortBy === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handleFilterChange = (category) => {
        setSelectedCategory(category);
        updateURL(category, searchTerm);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        updateURL(selectedCategory, value);
    };

    const clearSearch = () => {
        setSearchTerm('');
        updateURL(selectedCategory, '');
    };

    const handlePriceMinChange = (e) => {
        const value = Number(e.target.value);
        setPriceRange(prev => ({ ...prev, min: value }));
    };

    const handlePriceMaxChange = (e) => {
        const value = Number(e.target.value);
        setPriceRange(prev => ({ ...prev, max: value }));
    };

    if (!products || products.length === 0) {
        return (
            <div style={{ marginTop: '100px', textAlign: 'center' }}>
                <h2>No products found</h2>
            </div>
        );
    }

    return (
        <>
            {/* Breadcrumb Section */}
            <section className="breadcrumb">
                <div className="container">
                    <h2>Our Products</h2>
                    <p>Home / Products</p>
                </div>
            </section>

            <section className="section products-page">
                <div className="container products-layout">

                    {/* Sidebar */}
                    <aside className="products-sidebar">
                        {/* Categories */}
                        <div className="sidebar-widget">
                            <h3 className="sidebar-title">Categories</h3>
                            <ul className="category-list">
                                <li>
                                    <button
                                        onClick={() => handleFilterChange('All')}
                                        className={`category-link ${selectedCategory === 'All' ? 'active' : ''}`}
                                    >
                                        All Products
                                        <span className="category-count">{products.length}</span>
                                    </button>
                                </li>
                                {categories.filter(c => c !== 'All').map(cat => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => handleFilterChange(cat)}
                                            className={`category-link ${selectedCategory === cat ? 'active' : ''}`}
                                        >
                                            {cat}
                                            <span className="category-count">
                                                {products.filter(p => p.category === cat).length}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price Range */}
                        <div className="sidebar-widget">
                            <h3 className="sidebar-title">Price Range</h3>
                            <div className="price-range">
                                <div className="price-inputs">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        value={priceRange.min}
                                        onChange={handlePriceMinChange}
                                        className="price-input"
                                    />
                                    <span>to</span>
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        value={priceRange.max}
                                        onChange={handlePriceMaxChange}
                                        className="price-input"
                                    />
                                </div>
                                <div className="price-slider-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1000"
                                        value={priceRange.min}
                                        onChange={handlePriceMinChange}
                                        className="price-slider min-slider"
                                    />
                                    <input
                                        type="range"
                                        min="0"
                                        max="1000"
                                        value={priceRange.max}
                                        onChange={handlePriceMaxChange}
                                        className="price-slider max-slider"
                                    />
                                </div>
                                <div className="price-labels">
                                    <span>₹0</span>
                                    <span>₹1000+</span>
                                </div>
                            </div>
                        </div>

                        {/* Sort By */}
                        <div className="sidebar-widget">
                            <h3 className="sidebar-title">Sort By</h3>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="sort-select"
                            >
                                <option value="default">Default</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="name-asc">Name: A to Z</option>
                            </select>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="products-main">

                        {/* Search Bar */}
                        <div className="search-section">
                            <div className="search-wrapper">
                                <input
                                    type="text"
                                    placeholder="Search products by name or brand..."
                                    className="search-input"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                {searchTerm && (
                                    <button className="search-clear" onClick={clearSearch}>
                                        ✕
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="results-bar">
                            <p className="results-count">
                                {filteredProducts.length > 0
                                    ? `Showing ${indexOfFirstProduct + 1}-${Math.min(indexOfLastProduct, filteredProducts.length)} of ${filteredProducts.length} products`
                                    : 'No products found'}
                            </p>
                        </div>

                        {/* Products Grid - 3 per row */}
                        <div className="products-grid">
                            {currentProducts.map((product, index) => (
                                <ProductCard key={product.id || index} product={product} />
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="pagination">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>

                                <div className="pagination-numbers">
                                    {[...Array(totalPages).keys()].map(number => (
                                        <button
                                            key={number + 1}
                                            onClick={() => setCurrentPage(number + 1)}
                                            className={`pagination-number ${currentPage === number + 1 ? 'active' : ''}`}
                                        >
                                            {number + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </div>
                        )}

                        {/* No Results */}
                        {filteredProducts.length === 0 && (
                            <div className="no-results">
                                <h3>No products found</h3>
                                <p>Try different search term or category</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;