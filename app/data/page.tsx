"use client";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FC, useState, useEffect } from 'react';
import { ExternalLink, ChevronRight, Award, BookOpen, Users, Briefcase, GraduationCap, Heart, Sparkles, ArrowUp, Instagram, Linkedin, Github, Twitter, Mail, Database, BarChart3, Brain, Shield, Search, TrendingUp } from 'lucide-react';
import Image from 'next/image';

// Core competencies data
const competencies = [
  {
    title: "Data Wrangling",
    description: "I specialize in transforming raw, or messy data into a clean and usable format through standard data cleaning and transformation techniques while maintaining data governance.",
    icon: <Database size={24} />,
    color: "from-slate-900 to-neutral-950"
  },
  {
    title: "Data Analytics",
    description: "I specialize in deriving actionable and strategic insights that would have been lost in a mass of information. This goes beyond insights to adopting the 5 whys & ensuring that solution created is root cause initiated.",
    icon: <Search size={24} />,
    color: "from-slate-900 to-neutral-950"
  },
  {
    title: "Data Visualization",
    description: "I build automated and interactive visualization Dashboards that tell compelling stories and guide business intelligence needed to transform operations.",
    icon: <BarChart3 size={24} />,
    color: "from-slate-900 to-neutral-950"
  },
  {
    title: "Data Governance",
    description: "I ensure compliance with established data governance policies by actively monitoring data usage, enforcing quality standards, and promoting ethical data handling. My role supports consistent, secure, and trustworthy data practices across teams and systems.",
    icon: <Shield size={24} />,
    color: "from-slate-900 to-neutral-950"
  },
  {
    title: "Machine Learning",
    description: "I build and deploy machine learning models that uncover patterns, enhance predictions, and support data-driven decision-making. My focus is on applying practical algorithms to solve real-world problems, ensuring models are interpretable, scalable, and aligned with business objectives.",
    icon: <Brain size={24} />,
    color: "from-slate-900 to-neutral-950"
  }
];

