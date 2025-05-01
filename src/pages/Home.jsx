import React, { useEffect, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../config/languages';
import '../styles/home.css';

const Home = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].home;
  const controls = useAnimation();

  // 计算中英文文本长度
  const textLengths = useMemo(() => ({
    zh: translations.zh.home.description.length,
    en: translations.en.home.description.length
  }), []);

  // 根据当前语言和文本长度计算延迟时间
  const getDelay = (index) => {
    const currentLength = textLengths[language];
    const maxLength = Math.max(textLengths.zh, textLengths.en);
    // 根据文本长度比例调整延迟时间
    const baseDelay = 0.02;
    const adjustedDelay = baseDelay * (maxLength / currentLength);
    return index * adjustedDelay;
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: getDelay(i),
        duration: 0.05
      }
    })
  };

  useEffect(() => {
    // 重置动画
    controls.set("hidden");
    // 重新开始动画
    controls.start("visible");
  }, [language, isDarkMode, controls]);

  return (
    <section id="home" className={`home-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">{t.title} <span className="highlight">{t.name}</span></h1>
          <h2 className="home-subtitle">{t.subtitle}</h2>
          <p className="home-description">
            {t.description.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={textVariants}
                initial="hidden"
                animate={controls}
              >
                {char}
              </motion.span>
            ))}
          </p>
          <div className="home-buttons">
            <a href="#projects" className="btn primary-btn">{t.buttons.viewWork}</a>
            <a href="#contact" className="btn secondary-btn">{t.buttons.contact}</a>
          </div>
        </div>
        <div className="home-image">
          {/* 这里可以放你的照片或插图 */}
          <div className="image-placeholder">
            <span>Your Photo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
