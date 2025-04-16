import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowRight, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };
  
  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-content">
          <FaShoppingCart className="empty-cart-icon" />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-headers">
            <div className="cart-header-product">Product</div>
            <div className="cart-header-price">Price</div>
            <div className="cart-header-quantity">Quantity</div>
            <div className="cart-header-total">Total</div>
            <div className="cart-header-actions"></div>
          </div>
          
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;
            
            return (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-product">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <Link to={`/product/${item.id}`} className="cart-item-name">
                      {item.name}
                    </Link>
                    <div className="cart-item-category">{item.category}</div>
                  </div>
                </div>
                
                <div className="cart-item-price">${item.price.toFixed(2)}</div>
                
                <div className="cart-item-quantity">
                  <div className="quantity-selector">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="cart-item-total">${itemTotal.toFixed(2)}</div>
                
                <div className="cart-item-actions">
                  <button 
                    className="remove-item-btn"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="cart-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          
          <div className="summary-row total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          
          <Link to="/checkout" className="btn btn-primary checkout-btn">
            Proceed to Checkout <FaArrowRight />
          </Link>
          
          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
