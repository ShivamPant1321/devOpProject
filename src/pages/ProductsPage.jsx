import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaFilter, FaTimes } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { products, categories, getProductsByCategory } from '../data/products';
import './ProductsPage.css';

const ProductsPage = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Parse query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory('All');
    }
  }, [location]);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortOption) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-a-z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-z-a':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting remains as is
        break;
    }
    
    setFilteredProducts(result);
  }, [activeCategory, sortOption, priceRange, searchTerm]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Products</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <button className="filter-toggle" onClick={toggleFilters}>
          {showFilters ? <FaTimes /> : <FaFilter />}
          Filters
        </button>
      </div>

      <div className="products-layout">
        <div className={`filters-sidebar ${showFilters ? 'active' : ''}`}>
          <div className="filter-section">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    className={activeCategory === category ? 'active' : ''}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-range-control">
              <span>${priceRange[0]}</span>
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="price-range-slider"
              />
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <div className="filter-section">
            <h3>Sort By</h3>
            <select
              className="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-a-z">Name: A-Z</option>
              <option value="name-z-a">Name: Z-A</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="products-content">
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <h2>No products found</h2>
              <p>Try adjusting your filters or search term</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
