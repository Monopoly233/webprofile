export const translations = {
  zh: {
    header: {
      home: '首页',
      about: '关于我',
      projects: '项目',
      skills: '技能'
    },
    home: {
      title: '你好，我是',
      name: '林森霖',
      subtitle: '全栈开发工程师（前端方向）',
      description: '一位充满激情的开发者，精通前后端技术。专注于 React、Django 和现代 Web 开发。我热爱创建美观、响应式且用户友好的 Web 应用程序，同时确保后端服务的稳健性。',
      buttons: {
        viewWork: '查看我的作品',
        contact: '联系我'
      }
    },
    skills: {
      title: '技能',
      frontend: {
        title: '前端开发',
        description: '专注于构建响应式、用户友好的Web界面，擅长使用现代前端框架和工具。对性能优化和用户体验有深入理解。能够使用CMS系统快速搭建网站。',
        languages: '编程语言',
        frameworks: '框架与库',
        tools: '工具与构建',
        cms: 'CMS与平台',
        design: '设计工具',
        items: {
          photoshop: 'Adobe Photoshop',
          figma: 'Figma',
          xd: 'Adobe XD',
          illustrator: 'Adobe Illustrator'
        }
      },
      backend: {
        title: '后端开发',
        description: '具备全栈开发能力，能够设计和实现RESTful API，处理数据库操作，并确保应用的安全性和可扩展性。主要使用Python进行后端开发。对计算机底层原理有深入理解，包括汇编语言和系统架构。',
        languages: '编程语言与框架',
        databases: '数据库',
        apis: 'API与服务',
        tools: '工具',
        ai: 'AI与LLM',
        items: {
          langchain: 'LangChain',
          openai: 'OpenAI API',
          embeddings: '向量数据库',
          llm: '大语言模型应用'
        }
      },
      algorithms: {
        title: '算法与数学',
        description: '具备扎实的算法基础和数学知识，熟悉常见算法和数据结构。掌握高等数学、线性代数和数值分析等数学知识，能够将数学理论应用于实际问题解决。',
        algorithms: '算法',
        mathematics: '数学',
        problemSolving: '问题解决',
        items: {
          dataStructures: '数据结构',
          sorting: '排序算法',
          searching: '搜索算法',
          dynamicProgramming: '动态规划',
          graphAlgorithms: '图算法',
          linearAlgebra: '线性代数',
          calculus: '微积分',
          numericalAnalysis: '数值分析',
          probability: '概率论',
          statistics: '统计学',
          algorithmDesign: '算法设计',
          complexityAnalysis: '复杂度分析',
          mathematicalModeling: '数学建模'
        }
      },
      graphics: {
        title: '3D艺术与计算机图形学',
        description: '熟悉Blender基础操作，能够进行简单的3D建模和场景搭建。了解基本的材质制作和UV展开。具备计算机图形学基础，了解渲染管线和着色器编程。',
        modeling: '建模',
        materials: '材质与贴图',
        animation: '动画',
        graphics: '计算机图形学',
        items: {
          basicModeling: '基础建模',
          sceneSetup: '场景搭建',
          simpleCharacters: '简单角色',
          props: '道具',
          bsdfMaterials: 'BSDF材质',
          uvUnwrapping: 'UV展开',
          basicTexturing: '基础贴图',
          keyframeAnimation: '关键帧动画',
          simpleRigging: '简单绑定',
          renderingPipeline: '渲染管线',
          shaderProgramming: '着色器编程',
          opengl: 'OpenGL',
          webgl: 'WebGL'
        }
      },
      data: {
        title: '数据与机器学习',
        description: '熟悉数据处理和分析流程，能够使用Python进行数据清洗、分析和可视化。对机器学习基础概念有理解，能够实现简单的机器学习模型。',
        processing: '数据处理',
        tools: '机器学习工具'
      },
      tools: {
        title: '工具与平台',
        description: '熟练使用版本控制工具进行团队协作，了解DevOps流程和云服务部署。',
        versionControl: '版本控制',
        devops: 'DevOps与云服务',
        office: '办公软件',
        items: {
          word: 'Microsoft Word',
          excel: 'Microsoft Excel',
          powerpoint: 'Microsoft PowerPoint'
        }
      }
    },
    aboutme: {
      title: '关于我',
      description: '我是一名充满激情的全栈开发工程师，专注于前端开发。我热爱创造美观且功能强大的Web应用，并致力于提供最佳的用户体验。',
      education: {
        title: '教育背景',
        content: '维多利亚大学计算机科学学士学位（4年），主修软件工程和算法设计，系统学习了计算机科学核心课程。之后在BCIT完成了前端开发的全职课程，深入学习了现代前端技术栈和最佳实践。'
      },
      philosophy: {
        title: '开发哲学',
        content: '我遵循奥卡姆剃刀原则：如无必要，勿增实体。代码的复杂度应该由实际需求决定，而不是为了炫技。\n\n我坚信，如果没有实际需求，就不需要做。代码的复杂度应该反映现实世界的复杂性，而不是为了展示技术能力而刻意复杂化。\n\n例如，对于一个简单的静态内容展示，完全不需要前后端分离、API、缓存服务器、网关反向代理、CDN加速等复杂架构。如果内容不需要频繁更新，不需要高并发访问，最好的解决方案就是直接写在前端。\n\n当真正需要动态多语言支持、非开发人员内容管理、高并发访问时，再按需重构和引入相应技术，而不是一开始就构建臃肿复杂的系统。\n\n现实中存在大量过度工程化的例子：\n• 用深度学习推荐小吃摊\n• 用Kubernetes管理三台服务器\n• 用微服务切割小项目\n• 用复杂技术栈搭建简单菜单页面\n\n这些做法成本远大于收益，完全违背工程精神。对于小企业，一个简单的CMS系统就足够了。\n\n我甚至对代码的高性能也抱有如此态度。\n\n我真不觉得，都用一些顶层的语言，还要写一堆递归来提速，真的非常傻逼没有必要。完全没必要牺牲可读性来增加那么一点机器性能。更何况是顶层语言的性能。\n\n高性能的写法在底层实现上很有意义，但是大多数顶层语言需要这种东西？那就是在浪费生命。\n\n这就是我对算法题目（如LeetCode）和八股文有着极其厌恶的原因。如果你不是算法科学家，如果不是一些非常底层计算机的高性能的开发。算法题LeetCode就是毫无意义的。\n\n算法是工具，不是目的。\n过度崇拜算法题，就是本末倒置。\n工程的目标是解决真实世界的问题，而不是用高难度姿势抠细节取悦面试官。在没有真正工程需要的场合，花大量时间刷算法题，就是对生命和智力的浪费。\n\n我觉得在目前的AI时代，对流程的掌握和理解，比写底层算法要重要得多的多。\n\n你只有完全理解了开发的流程，信息传导的流程，业务的流程，业务的规模，你才能理解，在哪里需要加入什么技术，怎么用性价比高。然后再指挥AI去底层实现。'
      },
      interests: {
        title: '兴趣爱好',
        content: '在业余时间，我热爱健身和巴西柔术，这些运动帮助我保持身心健康。同时，我对自然科学、数学、哲学、社会学和历史等人文领域也充满兴趣，这些知识帮助我更好地理解世界和人性。'
      }
    },
    projects: {
      title: '我的项目',
      liveDemo: '在线演示',
      github: 'GitHub',
      projects: [
        {
          title: 'AI智能代理系统',
          description: '基于LangChain开发的AI智能代理系统，使用Google Colab和Jupyter Notebook进行开发和测试。项目实现了基于图数据库的数据检索和推理功能。',
          technologies: ['LangChain', 'Google Colab', 'Jupyter Notebook', 'Python', 'RAG']
        },
        {
          title: 'WordPress商城',
          description: '基于WordPress和WooCommerce构建的电子商务网站，包含产品展示、购物车、支付系统等功能。',
          technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL']
        },
        {
          title: 'Excel表格比对系统',
          description: '基于React和Django开发的Excel表格比对工具，支持两张Excel表格的数据对比，自动识别增减变化，并提供实时预览功能。',
          technologies: ['React', 'Django', 'Python', 'PostgreSQL', 'Excel']
        },
        {
          title: '电影数据应用',
          description: '基于React开发的电影数据应用，通过TMDB API获取电影信息，实现电影分类、搜索、收藏等功能。',
          technologies: ['React', 'TMDB API', 'JavaScript', 'CSS3']
        }
      ]
    }
  },
  en: {
    header: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills'
    },
    home: {
      title: 'Hi, I\'m',
      name: 'Senlin Lin',
      subtitle: 'Full Stack Developer (Frontend Focus)',
      description: 'A passionate developer proficient in both frontend and backend technologies. Specializing in React, Django, and modern web development. I love creating beautiful, responsive, and user-friendly web applications while ensuring robust backend services.',
      buttons: {
        viewWork: 'View My Work',
        contact: 'Contact Me'
      }
    },
    skills: {
      title: 'Skills',
      frontend: {
        title: 'Frontend Development',
        description: 'Focus on building responsive and user-friendly web interfaces, proficient in modern frontend frameworks and tools. Deep understanding of performance optimization and user experience. Capable of quickly building websites using CMS systems.',
        languages: 'Languages',
        frameworks: 'Frameworks & Libraries',
        tools: 'Tools & Build',
        cms: 'CMS & Platforms',
        design: 'Design Tools',
        items: {
          photoshop: 'Adobe Photoshop',
          figma: 'Figma',
          xd: 'Adobe XD',
          illustrator: 'Adobe Illustrator'
        }
      },
      backend: {
        title: 'Backend Development',
        description: 'Full-stack development capabilities, able to design and implement RESTful APIs, handle database operations, and ensure application security and scalability. Mainly using Python for backend development. Deep understanding of computer fundamentals, including assembly language and system architecture.',
        languages: 'Languages & Frameworks',
        databases: 'Databases',
        apis: 'APIs & Services',
        tools: 'Tools',
        ai: 'AI & LLM',
        items: {
          langchain: 'LangChain',
          openai: 'OpenAI API',
          embeddings: 'Vector Databases',
          llm: 'LLM Applications'
        }
      },
      algorithms: {
        title: 'Algorithms & Mathematics',
        description: 'Solid foundation in algorithms and mathematics, familiar with common algorithms and data structures. Mastery of advanced mathematics, linear algebra, and numerical analysis, able to apply mathematical theories to practical problem-solving.',
        algorithms: 'Algorithms',
        mathematics: 'Mathematics',
        problemSolving: 'Problem Solving',
        items: {
          dataStructures: 'Data Structures',
          sorting: 'Sorting Algorithms',
          searching: 'Searching Algorithms',
          dynamicProgramming: 'Dynamic Programming',
          graphAlgorithms: 'Graph Algorithms',
          linearAlgebra: 'Linear Algebra',
          calculus: 'Calculus',
          numericalAnalysis: 'Numerical Analysis',
          probability: 'Probability Theory',
          statistics: 'Statistics',
          algorithmDesign: 'Algorithm Design',
          complexityAnalysis: 'Complexity Analysis',
          mathematicalModeling: 'Mathematical Modeling'
        }
      },
      graphics: {
        title: '3D Art & Computer Graphics',
        description: 'Familiar with Blender basics, capable of simple 3D modeling and scene setup. Understand basic material creation and UV unwrapping. Have computer graphics fundamentals, understand rendering pipeline and shader programming.',
        modeling: 'Modeling',
        materials: 'Materials & Texturing',
        animation: 'Animation',
        graphics: 'Computer Graphics',
        items: {
          basicModeling: 'Basic Modeling',
          sceneSetup: 'Scene Setup',
          simpleCharacters: 'Simple Characters',
          props: 'Props',
          bsdfMaterials: 'BSDF Materials',
          uvUnwrapping: 'UV Unwrapping',
          basicTexturing: 'Basic Texturing',
          keyframeAnimation: 'Keyframe Animation',
          simpleRigging: 'Simple Rigging',
          renderingPipeline: 'Rendering Pipeline',
          shaderProgramming: 'Shader Programming',
          opengl: 'OpenGL',
          webgl: 'WebGL'
        }
      },
      data: {
        title: 'Data & Machine Learning',
        description: 'Familiar with data processing and analysis workflows, able to perform data cleaning, analysis, and visualization using Python. Understand basic machine learning concepts and can implement simple machine learning models.',
        processing: 'Data Processing',
        tools: 'ML Tools'
      },
      tools: {
        title: 'Tools & Platforms',
        description: 'Proficient in version control tools for team collaboration, understand DevOps processes and cloud service deployment.',
        versionControl: 'Version Control',
        devops: 'DevOps & Cloud',
        office: 'Office Software',
        items: {
          word: 'Microsoft Word',
          excel: 'Microsoft Excel',
          powerpoint: 'Microsoft PowerPoint'
        }
      }
    },
    aboutme: {
      title: 'About Me',
      description: 'I am a passionate full-stack developer with a focus on frontend development. I love creating beautiful and powerful web applications while ensuring the best user experience.',
      education: {
        title: 'Education',
        content: 'Bachelor\'s degree in Computer Science from the University of Victoria (4 years), majoring in Software Engineering and Algorithm Design, with comprehensive study of core computer science courses. Later completed a full-time Frontend Development program at BCIT, gaining in-depth knowledge of modern frontend technologies and best practices.'
      },
      philosophy: {
        title: 'Development Philosophy',
        content: 'I follow the principle of Occam\'s Razor: entities should not be multiplied without necessity. Code complexity should be determined by actual requirements, not by the desire to showcase technical prowess.\n\nI firmly believe that if there is no actual need, it should not be done. Code complexity should reflect the complexity of the real world, not be artificially inflated to demonstrate technical capabilities.\n\nFor example, a simple static content display does not require a complex architecture with frontend-backend separation, APIs, caching servers, gateway reverse proxies, or CDN acceleration. If the content doesn\'t need frequent updates or high concurrency, the best solution is to write it directly in the frontend.\n\nWhen there is a genuine need for dynamic multilingual support, non-developer content management, or high concurrency, then we can refactor and introduce the appropriate technologies, rather than building a bloated and complex system from the start.\n\nThere are numerous examples of over-engineering in practice:\n• Using deep learning for snack recommendations\n• Managing three servers with Kubernetes\n• Splitting small projects with microservices\n• Building a simple menu page with complex tech stacks\n\nThese approaches cost far more than they benefit, completely violating engineering principles. For small businesses, a simple CMS system is more than sufficient.\n\nI hold a similar attitude towards code performance.\n\nI don\'t think it makes any sense to write complex recursive algorithms in high-level languages just for performance optimization. It\'s completely unnecessary to sacrifice code readability for marginal performance gains, especially in high-level languages.\n\nPerformance optimization makes sense at the low-level implementation, but for most high-level languages? That\'s just a waste of life.\n\nThis is why I have an extreme aversion to algorithm problems like LeetCode and rote interview questions. Unless you\'re an algorithm scientist or working on very low-level, high-performance computing, LeetCode problems are meaningless.\n\nAlgorithms are tools, not goals.\nOver-worshipping algorithm problems is putting the cart before the horse.\nThe goal of engineering is to solve real-world problems, not to impress interviewers with complex algorithms. Spending excessive time on algorithm problems without real engineering needs is a waste of life and intelligence.\n\nIn the current AI era, understanding processes and workflows is far more important than writing low-level algorithms.\n\nOnly when you fully understand the development process, information flow, business processes, and business scale can you determine where to apply which technologies and how to achieve the best cost-performance ratio. Then you can direct AI to handle the low-level implementation.'
      },
      interests: {
        title: 'Interests',
        content: 'In my free time, I enjoy fitness and Brazilian Jiu-Jitsu, which help me maintain physical and mental well-being. I also have a keen interest in natural sciences, mathematics, philosophy, sociology, and history, as these subjects help me better understand the world and human nature.'
      }
    },
    projects: {
      title: 'My Projects',
      liveDemo: 'Live Demo',
      github: 'GitHub',
      projects: [
        {
          title: 'AI Agent System',
          description: 'An AI agent system developed with LangChain, using Google Colab and Jupyter Notebook for development and testing. The project implements data retrieval and reasoning capabilities based on graph databases.',
          technologies: ['LangChain', 'Google Colab', 'Jupyter Notebook', 'Python', 'RAG']
        },
        {
          title: 'WordPress E-commerce',
          description: 'An e-commerce website built with WordPress and WooCommerce, featuring product display, shopping cart, and payment system.',
          technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL']
        },
        {
          title: 'Excel Table Comparison System',
          description: 'An Excel table comparison tool built with React and Django. It supports comparing two Excel tables, automatically identifies changes, and provides real-time preview functionality.',
          technologies: ['React', 'Django', 'Python', 'PostgreSQL', 'Excel']
        },
        {
          title: 'Movie Data Application',
          description: 'A movie data application built with React, fetching movie information through TMDB API, featuring movie categorization, search, and favorites functionality.',
          technologies: ['React', 'TMDB API', 'JavaScript', 'CSS3']
        }
      ]
    }
  }
}; 