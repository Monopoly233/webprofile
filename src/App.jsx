import React, { useEffect } from 'react'
import './App.css'
import Footer from './footer'
import Header from './Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Aboutme from './pages/Aboutme'
import CustomCursor from './components/CustomCursor'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { LanguageProvider, useLanguage } from './context/LanguageContext'

function AppContent() {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <div className="app">
      <CustomCursor />
      <Header />
      <main>
        <Home />
        <Projects />
        <Skills />
        <Aboutme />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
