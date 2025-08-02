import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ArrowDown,
  Sparkles,
  Database,
  Cloud,
  BarChart
} from 'lucide-react';
const meetProfileImage = '/lovable-uploads/3ba80543-d670-4d85-829e-0db6a15a6b85.png';

const MasterfulHero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  const roles = [
    "Data Analyst",
    "Business Intelligence Specialist", 
    "Cloud Solutions Architect"
  ];

  const skillBadges = [
    { text: "Python", icon: Database, color: "bg-blue-500/10 text-blue-600 border-blue-200" },
    { text: "SQL Expert", icon: Database, color: "bg-emerald-500/10 text-emerald-600 border-emerald-200" },
    { text: "AWS Cloud", icon: Cloud, color: "bg-orange-500/10 text-orange-600 border-orange-200" },
    { text: "Tableau", icon: BarChart, color: "bg-purple-500/10 text-purple-600 border-purple-200" },
    { text: "Power BI", icon: BarChart, color: "bg-red-500/10 text-red-600 border-red-200" },
    { text: "Machine Learning", icon: Sparkles, color: "bg-pink-500/10 text-pink-600 border-pink-200" }
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
    <motion.section 
      style={{ opacity, scale }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
    >
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left Content */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge 
                  variant="outline" 
                  className="border-primary/30 text-primary bg-primary/5 px-6 py-3 text-sm font-medium elegant-border"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Available for opportunities
                </Badge>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-6">
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Hello, I'm{' '}
                  <motion.span 
                    className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent block mt-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Meet Patel
                  </motion.span>
                </motion.h1>

                {/* Animated Role with enhanced typography */}
                <motion.div
                  className="h-20 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light mr-4">I'm a</span>
                  <motion.span
                    key={currentRole}
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary"
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20, rotateX: 90 }}
                    transition={{ duration: 0.6 }}
                  >
                    {roles[currentRole]}
                  </motion.span>
                </motion.div>
              </div>

              {/* Skill Badges with staggered animation */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {skillBadges.map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.8 + index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Badge className={`${badge.color} px-4 py-2 cursor-default elegant-border hover-scale`}>
                      <badge.icon className="w-3 h-3 mr-2" />
                      {badge.text}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Description */}
              <motion.p
                className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Transforming complex data into strategic insights with 2+ years of experience. 
                Passionate about leveraging cloud technologies and advanced analytics to drive 
                <span className="text-primary font-medium"> measurable business growth</span>.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 group px-8 py-6 text-lg font-medium elegant-shadow hover:elegant-shadow-hover"
                    onClick={scrollToAbout}
                  >
                    Explore My Work
                    <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild
                    className="px-8 py-6 text-lg font-medium elegant-border hover:bg-primary/5 hover:text-primary group"
                  >
                    <a href="/meetpatelResume.pdf" download>
                      <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                      Resume
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links with enhanced design */}
              <motion.div
                className="flex gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                {[
                  { icon: Github, href: "https://github.com/patelmeet1011", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/meet-patel-7581b31b9/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:patelmeet1348@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Button
                      variant="ghost"
                      size="lg"
                      asChild
                      className="w-12 h-12 p-0 hover:bg-primary/10 hover:text-primary group rounded-full"
                    >
                      <a 
                        href={social.href}
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Enhanced Profile Image */}
            <motion.div
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Rotating rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/20"
                  style={{ padding: '30px' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/10"
                  style={{ padding: '60px' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Enhanced Profile Image */}
                <motion.div
                  className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden elegant-border elegant-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.img
                    src={meetProfileImage}
                    alt="Meet Patel"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                </motion.div>

                {/* Floating accent elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full elegant-shadow"
                  animate={{
                    y: [-8, 8, -8],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-4 h-4 bg-primary/70 rounded-full"
                  animate={{
                    y: [8, -8, 8],
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

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-light tracking-wider">Discover More</span>
            <motion.div
              className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-3 bg-current rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MasterfulHero;