// Projects data
const projects = [
  {
    title: "Automated Sales tracker",
    description: "This dashboard delivers real-time sales insights using advanced time intelligence features to uncover performance trends. It highlights key metrics such as revenue growth, profit, and top-performing sales locations",
    tools: "PowerBI, PowerPoint",
    images: ["https://rubytechme.github.io/portfolio/portfolio/Sales Report.png", "https://rubytechme.github.io/portfolio/portfolio/Sales.png", "https://rubytechme.github.io/portfolio/portfolio/Sales from WhatsApp (1).png", "https://rubytechme.github.io/portfolio/portfolio/Sales from WhatsApp.png"],
    // viewUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzk0MzQ1ZTUtOTc4NC00OWQxLWFhZWYtN2U1NjI3MzI4NzNhIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
    githubUrl: "https://github.com/rubytechme/Automated-Sales-Performance-Tracker/blob/main/README.md",
    color: "from-green-400 to-green-600"
  },
  {
    title: "Product Market Fit Analysis",
    description: "This dashboard evaluates how effectively startups align with market realities at both entry and scale. It monitors key growth and engagement metrics including customer retention, engagement rate, and MoM customer growth to provide actionable insights into product-market fit and long-term scalability.",
    tools: "PowerBI, Google Forms, PowerPoint",
    images: ["https://rubytechme.github.io/portfolio/portfolio/PMF02 from WhatsApp.png", "https://rubytechme.github.io/portfolio/portfolio/PMF01.png"],
    viewUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzVhODMwZWItYjU2Mi00ZTlkLWI1ZWQtNjJhZjVkOGM2NDE3IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
    githubUrl: "https://github.com/rubytechme/Product-Market-Fit-Analysis/blob/main/README.md",
    color: "from-blue-400 to-blue-600"
  },

  {
    title: "Sales Intelligence & Performance dashboard",
    description: "This is a Sales Performance Management Dashboard designed to optimize sales strategy and execution. It provides real-time tracking of key performance indicators such as top-performing product categories, revenue trends, and growth drivers—enabling data-driven decisions that enhance overall sales efficiency and profitability.",
    tools: "PowerBI, PowerPoint",
    images: ["https://rubytechme.github.io/portfolio/portfolio/WhatsApp Image 2025-06-25 at 02.26.42.jpeg", "https://rubytechme.github.io/portfolio/portfolio/WhatsApp Image 2025-06-25 at 02.26.42 (1).jpeg", "https://rubytechme.github.io/portfolio/portfolio/WhatsApp Image 2025-06-25 at 02.26.42 (2).jpeg"],
    // viewUrl: "https://app.powerbi.com/view?r=eyJrIjoiMjA4ZDJkNGYtNThjYS00M2Y0LTg1ZjktNzY0YzU5YjNmNzY3IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
    // githubUrl: "https://github.com/rubytechme/Management-Sales-Tracker",
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Business Maturity Index Evaluation",
    description: "This analysis evaluates and tracks financial, operational, and customer-related metrics. Key insights reveal growth trends, profitability gaps, and strategic areas for improvement across the portfolio.",
    tools: "PowerBI, Google Forms, PowerPoint",
    images: ["https://rubytechme.github.io/portfolio/portfolio/BMI from WhatsApp.png", "https://rubytechme.github.io/portfolio/portfolio/BMI (1).png", "https://rubytechme.github.io/portfolio/portfolio/BMI (2).png", "https://rubytechme.github.io/portfolio/portfolio/BMI.png",],
    // viewUrl: "https://app.powerbi.com/view?r=eyJrIjoiOTViNDY0YzItNzY1MS00NjFjLWI4ZTktMzJkNjVkNDAwOWNkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9", 
    githubUrl: "https://github.com/rubytechme/Business-Maturity-Index-Management-Dashboard/blob/main/README.md",
    color: "from-orange-400 to-orange-600"
  },
  {
    title: "SQL Data Wrangling and Analysis",
    description: "This SQL project analyzes a sample employee database to uncover workforce insights through advanced querying, data transformation, and custom logic. It answers strategic HR questions with precision and provides operational analysis.",
    tools: "Excel, SQL",
    images: ["https://rubytechme.github.io/portfolio/portfolio/WhatsApp Image Jun 11 2025.jpeg"],
    // viewUrl: "https://github.com/rubytechme/SQL-Data-Wrangling/blob/main/Employee_Analysis_Results.md",
    githubUrl: "https://github.com/rubytechme/SQL-Data-Wrangling/blob/main/README.md",
    color: "from-teal-400 to-teal-600"
  },
  {
    title: "Fintech ETL",
    description: "This project involved cleaning, transforming, and analyzing customer data for a fintech firm to uncover insights around income patterns, investment behavior, and credit utilization. Using Python for ETL and PostgreSQL for data storage.",
    tools: "Python, Google Colab, SQL",
    images: ["https://rubytechme.github.io/portfolio/portfolio/WhatsApp Image Jun 11 2025 (1).jpeg"],
    // viewUrl: "https://colab.research.google.com/drive/1234567890abcdef",
    githubUrl: "https://github.com/rubytechme/ETL-Analysis-FinTech/blob/main/README.md",
    color: "from-indigo-400 to-indigo-600"
  },

];

// Machine Learning Projects data
const mlProjects = [
  {
    title: "Classification Model - Customer Churn",
    description: "I leveraged machine learning to predict customer churn and uncover behavioral patterns that influence retention, using an open-source dataset. Techniques such as hyperparameter tuning, feature engineering, and pipeline optimization were applied across Decision Tree, SVM, and Random Forest models.",
    tools: "Python, Google Colab",
    images: ["https://rubytechme.github.io/portfolio/portfolio/WhatsApp Image Jun 11 2025 (2).jpeg"],
    // viewUrl: "https://colab.research.google.com/drive/1abcdef1234567890",
    githubUrl: "https://github.com/rubytechme/Machine-Learning-Classification-Customer-Churn/blob/main/README.md",
    color: "from-red-400 to-red-600"
  }
];

