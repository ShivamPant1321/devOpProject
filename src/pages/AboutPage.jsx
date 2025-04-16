import React from 'react';
import { FaShippingFast, FaLock, FaHeadset, FaUndo, FaTrophy } from 'react-icons/fa';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About E-Shop</h1>
          <p>Your one-stop destination for quality products</p>
        </div>
      </div>
      
      <div className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, E-Shop began with a simple mission: to provide customers with high-quality products at competitive prices.
            What started as a small online store has grown into a comprehensive e-commerce platform serving thousands of happy customers worldwide.
          </p>
          <p>
            Our team is passionate about curating the best products across various categories, ensuring that every item we offer meets our strict quality standards.
            We believe in building long-term relationships with our customers through exceptional service and a personalized shopping experience.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="E-Shop Team" 
          />
        </div>
      </div>
      
      <div className="features-section">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaShippingFast className="feature-icon" />
            <h3>Fast Shipping</h3>
            <p>We deliver your orders within 2-5 business days, with free shipping on orders over $50.</p>
          </div>
          
          <div className="feature-card">
            <FaLock className="feature-icon" />
            <h3>Secure Payments</h3>
            <p>All transactions are processed securely using the latest encryption technology.</p>
          </div>
          
          <div className="feature-card">
            <FaUndo className="feature-icon" />
            <h3>Easy Returns</h3>
            <p>Not satisfied? Return your products within 30 days for a full refund or exchange.</p>
          </div>
          
          <div className="feature-card">
            <FaHeadset className="feature-icon" />
            <h3>24/7 Support</h3>
            <p>Our customer service team is available round the clock to address your queries.</p>
          </div>
          
          <div className="feature-card">
            <FaTrophy className="feature-icon" />
            <h3>Quality Guaranteed</h3>
            <p>We stand behind the quality of each product we sell with a satisfaction guarantee.</p>
          </div>
        </div>
      </div>
      
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="John Doe" 
            />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Jane Smith" 
            />
            <h3>Jane Smith</h3>
            <p>Chief Marketing Officer</p>
          </div>
          
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Michael Johnson" 
            />
            <h3>Michael Johnson</h3>
            <p>Head of Operations</p>
          </div>
          
          <div className="team-member">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Emily Davis" 
            />
            <h3>Emily Davis</h3>
            <p>Customer Success Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
