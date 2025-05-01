import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../config/languages';
import '../styles/Skills.css';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].skills;

  const skills = [
    {
      category: t.frontend.title,
      description: t.frontend.description,
      subcategories: [
        {
          name: t.frontend.languages,
          items: ['HTML5', 'CSS3', 'JavaScript']
        },
        {
          name: t.frontend.frameworks,
          items: ['React', 'Bootstrap', 'Tailwind CSS']
        },
        {
          name: t.frontend.tools,
          items: ['Webpack', 'Vite']
        },
        {
          name: t.frontend.cms,
          items: ['WordPress', 'Headless CMS', 'Shopify', 'Strapi']
        },
        {
          name: t.frontend.design,
          items: [
            t.frontend.items.photoshop,
            t.frontend.items.figma,
            t.frontend.items.xd,
            t.frontend.items.illustrator
          ]
        }
      ]
    },
    {
      category: t.backend.title,
      description: t.backend.description,
      subcategories: [
        {
          name: t.backend.languages,
          items: ['Python (Main)', 'C/C++', 'Java', 'JavaScript', 'Assembly', 'Django', 'Flask']
        },
        {
          name: t.backend.databases,
          items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
        },
        {
          name: t.backend.apis,
          items: ['RESTful APIs', 'GraphQL', 'WebSocket', 'JWT Authentication']
        },
        {
          name: t.backend.tools,
          items: ['Postman', 'Swagger', 'Insomnia']
        },
        {
          name: t.backend.ai,
          items: [
            t.backend.items.langchain,
            t.backend.items.openai,
            t.backend.items.embeddings,
            t.backend.items.llm
          ]
        }
      ]
    },
    {
      category: t.algorithms.title,
      description: t.algorithms.description,
      subcategories: [
        {
          name: t.algorithms.algorithms,
          items: [
            t.algorithms.items.dataStructures,
            t.algorithms.items.sorting,
            t.algorithms.items.searching,
            t.algorithms.items.dynamicProgramming,
            t.algorithms.items.graphAlgorithms
          ]
        },
        {
          name: t.algorithms.mathematics,
          items: [
            t.algorithms.items.linearAlgebra,
            t.algorithms.items.calculus,
            t.algorithms.items.numericalAnalysis,
            t.algorithms.items.probability,
            t.algorithms.items.statistics
          ]
        },
        {
          name: t.algorithms.problemSolving,
          items: [
            t.algorithms.items.algorithmDesign,
            t.algorithms.items.complexityAnalysis,
            t.algorithms.items.mathematicalModeling
          ]
        }
      ]
    },
    {
      category: t.graphics.title,
      description: t.graphics.description,
      subcategories: [
        {
          name: t.graphics.modeling,
          items: [
            t.graphics.items.basicModeling,
            t.graphics.items.sceneSetup,
            t.graphics.items.simpleCharacters,
            t.graphics.items.props
          ]
        },
        {
          name: t.graphics.materials,
          items: [
            t.graphics.items.bsdfMaterials,
            t.graphics.items.uvUnwrapping,
            t.graphics.items.basicTexturing
          ]
        },
        {
          name: t.graphics.animation,
          items: [
            t.graphics.items.keyframeAnimation,
            t.graphics.items.simpleRigging
          ]
        },
        {
          name: t.graphics.graphics,
          items: [
            t.graphics.items.renderingPipeline,
            t.graphics.items.shaderProgramming,
            t.graphics.items.opengl,
            t.graphics.items.webgl
          ]
        }
      ]
    },
    {
      category: t.data.title,
      description: t.data.description,
      subcategories: [
        {
          name: t.data.processing,
          items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn']
        },
        {
          name: t.data.tools,
          items: ['Scikit-learn', 'Jupyter', 'TensorFlow Basics']
        }
      ]
    },
    {
      category: t.tools.title,
      description: t.tools.description,
      subcategories: [
        {
          name: t.tools.versionControl,
          items: ['Git', 'GitHub']
        },
        {
          name: t.tools.devops,
          items: ['Docker', 'AWS', 'Linux', 'CI/CD','Cloudflare','Vercel','Render']
        },
        {
          name: t.tools.office,
          items: [
            t.tools.items.word,
            t.tools.items.excel,
            t.tools.items.powerpoint
          ]
        }
      ]
    }
  ];

  return (
    <section id="skills" className={`skills-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="skills-container">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="skills-grid">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2>{category.category}</h2>
              <p className="category-description">{category.description}</p>
              <div className="subcategories">
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory.name} className="subcategory">
                    <h3>{subcategory.name}</h3>
                    <div className="skills-list">
                      {subcategory.items.map((skill) => (
                        <div key={skill} className="skill-item">
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
