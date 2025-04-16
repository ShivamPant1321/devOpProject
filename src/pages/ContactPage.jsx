import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitted: false
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      message: 'Thank you for your message! We will get back to you soon.',
      isError: false,
      isSubmitted: true
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions about our products or services? Need assistance with an order? 
            Our friendly customer support team is here to help.
          </p>
          
          <div className="info-items">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Address</h3>
                <p>123 Shopping Street, Commerce City, ST 12345</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>info@e-shop.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaClock className="info-icon" />
              <div>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9AM - 5PM</p>
                <p>Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Send a Message</h2>
          
          {formStatus.isSubmitted && (
            <div className={`form-message ${formStatus.isError ? 'error' : 'success'}`}>
              {formStatus.message}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941954754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1627664568549!5m2!1sen!2s" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="E-Shop Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
