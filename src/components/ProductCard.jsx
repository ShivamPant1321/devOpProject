import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaEye, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  
  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };
  
  // Calculate discount if original price exists
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
  
  // Determine if product is new (example logic: consider as new if id > 6)
  const isNew = product.id > 6;
  
  return (
    <div className="product-card card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
          {!product.inStock && <div className="out-of-stock">Out of Stock</div>}
          {isNew && <div className="product-badge">New</div>}
          
          <button 
            className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
            onClick={toggleWishlist}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {isWishlisted ? <FaHeart /> : <FaRegHeart />}
          </button>
          
          <div className="quick-view-btn">
            <FaEye /> Quick View
          </div>
        </div>
        
        <div className="product-card-content">
          <div className="product-category">{product.category}</div>
          <h3 className="product-card-title">{product.name}</h3>
          
          <div className="product-rating">
            <FaStar className="star-icon" />
            <span>{product.rating}</span>
          </div>
          
          <div className="product-card-price">
            {hasDiscount && (
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            )}
            <span>${product.price.toFixed(2)}</span>
            {hasDiscount && (
              <span className="discount-badge">-{discountPercentage}%</span>
            )}
          </div>
          
          <div className="product-card-actions">
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <FaShoppingCart />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
