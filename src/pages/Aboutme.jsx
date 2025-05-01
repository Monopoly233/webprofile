import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../config/languages';
import '../styles/Aboutme.css';

const Aboutme = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].aboutme;

  return (
    <section id="about" className={`about-container ${isDarkMode ? 'dark' : 'light'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="about-content"
      >
        <h2 className="section-title">{t.title}</h2>
        <div className="about-text">
          {/* <p>{t.description}</p> */}
          <div className="about-details">
            <div className="detail-item">
              <h3>{t.education.title}</h3>
              <p>{t.education.content}</p>
            </div>
            <div className="detail-item">
              <h3>{t.interests.title}</h3>
              <p>{t.interests.content}</p>
            </div>
          </div>
          <div className="philosophy-section">
            <h3>{t.philosophy.title}</h3>
            <p>{t.philosophy.content}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Aboutme;
