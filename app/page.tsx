"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight, Award, BookOpen, Users, Briefcase, GraduationCap, Heart, Mail, ArrowUpRight, Sparkles, Globe, Zap } from 'lucide-react';

const AwardWinningPortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [activeSection, setActiveSection] = useState(0);
  const { scrollY } = useScroll();
  
  // Smooth scroll transforms
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  
  // Spring physics for smooth animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(mousePosition.x, springConfig);
  const y = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textRevealVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      clipPath: "inset(100% 0 0 0)"
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0 0 0)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Data sections with enhanced styling
  const sections = [
    {
      title: 'Expertise & Recognition',
      icon: <Award size={28} />,
      content: 'Her core expertise lies in educational innovation, digital transformation, data governance and analytics.',
      accent: 'from-blue-400 to-cyan-400',
      stats: '6+ Years Experience'
    },
    {
      title: 'Education',
      icon: <GraduationCap size={28} />,
      content: 'Ruby received her BSc in Economics from the University of Lagos and a Diploma in Finance. She is also an Associate Accounting Technician and Professional Chartered Accountant certified by ICAN.',
      accent: 'from-emerald-400 to-teal-400',
      stats: 'Multiple Certifications'
    },
    {
      title: 'Work Experience',
      icon: <Briefcase size={28} />,
      content: 'Ruby has over 6 years of consulting experience, starting at KPMG and progressing through 4 corporate organizations until Knight Ventures, supporting tech-enabled startups across education, fintech and energy sectors.',
      accent: 'from-orange-400 to-red-400',
      stats: 'KPMG → Knight Ventures'
    },
    {
      title: 'Global Impact',
      icon: <Globe size={28} />,
      content: 'Ruby has trained over 18,000 talents across Kenya, Ghana, Nigeria, UK, USA, Dubai, South Africa, Botswana, and Uganda, powering a community of 100,000+ youths.',
      accent: 'from-purple-400 to-pink-400',
      stats: '18K+ Talents Trained'
    },
    {
      title: 'Social Impact',
      icon: <Heart size={28} />,
      content: 'Co-founder of Grow4her, a non-profit organization empowering girl children. Through various programs, she has empowered over 5,000 women and contributed to education and women empowerment initiatives.',
      accent: 'from-pink-400 to-rose-400',
      stats: '5K+ Women Empowered'
    }
  ];

  const achievements = [
    { number: "18,000+", label: "Talents Trained", icon: <Users size={24} /> },
    { number: "100,000+", label: "Community Members", icon: <Globe size={24} /> },
    { number: "$18.3B", label: "Economic Contribution", icon: <Sparkles size={24} /> },
    { number: "9", label: "Countries Reached", icon: <Zap size={24} /> }
  ];

  const projects = [
    'Article Features',
    'Project EducateTheChild',
    'Project EmpowerHer', 
    'Project 10,000 Women in Tech',
    'Speaking Engagements',
    'Blog & Insights',
    'Technical Portfolio'
  ];

  return (
    <div className="bg-neutral-950 text-white overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ x, y }}
        animate={cursorVariant}
        variants={{
          default: { scale: 1 },
          text: { scale: 1.5 },
          button: { scale: 2 }
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 4 }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 px-6 py-3 rounded-full text-sm font-medium mb-8"
            variants={heroVariants}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            <motion.div
              className="w-2 h-2 bg-emerald-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            Available for Opportunities
          </motion.div>

          {/* Main Title */}
          <motion.div variants={heroVariants} className="mb-12">
            <motion.h1
              className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-none mb-6"
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <motion.span
                className="block bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
                variants={textRevealVariants}
              >
                RUBY
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                variants={textRevealVariants}
                transition={{ delay: 0.5 }}
              >
                IHEKWEME
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            variants={heroVariants}
            transition={{ delay: 0.8 }}
          >
            <p className="text-2xl md:text-3xl text-neutral-300 font-light leading-relaxed">
              Founder & Managing Director at{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                Digitaley Drive
              </span>
            </p>
            <p className="text-lg text-neutral-400 mt-4 max-w-2xl mx-auto">
              Transforming African education through AI, gamification, and community learning
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={heroVariants}
            transition={{ delay: 1 }}
          >
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <span className="flex items-center gap-2">
                <Mail size={20} />
                Get in Touch
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border border-neutral-700 rounded-2xl font-semibold text-lg hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900"
        style={{ y: y1 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={heroVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-2xl group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {achievement.icon}
                  </div>
                </div>
                <motion.h3
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {achievement.number}
                </motion.h3>
                <p className="text-neutral-400 font-medium">{achievement.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-32 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Transforming Education
            </h2>
            <p className="text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              Ruby Ihekweme is pioneering the future of African education through innovative technology solutions, 
              combining artificial intelligence, gamification, and community learning to create transformational experiences.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-3xl p-12 mb-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl leading-relaxed text-neutral-200 font-light">
              "Ruby's work contributes to a digital economy worth{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                $18.3 billion
              </span>
              , enabling Nigeria to compete on a global scale while empowering communities across{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                9 countries
              </span>
              ."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Expertise & Journey
          </motion.h2>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 backdrop-blur-sm border border-neutral-700 rounded-3xl p-8 hover:border-neutral-600 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex items-center gap-6 lg:min-w-[300px]">
                      <div className={`p-4 bg-gradient-to-r ${section.accent} rounded-2xl`}>
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {section.title}
                        </h3>
                        <p className="text-sm text-neutral-400 font-medium">
                          {section.stats}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-lg text-neutral-300 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Projects & Impact
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Explore the comprehensive portfolio of impactful projects and initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href="#"
                className="group relative bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 backdrop-blur-sm border border-neutral-700 rounded-2xl p-6 hover:border-neutral-600 transition-all duration-300 block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project}
                  </h3>
                  <ArrowUpRight 
                    size={20} 
                    className="text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                  />
                </div>
                <p className="text-neutral-400 text-sm">
                  Explore the impact and insights from this initiative
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <motion.section
        className="py-32 bg-neutral-900"
        style={{ y: y2 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Let's Create Impact Together
            </h2>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss innovative solutions in education, technology, and social impact? 
              Let's start a conversation that could transform communities.
            </p>
            
            <motion.button
              className="group px-12 py-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <span className="flex items-center gap-3">
                <Sparkles size={24} />
                Start a Conversation
                <ArrowUpRight size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AwardWinningPortfolio;