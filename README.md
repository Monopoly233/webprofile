# Personal Portfolio Website

A modern personal portfolio website showcasing my projects, skills, and personal information. The website features responsive design, dark/light theme switching, and multilingual support.

## 🌟 Features

- 🎨 Responsive design that adapts perfectly to all devices
- 🌓 Dark/Light theme switching
- 🌐 Bilingual support (English/Chinese)
- 🎯 Smooth scrolling and animations
- 📱 Mobile-friendly navigation menu
- 🎨 Modern UI design
- ⚡ Optimized performance

## 🛠️ Tech Stack

- **Frontend Framework**: React.js
- **Styling**: CSS3, CSS Variables
- **State Management**: React Context API
- **Routing**: React Router
- **Icons**: React Icons
- **Animations**: CSS Transitions & Animations
- **Build Tool**: Vite

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/     # Reusable components
├── context/        # Context API state management
├── pages/          # Page components
├── styles/         # Style files
├── config/         # Configuration files
└── App.jsx         # Main application component
```

## 🎨 Theme System

The website uses CSS variables for theme management, supporting:

- Light theme: Clean and bright design
- Dark theme: Eye-friendly design
- Smooth theme switching animations

## 🌐 Multilingual Support

- Supports English and Chinese
- Animated language toggle button
- All text content managed through configuration files

## 🎯 Main Pages

1. **Home**
   - Personal introduction
   - Quick navigation
   - Theme toggle

2. **Projects**
   - Project card layout
   - Project details
   - Live demo and code links

3. **Skills**
   - Skill categories
   - Skill level visualization
   - Tech stack icons

4. **About Me**
   - Personal experience
   - Education background
   - Interests and hobbies

## 🛠️ Development Guide

### Adding New Projects

1. Add project information in `config/languages.js`
2. Update project display logic in `pages/Projects.jsx`

### Modifying Theme Colors

1. Modify CSS variables in `styles/global.css`
2. Ensure corresponding color values for both dark and light themes

### Adding New Languages

1. Add new language configuration in `config/languages.js`
2. Update language switching logic in `context/LanguageContext.jsx`

## 📝 Notes

- Ensure all image resources are optimized
- Maintain consistent code style
- Regularly update project information
- Test all interactive features

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this project.

## 📄 License

MIT License
