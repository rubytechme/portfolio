"use client";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FC, useState, useEffect } from 'react';
import { ExternalLink, ChevronRight, Award, BookOpen, Users, Briefcase, GraduationCap, Heart, Sparkles, ArrowUp, Instagram, Linkedin, Github, Twitter, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
// Data for sections with enhanced content
const sections = [
  {
    content: 'Her core expertise lies in educational innovation, digital transformation, data governance and analytics.'
  },
  {
    content: 'Ruby received her BSc in Economics from the University of Lagos and a Diploma in Finance. She is an Associate Accounting Technician and Professional Chartered Accountant certified by Institute of Chartered Accountants of NigeriaRuby has over 6 years of consulting experience. Prior to starting Digitaley Drive. She played a big role in the technology sector as a data analytics & insights expert. Supporting firms with core analytics and reporting expertise needed to launch, scale and sustain. She started in KPMG, and moved up to 4 corporate organizations until Knight Ventures.'
  },
  {
    content: 'While she was at knight ventures, she supported tech enabled startups across the education, fintech and energy sector in achieving Product Market Fit through various methodologies, research and evaluation. '
  },
  {
    content: 'Ruby is committed to promoting Quality Education through her Edtech Startup. So far, she has trained over 18000 talents across South Africa, Pakistan, Nigeria, Uk, Kenya, Ghana, USA, Dubai, Botswana, and Uganda, and has powered a community of 100,000+ youths. '
  },
  {
    content: 'Her work has gained recognition in platforms like Guardian Nigeria, Techpoint, Nigerian Tribune, SuperFM, Numeris, Top Fm. Her groundbreaking idea has also been supported by the Lagos Innovates under the InnovateHer Female Founders Program. She was also recognised as a Top Female founder by the Flutter wave & Wetech PitchHER initiative. '
  },
  {
    title: "Impact programs",
    content: "Building on her foundation as an education activist, she is also passionate about women empowerment. Of which she co-founded grow4her, a not for profit organization that is on a mission to empower every girl child by creating opportunities for them to learn, grow and  thrive."
  },
  {
    content: "Ruby’s strong advocacy for social impact, started at the age of 16 under the Reachingoutforlove foundation, where she donated educational books to underprivileged children and supported multiple outreaches centered around feeding, and child education. In 2022, she served under the Model United Nations ( Lagos) where she contributed towards the draft writing on human trafficking and systematic racism.."
  },
  {
    content: "And today, through Grow4her, she has initiated and executed impactful educational programs that has empowered over 5,000 women to date."
  },
  {
    content: "In her free time, she writes articles that promote women empowerment and addresses key issues in education. She also loves reading books, and traveling round the world to lend her voice on key global issues."
  }
];

const bottomLinks = [
  { 
    title: 'Article Features', 
    icon: <BookOpen size={16} />, 
    color: 'from-gray-400 to-gray-600',
    url: 'https://sites.google.com/view/articlesfeatures/home',
    description: 'Collection of articles and media features'
  },
  { 
    title: 'Project EducateTheChild', 
    icon: <Heart size={16} />, 
    color: 'from-pink-400 to-pink-600',
    url: 'https://sites.google.com/view/projectempowerher/home',
    description: 'Empowering young girls and boys in primary and secondary schools with study tools'
  },
  { 
    title: 'Project EmpowerHer', 
    icon: <Users size={16} />, 
    color: 'from-purple-400 to-purple-600',
    url: 'https://sites.google.com/view/project-empowerher/home',
    description: 'Empowering 300 youths from Ingressive4Good community in higher institutions'
  },
  { 
    title: '10,000 Women in Tech', 
    icon: <Award size={16} />, 
    color: 'from-blue-400 to-blue-600',
    url: 'https://sites.google.com/view/projectwomenintechtestimonial/home',
    description: 'Getting 10,000 women into tech by 2025. 5,000+ trained in AI, Data Analytics & Data Science'
  },
  { 
    title: 'Speaking Engagements', 
    icon: <Users size={16} />, 
    color: 'from-green-400 to-green-600',
    url: 'https://sites.google.com/view/speakingengament/home',
    description: 'Ruby\'s speaking portfolio and engagements'
  },
  { 
    title: 'Blog & Articles', 
    icon: <BookOpen size={16} />, 
    color: 'from-indigo-400 to-indigo-600',
    url: 'https://medium.com/@rubyugonnaya',
    description: 'Personal blog and thought leadership articles'
  },
  { 
    title: 'Technical Portfolio', 
    icon: <Briefcase size={16} />, 
    color: 'from-teal-400 to-teal-600',
    url: '',
    description: 'Technical projects and development work'
  }
];

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



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
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
                <div className='w-full md:w-88 h-auto mb-8'>
                  <Image
                    src="/Passport from WhatsApp.JPG"
                    alt="Ruby Ihekweme"
                    width={384}
                    height={384}
                    className="w-full h-full max-h-96 object-cover rounded-xl md:rounded-3xl"
                  />
                </div>
                <div className="relative z-10 mb-0 md:mb-8">
                  <motion.h1
                    className="text-6xl sm:text-5xl font-black leading-[0.9] mb-8 text-white"
                    variants={itemVariants}
                  >
                    RUBY
                    {/* <br /> */}{" "}
                    <span className="text-white">
                      IHEKWEME
                    </span>
                  </motion.h1>

                  <motion.div
                    className="mb-8"
                    variants={itemVariants}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2">
                      Founder & Managing Director
                    </h2>
                    <div className="flex items-center gap-3">
                      {/* <div className="h-px bg-white flex-1"></div> */}
                      <span className="text-2xl md:text-3xl text-white font-bold">
                        Digitaley Drive
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Main Content */}
          <div className="gap-8 lg:gap-12">
            {/* Enhanced Sidebar */}
            {/* <div className="lg:col-span-1 order-2 lg:order-1">
              <motion.div 
                className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 sticky top-8 overflow-hidden"
                initial={{ opacity: 0, x: -50, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
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
                  className="text-xl font-light text-center text-white mb-10 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Education Technology
                  <br />
                  <span className="text-white font-medium">
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
             */}
            {/* Enhanced Main Content */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              {/* Enhanced Quote Section */}
              <motion.div
                className="md:p-8 py-0"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* <motion.div
                  className="absolute top-6 left-6 text-6xl text-blue-400/20 font-serif"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  "
                </motion.div> */}

                {/* <motion.h3 
                  className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10 text-white relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  A strong brand is a tool to connect people with your vision all around the world.
                </motion.h3> */}

                <motion.div
                  className="relative z-10 mb-8 w-full"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="">
                    <p className="text-lg md:text-2xl text-white font-bold mb-2 leading-relaxed">Biography</p>
                    <p className="text-lg md:text-2xl text-white font-light leading-relaxed">
                      Ruby Ihekweme is the Founder & CEO of DigitaleyDrive, an edtech startup that powers the African Education sector by combining artificial intelligence, gamification and community learning to create personalized, engaging experiences, contributing
                      <span className="font-bold text-xl md:text-2xl mx-2">
                        $18.3 billion
                      </span>
                      to Nigeria's digital economy.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Sections */}
              <motion.div
                className="md:p-10 relative overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <div className="relative z-10">
                  <motion.div
                    className="space-y-6"
                    variants={cardVariants}
                  >
                    {sections.map((section, index) => (
                      <motion.p
                        key={index}
                        className="text-white leading-relaxed text-lg md:text-2xl font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                      >
                        {
                          section.title &&
                          <span className="font-bold text-2xl md:text-3xl block mb-2 mt-20">
                            {section.title}
                          </span>
                        }
                        {section.content}
                      </motion.p>
                    ))}
                  </motion.div>
                </div>
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
              className="md:p-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <motion.h4
                className="text-3xl md:text-4xl font-bold mb-12 text-white md:text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
              >
                Portfolio
              </motion.h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {bottomLinks.map((link, index) => {
                  const Component = link.url ? motion.a : motion.div;
                  const linkProps = link.url ? {
                    href: link.url,
                    target: "_blank",
                    rel: "noopener noreferrer"
                  } : {};

                  return (
                    <Component
                      key={index}
                      {...linkProps}
                      className={`group relative backdrop-blur-xl bg-gradient-r from-${link.color} border border-white/10 rounded-xl p-6 overflow-hidden cursor-pointer`}
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

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <motion.div
                            className={`p-3 rounded-md bg-gradient-to-r ${link.color} bg-opacity-20`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {link.icon}
                          </motion.div>
                          {link.url && (
                            <motion.div
                              className="text-white group-hover:text-white transition-colors duration-300"
                              whileHover={{ x: 8 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ExternalLink size={16} />
                            </motion.div>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h5 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-2">
                            {link.title}
                          </h5>
                          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                            {link.description}
                          </p>
                          {!link.url && (
                            <p className="text-white/50 text-xs mt-2 italic">
                              Coming Soon
                            </p>
                          )}
                        </div>
                      </div>
                    </Component>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Section */}
          <motion.footer
            className="mt-32 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* Contact Information */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.1 }}
                >
                  <h5 className="text-2xl font-bold text-white mb-6">Get in Touch</h5>
                  
                  <motion.a
                    href="mailto:ruby.ihekweme@digitaleydrive.com"
                    className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Mail size={18} />
                    </div>
                    <span className="text-lg">ruby.ihekweme@digitaleydrive.com</span>
                  </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                >
                  <h5 className="text-2xl font-bold text-white mb-6">Connect</h5>
                  
                  <div className="flex flex-wrap gap-4">
                    {[
                      { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/ruby-ihekweme-aat-aca-b25001174/' },
                      { name: 'Instagram', icon: <Instagram size={18} />, url: 'https://www.instagram.com/rubydeeglobal/' },
                      { name: 'Substack', icon: <BookOpen size={18} />, url: 'https://substack.com/@digitaleydrive' },
                      { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/rubytechme' },
                      { name: 'Medium', icon: <BookOpen size={18} />, url: 'https://medium.com/@rubyugonnaya' },
                      { name: 'Twitter', icon: <Twitter size={18} />, url: 'https://x.com/rubytechme?s=21' }
                    ].map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white transition-colors group bg-white/10 hover:bg-white/20 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        exit={{ opacity: 0, y: 20 }}
                      >
                        {social.icon}
                        <span className="text-sm font-medium">{social.name}</span>
                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
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
                transition={{ delay: 2.4 }}
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

export default RubyPortfolio;