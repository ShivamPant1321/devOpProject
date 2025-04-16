import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaArrowLeft, FaCheck } from 'react-icons/fa';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Get product details
    const foundProduct = getProductById(id);
    setProduct(foundProduct);
    
    // Reset quantity when product changes
    setQuantity(1);
    
    // Get related products (same category but different id)
    if (foundProduct) {
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleAddToCart = () => {
    if (product && product.inStock) {
      // Add product to cart with selected quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  if (!product) {
    return (
      <div className="loading">
        <h2>Loading product details...</h2>
      </div>
    );
  }
  
  return (
    <div className="product-detail-page">
      <Link to="/products" className="back-button">
        <FaArrowLeft /> Back to Products
      </Link>
      
      <div className="product-detail">
        <div className="product-detail-image-container">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-detail-image" 
          />
        </div>
        
        <div className="product-detail-info">
          <div className="product-category">{product.category}</div>
          <h1 className="product-name">{product.name}</h1>
          
          <div className="product-rating">
            <FaStar className="star-icon" />
            <span>{product.rating}</span>
          </div>
          
          <div className="product-price">${product.price.toFixed(2)}</div>
          
          <div className="product-description">
            {product.description}
          </div>
          
          <div className="product-availability">
            {product.inStock ? (
              <span className="in-stock">
                <FaCheck /> In Stock
              </span>
            ) : (
              <span className="out-of-stock">
                Out of Stock
              </span>
            )}
          </div>
          
          {product.inStock && (
            <div className="product-actions">
              <div className="quantity-selector">
                <button 
                  onClick={decrementQuantity} 
                  className="quantity-btn"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button 
                  onClick={incrementQuantity} 
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
              
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          )}
          
          <div className="product-features">
            <h3>Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h2>Related Products</h2>
          <div className="products-grid">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
