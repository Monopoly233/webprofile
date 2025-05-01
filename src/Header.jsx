import React, { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import { translations } from './config/languages';
import './styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].header;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70; // Header 的高度
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Portfolio</a>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>{t.home}</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>{t.projects}</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>{t.skills}</a>
          {/* <a href="#workset" onClick={(e) => scrollToSection(e, 'workset')}>Workset</a> */}
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>{t.about}</a>
        </div>

        <div className="header-right">
          <button 
            className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`} 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            <FaSun />
            <FaMoon />
          </button>

          <button 
            className={`language-toggle ${language === 'en' ? 'active' : 'inactive'}`}
            onClick={toggleLanguage}
          >
            <span>中</span>
            <span>EN</span>
          </button>

          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
