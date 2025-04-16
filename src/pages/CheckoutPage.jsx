import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaCreditCard, FaPaypal } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });
  
  // Redirect to home if cart is empty
  if (cartItems.length === 0) {
    navigate('/');
    return null;
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate order processing
    alert('Thank you for your order! Your purchase was successful.');
    
    // Clear cart and redirect to home
    clearCart();
    navigate('/');
  };
  
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Contact Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="form-section">
            <h2>Shipping Address</h2>
            <div className="form-group">
              <label htmlFor="address">Street Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="IN">India</option>
              </select>
            </div>
          </div>
          
          <div className="form-section">
            <h2>Payment Method</h2>
            <div className="payment-methods">
              <div 
                className={`payment-method ${paymentMethod === 'credit-card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('credit-card')}
              >
                <FaCreditCard className="payment-icon" />
                <span>Credit Card</span>
              </div>
              
              <div 
                className={`payment-method ${paymentMethod === 'paypal' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('paypal')}
              >
                <FaPaypal className="payment-icon" />
                <span>PayPal</span>
              </div>
            </div>
            
            {paymentMethod === 'credit-card' && (
              <div className="credit-card-form">
                <div className="form-group">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="XXXX XXXX XXXX XXXX"
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiry">Expiry Date</label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="XXX"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="checkout-actions">
            <Link to="/cart" className="back-to-cart">
              Back to Cart
            </Link>
            <button type="submit" className="btn btn-primary place-order-btn">
              <FaLock /> Place Order
            </button>
          </div>
        </form>
        
        <div className="order-summary">
          <h2>Order Summary</h2>
          
          <div className="order-items">
            {cartItems.map((item) => (
              <div className="order-item" key={item.id}>
                <div className="order-item-details">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <div className="order-item-name">{item.name}</div>
                    <div className="order-item-quantity">Qty: {item.quantity}</div>
                  </div>
                </div>
                <div className="order-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-totals">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="summary-row">
              <span>Taxes</span>
              <span>${(totalPrice * 0.1).toFixed(2)}</span>
            </div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>${(totalPrice * 1.1).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
