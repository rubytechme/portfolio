
"use client";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FC, useState, useEffect } from 'react';
import { ExternalLink, ChevronRight, Award, BookOpen, Users, Briefcase, GraduationCap, Heart, Sparkles, ArrowUp } from 'lucide-react';

const RubyPortfolio: FC = () => {
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

  // Data for sections with enhanced content
  const sections = [
    {
      title: 'Expertise & Recognition',
      icon: <Award size={20} />,
      content: 'Her core expertise lies in educational innovation, digital transformation, data governance and analytics. Recognized as a leading voice in African EdTech.',
      gradient: 'from-blue-500/20 via-cyan-500/15 to-purple-600/20',
      accentColor: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Education',
      icon: <GraduationCap size={20} />,
      content: 'Ruby received her BSc in Economics from the University of Lagos and a Diploma in Finance. She is an Associate Accounting Technician and Professional Chartered Accountant certified by ICAN.',
      gradient: 'from-emerald-500/20 via-teal-500/15 to-green-600/20',
      accentColor: 'from-emerald-400 to-teal-400'
    },
    {
      title: 'Work Experience',
      icon: <Briefcase size={20} />,
      content: 'With over 6 years of consulting experience, Ruby has been instrumental in the technology sector as a data analytics expert. From KPMG to Knight Ventures, she has supported tech startups across education, fintech, and energy sectors.',
      gradient: 'from-orange-500/20 via-amber-500/15 to-red-600/20',
      accentColor: 'from-orange-400 to-amber-400'
    },
    {
      title: 'Global Impact',
      icon: <Users size={20} />,
      content: 'Ruby has trained over 18,000 talents across 9+ countries and powered a community of 100,000+ youths. Featured in Guardian Nigeria, Techpoint, and recognized by Lagos Innovates and FlutterWave.',
      gradient: 'from-purple-500/20 via-violet-500/15 to-pink-600/20',
      accentColor: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Social Impact & Advocacy',
      icon: <Heart size={20} />,
      content: 'Co-founder of Grow4her, empowering 5,000+ women through education. Her advocacy started at 16 with educational outreach programs and continues through global speaking engagements on education and women empowerment.',
      gradient: 'from-pink-500/20 via-rose-500/15 to-red-600/20',
      accentColor: 'from-pink-400 to-rose-400'
    }
  ];

  const bottomLinks = [
    { title: 'Article Features', icon: <BookOpen size={16} />, color: 'from-blue-400 to-cyan-400' },
    { title: 'Project EducateTheChild', icon: <Heart size={16} />, color: 'from-pink-400 to-rose-400' },
    { title: 'Project EmpowerHer', icon: <Users size={16} />, color: 'from-purple-400 to-violet-400' },
    { title: '10,000 Women in Tech', icon: <Award size={16} />, color: 'from-emerald-400 to-teal-400' },
    { title: 'Speaking Engagements', icon: <Users size={16} />, color: 'from-orange-400 to-amber-400' },
    { title: 'Blog & Articles', icon: <BookOpen size={16} />, color: 'from-indigo-400 to-purple-400' },
    { title: 'Technical Portfolio', icon: <Briefcase size={16} />, color: 'from-cyan-400 to-blue-400' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
        {/* Animated mesh gradient */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 70%)`
          }}
        />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"
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
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Grid pattern overlay */}
        {/* <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        /> */}
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: pathLength }}
      />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-shadow z-50"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative z-10 text-white w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="container mx-auto max-w-7xl text-stone-100">
          {/* Enhanced Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-20 md:mb-32"
          >
            <motion.div 
              className="relative backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 lg:p-20 overflow-hidden"
              variants={itemVariants}
            >
              {/* Animated background elements */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"
                variants={glowVariants}
                initial="initial"
                animate="animate"
              />
              <motion.div
                className="absolute top-4 right-4 text-blue-400/30"
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

              <div className="relative z-10">
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                  variants={itemVariants}
                >
                  RUBY
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    IHEKWEME
                  </span>
                </motion.h1>
                
                <motion.div
                  className="mb-8"
                  variants={itemVariants}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-2">
                    Founder & Managing Director
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="h-px bg-gradient-to-r from-blue-400 to-purple-400 flex-1"></div>
                    <span className="text-2xl md:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                      Digitaley Drive
                    </span>
                    <div className="h-px bg-gradient-to-r from-purple-400 to-pink-400 flex-1"></div>
                  </div>
                </motion.div>

                <motion.p
                  className="text-lg md:text-xl text-gray-400 font-light max-w-3xl"
                  variants={itemVariants}
                >
                  Transforming African education through AI, gamification, and community learning
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mt-20">
            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <motion.div 
                className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 sticky top-8 overflow-hidden"
                initial={{ opacity: 0, x: -50, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {/* Enhanced Animated Circles */}
                <motion.div 
                  className="mb-10 relative h-32 flex justify-center items-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                >
                  <motion.div 
                    className="w-24 h-24 rounded-full absolute border-2"
                    style={{
                      background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6), rgba(236, 72, 153, 0.6), rgba(59, 130, 246, 0.6))'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  />
                  <motion.div 
                    className="w-16 h-16 border-2 border-cyan-400/60 rounded-full absolute backdrop-blur-sm"
                    animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                    transition={{ 
                      rotate: { repeat: Infinity, duration: 25, ease: "linear" },
                      scale: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    }}
                  />
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full absolute"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3, 
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                <motion.h3
                  className="text-xl font-light text-center text-gray-300 mb-10 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Education Technology
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                    Pioneer & Innovator
                  </span>
                </motion.h3>
                  
                <motion.button
                  className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl text-sm font-medium relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 group-hover:text-white transition-colors">
                    GET IN TOUCH
                  </span>
                </motion.button>
              </motion.div>
            </div>
            
            {/* Enhanced Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Enhanced Quote Section */}
              <motion.div
                className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-12 mb-12 relative overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.div
                  className="absolute top-6 left-6 text-6xl text-blue-400/20 font-serif"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  "
                </motion.div>
                
                <motion.h3 
                  className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  A strong brand is a tool to connect people with your vision all around the world.
                </motion.h3>
                
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/5">
                    <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
                      Ruby Ihekweme is the Founder & CEO of DigitaleyDrive, an edtech startup that powers the African Education sector by combining artificial intelligence, gamification and community learning to create personalized, engaging experiences, contributing 
                      <span className="font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mx-2">
                        $18.3 billion
                      </span>
                      to Nigeria's digital economy.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced Sections */}
              <motion.div
                className="space-y-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {sections.map((section, index) => (
                  <motion.div 
                    key={index}
                    className="group backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                      initial={false}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-6">
                        <motion.div 
                          className={`p-4 rounded-2xl bg-gradient-to-r ${section.gradient} border border-white/20 backdrop-blur-sm`}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.6 }
                          }}
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.2
                            }}
                          >
                            {section.icon}
                          </motion.div>
                        </motion.div>
                        <h4 className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${section.accentColor} bg-clip-text text-transparent`}>
                          {section.title}
                        </h4>
                      </div>
                      <motion.p 
                        className="text-gray-300 leading-relaxed text-base md:text-lg font-light pl-20"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {section.content}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* Enhanced Bottom Links */}
          <motion.div
            className="mt-24 md:mt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div 
              className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <motion.h4 
                className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
              >
                Explore My Journey
              </motion.h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {bottomLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="group relative backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-6 overflow-hidden"
                    whileHover={{ 
                      scale: 1.03, 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + index * 0.1 }}
                  >
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className={`p-3 rounded-xl bg-gradient-to-r ${link.color} bg-opacity-20`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {link.icon}
                        </motion.div>
                        <span className="font-medium text-sm md:text-base text-gray-200 group-hover:text-white transition-colors duration-300">
                          {link.title}
                        </span>
                      </div>
                      <motion.div
                        className="text-gray-400 group-hover:text-white transition-colors duration-300"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight size={18} />
                      </motion.div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RubyPortfolio;