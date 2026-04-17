import React, { useState } from 'react';
import products, { categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    // Check if products data exists
    if (!products || products.length === 0) {
        return (
            <div style={{ marginTop: '100px', textAlign: 'center' }}>
                <h2>No products found</h2>
            </div>
        );
    }

    // Filter products based on category and search
    const filteredProducts = products.filter(product => {
        if (!product) return false;
        const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchSearch = searchTerm === '' ||
            (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (product.brand && product.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (product.bestFor && product.bestFor.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchCategory && matchSearch;
    });

    // Pagination Logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleFilterChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const clearSearch = () => {
        setSearchTerm('');
        setCurrentPage(1);
    };

    return (
        <>
            {/* Breadcrumb Section */}
            <section className="breadcrumb">
                <div className="container">
                    <h2>Our Products</h2>
                    <p>Home / Our Products</p>
                </div>
            </section>

            {/* Products Content */}
            <section className="section products-page">
                <div className="container">

                    {/* Header */}
                    <div className="products-header">
                        <h2>
                            Premium <span>Quality Products</span>
                        </h2>
                        <p>
                            Explore our wide range of premium plywood, block boards, and accessories
                            for all your interior needs.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="search-section">
                        <div className="search-wrapper">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                placeholder="Search by product name, brand, or best for..."
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

                    {/* Category Filter */}
                    <div className="filter-section">
                        {categories && categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => handleFilterChange(cat)}
                                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            >
                                {cat}
                                {selectedCategory === cat && <span className="filter-count">✓</span>}
                            </button>
                        ))}
                    </div>

                    {/* Results Count */}
                    <div className="results-bar">
                        <p className="results-count">
                            {filteredProducts.length > 0
                                ? `Showing ${indexOfFirstProduct + 1}-${Math.min(indexOfLastProduct, filteredProducts.length)} of ${filteredProducts.length} products`
                                : 'No products found'}
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="products-grid">
                        {currentProducts.map((product, index) => (
                            <ProductCard key={product.id || index} product={product} />
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="pagination">
                            <button
                                onClick={goToPrevPage}
                                className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                                disabled={currentPage === 1}
                            >
                                ← Previous
                            </button>

                            <div className="pagination-numbers">
                                {[...Array(totalPages).keys()].map(number => (
                                    <button
                                        key={number + 1}
                                        onClick={() => paginate(number + 1)}
                                        className={`pagination-number ${currentPage === number + 1 ? 'active' : ''}`}
                                    >
                                        {number + 1}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={goToNextPage}
                                className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                                disabled={currentPage === totalPages}
                            >
                                Next →
                            </button>
                        </div>
                    )}

                    {/* No Results */}
                    {filteredProducts.length === 0 && (
                        <div className="no-results">
                            <span className="no-results-icon">🔍</span>
                            <h3>No products found</h3>
                            <p>Try different search term or category</p>
                        </div>
                    )}

                </div>
            </section>
        </>
    );
};

export default Products;