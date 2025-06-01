"use client";
import { motion } from 'framer-motion';
import { FC } from 'react';
import { ExternalLink, ChevronRight, Award, BookOpen, Users, Briefcase, GraduationCap, Heart } from 'lucide-react';

const RubyPortfolio: FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Data for the sections
  const sections = [
    {
      title: 'Expertise & Recognition',
      icon: <Award size={20} />,
      content: 'Her core expertise lies in educational innovation, digital transformation, data governance and analytics.'
    },
    {
      title: 'Education',
      icon: <GraduationCap size={20} />,
      content: 'Ruby received her Bsc in Economics from the University of Lagos and a Diploma in Finance from the University of Lagos. Ruby is also an Associate Accounting Technician and a Professional Chartered account certified by the Institute of Chartered Accountants of Nigeria.'
    },
    {
      title: 'Work Experience',
      icon: <Briefcase size={20} />,
      content: 'Ruby has over 6 years of consulting experience. Prior to starting Digitaley Drive. She played a big role in the technology sector as a data analytics & insights expert. Supporting firms with core analytics and reporting expertise needed to launch, scale and sustain. She started in KPMG, and moved up to 4 corporate organizations until Knight Ventures. While she was at knight ventures, she supported tech enabled startups across the education, fintech and energy sector in achieving Product Market Fit through various methodologies, research and evaluation.'
    },
    {
      title: 'Impact',
      icon: <Users size={20} />,
      content: 'Ruby is committed to promoting Quality Education through her Edtech Startup. So far, she has trained over 18000 talents across Kenya, Ghana, Nigeria, Uk, USA, Dubai, South Africa, Botswana, and Uganda, and has powered a community of 100,000+ youths. Her work has gained recognition in platforms like Guardian Nigeria, Techpoint, Nigerian Tribune, SuperFM, Numeris, Top Fm. Her groundbreaking idea has also been supported by the Lagos Innovates under the InnovateHer Female Founders Program. She was also recognised as a Top Female founder by the Flutter wave & Wetech PitchHER initiative.'
    },
    {
      title: 'Grow4her and Programs',
      icon: <Heart size={20} />,
      content: 'Building on her foundation as an education activist, she is also passionate about women empowerment. Of which she co-founded grow4her, a not for profit organization that is on a mission to empower every girl child by creating opportunities for them to learn, grow and thrive. Ruby\'s strong advocacy for social impact, started at the age of 16 under the Reachingoutforlove foundation, where she donated educational books to underprivileged children and supported multiple outreaches centered around feeding, and child education. In 2022, she served under the Model United Nations (Lagos) where she contributed towards the draft writing on human trafficking and systematic racism. And today, through Grow4her, she has initiated and executed impactful educational programs that has empowered over 5,000 women to date. In her free time, she writes articles that promote women empowerment and addresses key issues in education. She also loves reading books, and traveling round the world to lend her voice on key global issues.'
    }
  ];

  // Data for the bottom links
  const bottomLinks = [
    'Article Features', 
    'Impact (Project EducateTheChild)', 
    'Impact (Project EmpowerHer)', 
    'Impact (Project 10,000 women in tech)',
    'Speaking',
    'Blog',
    'Technical Portfolio'
  ];

  return (
    <div className="text-white w-full min-h-screen px-6 sm:px-8 py-16 md:py-24">
      {/* Main content container */}
      <div className="container mx-auto max-w-7xl text-stone-100">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] mb-12"
            variants={itemVariants}
          >
            RUBY IHEKWEME
          </motion.h1>
          
          <motion.div
            className="max-w-4xl"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-stone-300 mb-8">
              Founder & Managing Director, Digitaley Drive
            </h2>
          </motion.div>
        </motion.div>
        
        {/* Main Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16">
          {/* Left Column - Sticky */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-24">
              {/* Animated Circles */}
              <motion.div 
                className="mb-8 relative h-24 w-24"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  className="w-20 h-20 border border-stone-400/30 rounded-full absolute"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                />
                <motion.div 
                  className="w-16 h-16 border border-stone-400/20 rounded-full absolute top-2 left-2"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                />
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-stone-300">Connect</h3>
                  <button className="group flex items-center gap-3 px-6 py-3 bg-stone-800/50 hover:bg-stone-700/50 rounded-lg transition-all duration-300 border border-stone-700/30 hover:border-stone-600/50">
                    <span className="text-sm font-light">Get in Touch</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                <div className="pt-8 border-t border-stone-700/30">
                  <div className="space-y-3 text-sm text-stone-400">
                    <div>18,000+ Talents Trained</div>
                    <div>100,000+ Community Members</div>
                    <div>$18.3B Digital Economy Impact</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-8">
            <motion.div
              className="space-y-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Quote Section */}
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-stone-200">
                  "A strong brand is a tool to connect people with your brand all around the world."
                </h3>
                
                <div className="bg-stone-800/30 rounded-2xl p-8 border border-stone-700/20">
                  <p className="text-lg font-light leading-relaxed text-stone-300">
                    Ruby Ihekweme is the Founder & CEO of DigitaleyDrive, an edtech startup that powers the African Education sector, by combining the power of artificial intelligence, gamification and community learning to create a personalised, engaging and transformational learning experience, allowing Nigeria to compete on a global scale, and contributing to the digital economy of <span className="font-medium text-white">$18.3 billion.</span>
                  </p>
                </div>
              </div>
              
              {/* Expertise sections */}
              <motion.div
                className="space-y-12"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {sections.map((section, index) => (
                  <motion.div 
                    key={index}
                    className="group"
                    variants={itemVariants}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 p-3 bg-stone-800/40 rounded-xl border border-stone-700/30 group-hover:border-stone-600/50 transition-colors">
                        {section.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-light text-stone-200 mb-3">{section.title}</h4>
                        <p className="text-stone-400 leading-relaxed font-light">{section.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Links Section */}
        <motion.div
          className="mt-24 pt-16 border-t border-stone-700/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h4 className="text-2xl font-light mb-8 text-stone-200">Portfolio Links</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bottomLinks.map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="group flex items-center justify-between px-6 py-4 bg-stone-800/30 hover:bg-stone-700/40 rounded-xl border border-stone-700/20 hover:border-stone-600/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.05 }}
              >
                <span className="text-stone-300 font-light">{link}</span>
                <ChevronRight size={16} className="text-stone-500 group-hover:text-stone-300 group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RubyPortfolio;

