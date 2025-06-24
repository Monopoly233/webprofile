import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../config/languages';
import p1 from '../assets/project/p1.png';
import p2 from '../assets/project/p2.png';
import p3 from '../assets/project/p3.png';
import p4 from '../assets/project/p4.png';
import '../styles/projects.css';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].projects;

  const projects = [
    {
      id: 1,
      title: t.projects[0].title,
      description: t.projects[0].description,
      technologies: t.projects[0].technologies,
      image: p1,
      link: '#',
      github: 'https://github.com/Monopoly233/hackton_forAI_Nv/blob/main/HackathonNotebookTemplate.ipynb'
    },
    {
      id: 2,
      title: t.projects[1].title,
      description: t.projects[1].description,
      technologies: t.projects[1].technologies,
      image: p2,
      link: 'https://senlinlin.com/woo/',
      github: '#'
    },
    {
      id: 3,
      title: t.projects[2].title,
      description: t.projects[2].description,
      technologies: t.projects[2].technologies,
      image: p3,
      link: 'https://senldev.org/',
      github: '#'
    },
    {
      id: 4,
      title: t.projects[3].title,
      description: t.projects[3].description,
      technologies: t.projects[3].technologies,
      image: p4,
      link: 'https://monopoly233.github.io/reactmovie/#/',
      github: '#'
    }
  ];

  return (
    <section id="projects" className={`projects-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="projects-container">
        <h2 className="section-title">{t.title}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.link && project.link !== '#' ? (
                    <a href={project.link} className="btn primary-btn" target="_blank" rel="noopener noreferrer">
                      {t.liveDemo}
                    </a>
                  ) : null}
                  {project.github && project.github !== '#' ? (
                    <a href={project.github} className="btn secondary-btn" target="_blank" rel="noopener noreferrer">
                      {t.github}
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
