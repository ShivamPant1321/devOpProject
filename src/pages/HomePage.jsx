import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './HomePage.css';

const HomePage = () => {
  // Get first 4 products for featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to E-Shop</h1>
          <p>Discover amazing products at unbeatable prices</p>
          <Link to="/products" className="btn btn-primary hero-button">
            Shop Now <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <Link to="/products" className="view-all">
            View All <FaArrowRight className="arrow-icon" />
          </Link>
        </div>
        <div className="categories-grid">
          {categories.filter(cat => cat !== "All").map((category, index) => (
            <Link 
              to={`/products?category=${category}`} 
              className="category-card" 
              key={index}
            >
              <div className="category-name">{category}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-products">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/products" className="view-all">
            View All <FaArrowRight className="arrow-icon" />
          </Link>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-card">
          <div className="promo-content">
            <h3>Summer Sale</h3>
            <p>Up to 50% off on selected items</p>
            <Link to="/products" className="btn btn-outline">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="promo-card">
          <div className="promo-content">
            <h3>New Arrivals</h3>
            <p>Check out our latest products</p>
            <Link to="/products" className="btn btn-outline">
              Discover
            </Link>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-content">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest updates on new products and upcoming sales</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
