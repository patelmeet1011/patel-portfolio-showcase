import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun, Github, Linkedin, FileText, ChevronDown } from 'lucide-react';
const EnhancedHero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Hi, I'm Meet 👋 — Welcome to my Portfolio Website!", "Data Analyst | Product Enthusiast | Cloud & BI Explorer", "Based in Boston, MA – solving problems with data, logic, and creativity.", "Scroll to explore my journey, skills, and projects."];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-primary/20 rounded-full" initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0
      }} animate={{
        y: [null, -100, null],
        opacity: [0, 1, 0]
      }} transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}
      </div>

      {/* Theme Toggle */}
      <motion.div initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      delay: 1,
      duration: 0.5
    }} className="absolute top-8 right-8 flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full p-3 z-20">
        <Sun className="h-4 w-4 text-yellow-500" />
        <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} className="data-[state=checked]:bg-slate-800" />
        <Moon className="h-4 w-4 text-slate-600" />
      </motion.div>

      {/* Floating Social Icons */}
      

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Availability Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="flex items-center space-x-2">
            <motion.div animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-gray-600">Available for hire</span>
          </motion.div>
          
          {/* Animated Text Content */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-6">
            <motion.h1 key={currentText} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.8
          }} className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {currentText === 0 && <span className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent">
                  {texts[0]}
                </span>}
              {currentText === 1 && <span className="text-foreground">
                  {texts[1]}
                </span>}
              {currentText === 2 && <span className="text-muted-foreground text-xl">
                  {texts[2]}
                </span>}
              {currentText === 3 && <span className="text-primary text-lg">
                  {texts[3]}
                </span>}
            </motion.h1>
          </motion.div>

          {/* Action Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex flex-wrap gap-4">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button onClick={scrollToAbout} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Get to Know Me
              </Button>
            </motion.div>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button variant="outline" className="px-8 py-3 rounded-full border-2 hover:bg-primary/10 transition-all duration-300">
                View Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="flex items-center space-x-8 pt-8">
            {[{
            number: "2+",
            label: "Years Experience"
          }, {
            number: "10+",
            label: "Projects Done"
          }, {
            number: "50+",
            label: "Happy Clients"
          }].map((stat, index) => <motion.div key={index} initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.8 + index * 0.1
          }} className="text-center">
                <motion.div whileHover={{
              scale: 1.1
            }} className="text-2xl font-bold text-foreground relative">
                  {stat.number}
                  <motion.div animate={{
                scale: [1, 1.5, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5
              }} className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>)}
          </motion.div>
        </div>

        {/* Right Content - Enhanced Profile */}
        <motion.div initial={{
        opacity: 0,
        x: 50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="relative">
          <motion.div whileHover={{
          scale: 1.02,
          rotateY: 5
        }} transition={{
          duration: 0.3
        }} className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm border border-white/20">
            {/* Floating Elements */}
            {[...Array(6)].map((_, i) => <motion.div key={i} className={`absolute w-${2 + i % 3} h-${2 + i % 3} bg-gradient-to-r from-primary/30 to-accent/30 rounded-full`} animate={{
            y: [0, -20, 0],
            rotate: [0, 360]
          }} transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5
          }} style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 12}%`
          }} />)}
            
            <div className="text-center z-10">
              <motion.div whileHover={{
              scale: 1.1,
              rotate: 2
            }} className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-2xl ring-4 ring-primary/20 relative">
                <img src="/lovable-uploads/eb8c85a5-cc25-44c1-802d-330e20a9070b.png" alt="Meet Patel - Data Analyst" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <p className="text-foreground font-medium">Meet Patel</p>
              <p className="text-muted-foreground text-sm mt-1">Data Analytics Expert</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 1.2
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToAbout}>
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll down</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>;
};
export default EnhancedHero;