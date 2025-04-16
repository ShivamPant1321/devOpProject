import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };
  
  return (
    <div className="product-card card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
          {!product.inStock && <div className="out-of-stock">Out of Stock</div>}
        </div>
        
        <div className="product-card-content">
          <div className="product-category">{product.category}</div>
          <h3 className="product-card-title">{product.name}</h3>
          
          <div className="product-rating">
            <FaStar className="star-icon" />
            <span>{product.rating}</span>
          </div>
          
          <div className="product-card-price">${product.price.toFixed(2)}</div>
          
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
