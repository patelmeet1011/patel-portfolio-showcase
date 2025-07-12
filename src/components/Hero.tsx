import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun, Github, Linkedin, Download, ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const texts = [
    "Hi, I'm Meet 👋 – Welcome to My Portfolio",
    "Data Analyst | Product Enthusiast | Cloud & BI Explorer",
    "Based in Boston, MA – solving problems with data, logic, and creativity"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Custom Particle Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100],
              y: [0, Math.random() * 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Parallax Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
          style={{ y: scrollY * 0.5 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl"
          style={{ y: scrollY * 0.3 }}
        />
      </div>

      {/* Theme Toggle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-8 right-8 flex items-center space-x-2 bg-background/80 backdrop-blur-md rounded-full p-3 border border-border/50 z-20"
      >
        <Sun className="h-4 w-4 text-yellow-500" />
        <Switch 
          checked={isDarkMode} 
          onCheckedChange={setIsDarkMode} 
        />
        <Moon className="h-4 w-4 text-slate-600" />
      </motion.div>

      {/* Floating Social Icons */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 space-y-4 z-20">
        {[
          { icon: Github, href: "https://github.com/meetpatel0963", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/meetpatel0963/", label: "LinkedIn" },
          { icon: Download, href: "/meetpatelResume.pdf", label: "Resume" },
        ].map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.2 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="block p-3 bg-background/80 backdrop-blur-md rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 group"
          >
            <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>
        ))}
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-muted-foreground">Available for hire</span>
          </motion.div>
          
          {/* Animated Title with Typewriter Effect */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="min-h-[120px] lg:min-h-[160px]"
            >
              <motion.h1
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl lg:text-5xl font-bold text-foreground leading-tight"
              >
                {texts[currentText]}
                <motion.span
                  className="text-primary"
                  animate={{ opacity: showCursor ? 1 : 0 }}
                >
                  |
                </motion.span>
              </motion.h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={scrollToAbout}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get to Know Me
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                className="px-8 py-3 rounded-full border-2 hover:bg-primary/10 transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex items-center space-x-8 pt-8"
          >
            {[
              { number: "2+", label: "Years Experience" },
              { number: "10+", label: "Projects Done" },
              { number: "50+", label: "Happy Clients" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.2 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-foreground relative">
                  {stat.number}
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Profile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
          style={{ y: scrollY * 0.1 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative z-10"
          >
            <motion.div
              className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm border border-primary/20"
              animate={{
                boxShadow: [
                  "0 25px 50px -12px hsl(var(--primary)/0.25)",
                  "0 25px 50px -12px hsl(var(--accent)/0.25)",
                  "0 25px 50px -12px hsl(var(--primary)/0.25)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Floating Sparkles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    rotate: [0, 360],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  <Sparkles className="w-4 h-4 text-primary/50" />
                </motion.div>
              ))}
              
              <div className="text-center z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-2xl ring-4 ring-primary/20 transition-all duration-500 relative"
                >
                  <img 
                    src="/lovable-uploads/eb8c85a5-cc25-44c1-802d-330e20a9070b.png" 
                    alt="Meet Patel - Data Analyst" 
                    className="w-full h-full object-cover" 
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  className="text-foreground font-medium"
                >
                  Meet Patel
                </motion.p>
                <p className="text-muted-foreground text-sm mt-1">Data Analytics Expert</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;