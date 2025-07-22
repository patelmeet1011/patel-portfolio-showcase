import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const EnhancedHero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Data Analyst",
    "Business Intelligence Specialist", 
    "Cloud Specialist (AWS, Azure, GCP)"
  ];

  const roleBadges = [
    { text: "Data Analyst", color: "bg-blue-500 hover:bg-blue-600" },
    { text: "BI Specialist", color: "bg-purple-500 hover:bg-purple-600" },
    { text: "Cloud Expert", color: "bg-green-500 hover:bg-green-600" },
    { text: "SQL Developer", color: "bg-orange-500 hover:bg-orange-600" },
    { text: "Python Developer", color: "bg-red-500 hover:bg-red-600" },
    { text: "Tableau Expert", color: "bg-teal-500 hover:bg-teal-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge 
                  variant="outline" 
                  className="border-primary/50 text-primary bg-primary/10 px-4 py-2 text-sm font-medium"
                >
                  🚀 Available for hire
                </Badge>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Hello, I'm{' '}
                  <span className="gradient-text block mt-2">
                    Meet Patel
                  </span>
                </motion.h1>

                {/* Animated Role */}
                <motion.div
                  className="h-16 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-2xl md:text-3xl text-muted-foreground mr-4">I'm a</span>
                  <motion.span
                    key={currentRole}
                    className="text-2xl md:text-3xl font-semibold text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {roles[currentRole]}
                  </motion.span>
                </motion.div>
              </div>

              {/* Role Badges */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {roleBadges.map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      className={`${badge.color} text-white border-0 px-4 py-2 cursor-default transition-all duration-300 hover-scale`}
                    >
                      {badge.text}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Transforming complex data into actionable insights and driving business growth. 
                2+ years of experience in data analytics with expertise in SQL, Python, and cloud platforms.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 group px-8 py-6 text-lg font-medium"
                  onClick={scrollToAbout}
                >
                  View My Work
                  <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="px-8 py-6 text-lg font-medium border-2 hover:bg-primary hover:text-primary-foreground group"
                >
                  <a href="/meetpatelResume.pdf" download>
                    <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary group"
                >
                  <a 
                    href="https://github.com/patelmeet1011" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
                
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary group"
                >
                  <a 
                    href="https://www.linkedin.com/in/meet-patel-7581b31b9/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
                
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary group"
                >
                  <a 
                    href="mailto:patelmeet1348@gmail.com"
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Animated rings around the image */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  style={{ padding: '20px' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-accent/30"
                  style={{ padding: '40px' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Profile Image - Using placeholder for now */}
                <motion.div
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-6xl font-bold text-primary">MP</div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </motion.div>

                {/* Floating elements around image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full shadow-lg"
                  animate={{
                    y: [-10, 10, -10],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full shadow-lg"
                  animate={{
                    y: [10, -10, 10],
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium">Scroll down</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedHero;