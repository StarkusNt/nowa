import React from 'react';
import '../assets/styles/Footer.css';
import { useLanguage } from "../context/languageContext.js";

const Footer = () => {
  const { language, t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">© 2024 Krystian Stański</span>
        <span className="text-muted">{t('licence')}</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/krystian-stanski/" target="_blank" rel="noopener noreferrer" className="footer-button">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/StarkusNt" target="_blank" rel="noopener noreferrer" className="footer-button">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
