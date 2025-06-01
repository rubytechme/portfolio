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

  // Data for the portfolio links
  const portfolioLinks = [
    { title: 'General Portfolio', icon: <Users size={18} /> },
    { title: 'Data Portfolio', icon: <BookOpen size={18} /> },
    { title: 'Linktree - General portfolio, data portfolio, the rest', icon: <ExternalLink size={18} /> },
  ];

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
    <div className="text-white w-full min-h-screen px-4 sm:px-6 py-12 md:py-20">
      {/* Main content container */}
      <div className="container mx-auto text-stone-200">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16 border-b border-stone-300 pb-12 md:pb-16"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-[600] leading-tight md:leading-[6rem] mb-8"
            variants={itemVariants}
          >
            RUBY IHEKWEME <br className="hidden sm:block" />
            <span className="text-3xl sm:text-4xl md:text-5xl font-medium">Founder & Managing Director, <br className="hidden md:block" /> Digitaley Drive</span>
          </motion.h1>
          
        </motion.div>
        
        {/* Main Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-16 relative">
          {/* Left Column */}
          <div className="col-span-1 h-fit relative border-r border-stone-300 pr-4 md:pr-8">
            {/* Animated Circles */}
            <motion.div 
              className="mb-6 relative h-24"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="w-20 h-20 border border-stone-300 rounded-full absolute"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />
              <motion.div 
                className="w-20 h-20 border border-stone-300 rounded-full absolute -rotate-[30deg]"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              />
              <motion.div 
                className="w-20 h-20 border border-stone-300 rounded-full absolute rotate-[60deg]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              />
            </motion.div>

            <motion.h2 
              className="text-2xl md:text-4xl font-light mb-4 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              RUBY IHEKWEME
            </motion.h2>
            
            <motion.h3
              className="text-lg md:text-xl font-light text-gray-300 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Founder & Managing Director, Digitaley Drive
            </motion.h3>
              
            <motion.button
              className="mt-6 px-6 py-3 border border-stone-300 rounded-md text-sm hover:bg-white hover:text-black transition-colors w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              GET IN TOUCH
            </motion.button>

            <div className="border-t border-stone-300 mt-8 md:mt-12" />
          </div>
          
          {/* Right Column */}
          <div className="md:col-span-2 pl-0 md:pl-4 mt-8 md:mt-0">
            <motion.h3 
              className="text-3xl md:text-5xl font-[500] leading-tight mb-8 md:mb-12 border-b border-stone-300 pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A strong brand is a tool to connect people with your brand all around the world.
            </motion.h3>
            
            <motion.div
              className="py-4 mb-12 rounded-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xl text-gray-300 font-[200] leading-relaxed">
                Ruby Ihekweme is the Founder & CEO of DigitaleyDrive, an edtech startup that powers the African Education sector, by combining the power of artificial intelligence, gamification and community learning to create a personalised, engaging and transformational learning experience, allowing Nigeria to compete on a global scale, and contributing to the digital economy of <span className="font-semibold">$18.3 billion.</span>
              </p>
            </motion.div>
            
            {/* Expertise sections - staggered animation */}
            <motion.div
              className="space-y-8 md:space-y-12"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {sections.map((section, index) => (
                <motion.div 
                  key={index}
                  className="p-6 rounded-md"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gray-300 p-2 rounded-md border border-stone-300">{section.icon}</span>
                    <h4 className="text-2xl font-[500]">{section.title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-md pl-14">{section.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Links Section */}
        <motion.div
          className="mt-16 md:mt-20 border-t border-stone-300 pt-10 md:pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h4 className="text-xl md:text-2xl font-light mb-6 md:mb-8">Links</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {bottomLinks.map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border border-stone-300 rounded-md hover:bg-zinc-900 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <span>{link}</span>
                <ChevronRight size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RubyPortfolio;