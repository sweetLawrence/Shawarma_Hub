import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="restaurant-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123-60200 Juja</p>
          <p>Email: shawarmahub@gmail.com</p>
          <p>Phone: +254 719502891</p>
        </div>
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Monday-Friday 2:00 pm-9:00pm</p>
          <p>Saturday-Sunday: 12:00pm-11:00pm</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook | Instagram | Twitter</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shawarma Hub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