const RubyDataPortfolio: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: 45
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      rotateY: 2,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden p-[1rem] py-[3rem]">
      {/* Enhanced Background */}
      <div className="fixed inset-0 bg-black">
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05) 0%, transparent 70%)`
          }}
        />

        {/* Minimal floating elements */}
        <motion.div
          className="absolute top-20 left-1/4 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
        style={{ scaleX: pathLength }}
      />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 p-4 bg-white text-black rounded-full shadow-lg hover:shadow-xl transition-shadow z-50"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative z-10 text-white w-full min-h-screen lg:px-8 py-0">
        <div className="w-full mx-auto max-w-7xl text-white">
          {/* Enhanced Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-8"
          >
            <motion.div
              className="relative backdrop-blur-xl md:px-8 overflow-hidden"
              variants={itemVariants}
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute inset-0 bg-white/[0.01] rounded-3xl"
                variants={glowVariants}
                initial="initial"
                animate="animate"
              />
              <motion.div
                className="absolute top-4 right-4 text-white/20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles size={24} />
              </motion.div>

              <div className='flex gap-6 items-end flex-col md:flex-row'>
                <div className='flex  gap-4 mb-0 w-full items-end'>
                  <div className='w-40 h-40 overflow-hidden rounded-md'>
                    <Image
                      src="https://rubytechme.github.io/portfolio/Passport from WhatsApp.JPG"
                      alt="Ruby Ihekweme"
                      width={384}
                      height={100}
                      className="w-full h-60 object-cover rounded-md "
                    />
                  </div>
                  <div>
                    <motion.h1
                      className="text-lg font-black leading-[0.9] text-white"
                      variants={itemVariants}
                    >
                      RUBY
                      {" "}
                      <span className="text-white">
                        IHEKWEME
                      </span>
                    </motion.h1>
                    <h2 className="text-xl sm:text-2xl font-light text-white mb-2">
                      Data Analyst
                    </h2>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Introduction Section */}
          <motion.div
            className="md:p-8 py-0"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="relative z-10 w-full"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-lg text-justify md:text-2xl text-white font-light leading-relaxed mb-8">
                Hi, My name is Ruby Ihekweme
              </p>

              <p className="text-lg text-justify md:text-2xl text-white font-light leading-relaxed mb-8">
                I am a result-driven and process-oriented Data Analyst with experience in building efficient data pipelines and interactive visuals that tell compelling stories and deliver innovative solutions to problems. My core stack are: {" "}
                {/* <div className="flex items-center gap-3"> */}
                <span className="font-bold">
                  PowerBI, SQL, Python, Excel, and Google Analytics.
                </span>
              </p>

              <p className="text-lg text-justify md:text-2xl text-white font-light leading-relaxed mb-8">
                Beyond just analyzing data, I also build scalable machine learning models to help companies stay on top of things, possessing an expertise in both supervised and unsupervised models.
              </p>

              <p className="text-lg text-justify md:text-2xl text-white font-light leading-relaxed mb-12">
                I also embody strong Data Governance principles by ensuring data quality and integrity through rigorous data checks, standardization, and critical data wrangling/preprocessing.
              </p>

              <motion.a
                href="mailto:rubyugonnaya@gmail.com"
                className="flex w-fit bg-white/10 items-center gap-2 border border-white/20 p-3 rounded-lg text-white/80 hover:text-white transition-colors text-sm"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} />
                Contact Me
                <ChevronRight size={16} className="transition-opacity" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            className="mt-24 md:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="md:p-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-12 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                Projects
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {project.images && project.images.length > 0 && (
                      <div className="relative h-fit  overflow-hidden ">
                        {project.images.length === 1 ? (
                          // Single image - full width
                          <div className="relative w-auto h-[24rem] md:h-[25rem]">
                            <Image
                              src={project.images[0]}
                              alt={`${project.title} - Image`}
                              fill
                              className="object- rounded-lg"
                            />
                          </div>
                        ) : (
                          // Multiple images - stacked layout
                          <div className="relative w-full border border-white/10 h-[28rem] md:h-[30rem]">
                            {project.images.slice(0, 4).map((image, imgIndex) => (
                              <motion.div
                                key={imgIndex}
                                className="absolute w-[20rem] h-[15rem] scale-[0.75] md:w-[28rem] md:h-[20rem]"
                                style={{
                                  top: `${(imgIndex + .5) * 40}px`,
                                  left: `${(imgIndex + .5) * 30}px`,
                                  zIndex: project.images.length - imgIndex,
                                }}
                                whileHover={{
                                  scale: 1.3,
                                  rotate: 0,
                                  zIndex: 50,
                                  x: -20,
                                  y: -20,
                                  transition: {
                                    duration: 0.4,
                                    ease: "easeOut"
                                  }
                                }}
                                animate={{
                                  scale: 1,
                                  // rotate: imgIndex * 2 - 3,
                                  zIndex: project.images.length - imgIndex,
                                  x: 0,
                                  y: 0,
                                  transition: {
                                    duration: 0.4,
                                    ease: "easeOut"
                                  }
                                }}
                              >
                                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl border border-white/10">
                                  <Image
                                    src={image}
                                    alt={`${project.title} - Image ${imgIndex + 1}`}
                                    fill
                                    className="object-contain transition-transform duration-500"
                                  />
                                  <motion.div
                                    className="absolute inset-0 bg-black/20 transition-colors duration-500"
                                    whileHover={{ opacity: 0 }}
                                    animate={{ opacity: 0.2 }}
                                  />
                                </div>
                              </motion.div>
                            ))}
                            {project.images.length > 4 && (
                              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded z-20">
                                +{project.images.length - 4} more
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="relative z-10 p-8">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-white/80 text-sm leading-relaxed mb-4 text-justify">
                        {project.description}
                      </p>

                      <p className="text-white/60 text-sm mb-6">
                        <span className="font-semibold">Tools used:</span> {project.tools}
                      </p>

                      <div className="flex justify-between bvo gap-4">
                          <motion.a
                            href={project.viewUrl ? project.viewUrl : "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-white/20 p-3 rounded-lg text-white/80 hover:text-white transition-colors text-sm"
                            whileHover={{ x: 5 }}
                          >
                            <ExternalLink size={16} />
                            View Dashboard
                          </motion.a>

                          <motion.a
                            href={project.githubUrl ? project.githubUrl : "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-white/20 p-3 rounded-lg text-white/80 hover:text-white transition-colors text-sm"
                            whileHover={{ x: 5 }}
                          >
                            <Github size={16} />
                            View GitHub
                          </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-24 md:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
          >
            <motion.div
              className="md:p-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-12 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
              >
                Machine Learning
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {mlProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.6 + index * 0.1 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {project.images && project.images.length > 0 && (
                      <div className="relative h-fit overflow-hidden">
                        {project.images.length === 1 ? (
                          // Single image - full width
                          <div className="relative w-auto h-[24rem] md:h-[25rem]">
                            <Image
                              src={project.images[0]}
                              alt={`${project.title} - Image`}
                              fill
                              className="object- rounded-lg"
                            />
                          </div>
                        ) : (
                          // Multiple images - stacked layout
                          <div className="relative w-full h-[28rem] md:h-[40rem]">
                            {project.images.slice(0, 4).map((image, imgIndex) => (
                              <motion.div
                                key={imgIndex}
                                className="absolute w-[20rem] h-[15rem] md:w-[28rem] md:h-[20rem]"
                                style={{
                                  top: `${(imgIndex + .5) * 40}px`,
                                  left: `${(imgIndex + 1) * 25}px`,
                                  zIndex: project.images.length - imgIndex,
                                }}
                                whileHover={{
                                  scale: 1.3,
                                  rotate: 0,
                                  zIndex: 50,
                                  x: -20,
                                  y: -20,
                                  transition: {
                                    duration: 0.4,
                                    ease: "easeOut"
                                  }
                                }}
                                animate={{
                                  scale: 1,
                                  rotate: imgIndex * 2 - 3,
                                  zIndex: project.images.length - imgIndex,
                                  x: 0,
                                  y: 0,
                                  transition: {
                                    duration: 0.4,
                                    ease: "easeOut"
                                  }
                                }}
                              >
                                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl border border-white/10">
                                  <Image
                                    src={image}
                                    alt={`${project.title} - Image ${imgIndex + 1}`}
                                    fill
                                    className="object-contain transition-transform duration-500"
                                  />
                                  <motion.div
                                    className="absolute inset-0 bg-black/20 transition-colors duration-500"
                                    whileHover={{ opacity: 0 }}
                                    animate={{ opacity: 0.2 }}
                                  />
                                </div>
                              </motion.div>
                            ))}
                            {project.images.length > 4 && (
                              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded z-20">
                                +{project.images.length - 4} more
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="relative z-10 p-8">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-white/80 text-sm leading-relaxed mb-4 text-justify">
                        {project.description}
                      </p>

                      <p className="text-white/60 text-sm mb-6">
                        <span className="font-semibold">Tools used:</span> {project.tools}
                      </p>

                      <div className="flex justify-between gap-4">
                        {/* {project.viewUrl && (
                          <motion.a
                            href={project.viewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-white/20 p-3 rounded-lg text-white/80 hover:text-white transition-colors text-sm"
                            whileHover={{ x: 5 }}
                          >
                            <ExternalLink size={16} />
                            View Colab
                          </motion.a>
                        )} */}

                        {project.githubUrl && project.githubUrl !== "#" && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-white/20 p-3 rounded-lg text-white/80 hover:text-white transition-colors text-sm"
                            whileHover={{ x: 5 }}
                          >
                            <Github size={16} />
                            View GitHub
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          {/* Core Competencies Section */}
          <motion.div
            className="mt-24 md:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <motion.div
              className="md:p-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-12 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 }}
              >
                Core Competencies
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {competencies.map((competency, index) => (
                  <motion.div
                    key={index}
                    className="group relative  rounded-xl p-4 overflow-hidden"
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1 + index * 0.1 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${competency.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-r ${competency.color} bg-opacity-20`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {competency.icon}
                        </motion.div>
                        <h3 className="text-xl font-bold text-white">
                          {competency.title}
                        </h3>
                      </div>

                      <p className="text-white/80 p-4 leading-relaxed text-justify backdrop-blur-xl bg-white/5 border border-white/10 p-2">
                        {competency.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          

          {/* Footer Section */}
          <motion.footer
            className="mt-16 md:mt-32 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <div className="p-4 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Contact Information */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6 }}
                >
                  <h5 className="text-2xl font-bold text-white mb-6">Get in Touch</h5>

                  <motion.a
                    href="mailto:rubyihekweme@gmail.com"
                    className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Mail size={18} />
                    </div>
                    <span className="text-lg">rubyihekweme@gmail.com</span>
                  </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.7 }}
                >
                  <h5 className="text-2xl font-bold text-white mb-6">Connect</h5>

                  <div className="flex flex-wrap gap-4">
                    {[
                      { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/ruby-ihekweme-aat-aca-b25001174/' },
                      { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/rubytechme' },
                      { name: 'Twitter', icon: <Twitter size={18} />, url: 'https://x.com/rubytechme?s=21' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.8 + index * 0.1 }}
                      >
                        {social.icon}
                        <span className="text-sm">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Copyright */}
              <motion.div
                className="mt-16 pt-8 border-t border-white/10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.9 }}
              >
                <p className="text-white/60 text-sm">
                  © 2025 Ruby Ihekweme. All rights reserved.
                </p>
              </motion.div>
            </div>
          </motion.footer>
        </div>
      </div>
    </div>
  );
};

export default RubyDataPortfolio;
