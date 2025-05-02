import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: lslsooke17@gmail.com</p>
          <p>Phone: +1 250 885 0685</p>
        </div>
        
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-links">
            <a href="https://github.com/Monopoly233" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a> */}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Personal Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
