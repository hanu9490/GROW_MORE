import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h2 className="footer-heading">Company</h2>
            <ul className="footer-list">
              <li>
                <a href="aboutus" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="careers" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="contactus" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-heading">Support</h2>
            <ul className="footer-list">
              <li>
                <a href="contactus" className="footer-link">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-heading">Follow Us</h2>
            <ul className="footer-list">
              <li>
                <a href="https://twitter.com" className="footer-link">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="footer-link">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://wa.me/9177885911" className="footer-link">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © 2024 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
