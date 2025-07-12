import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun, Github, Linkedin, Download, ChevronDown, Sparkles } from 'lucide-react';
const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setCurrentStep(1);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentStep(2);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentStep(3);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentStep(4);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowIntro(false);
    };
    sequence();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
    <motion.span
      variants={typewriterVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );

  const FloatingParticle = ({ className, delay = 0 }: { className: string; delay?: number }) => (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
    />
  );

  if (showIntro) {
    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <FloatingParticle
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              delay={i * 0.2}
            />
          ))}
        </div>

        {/* Cursor Trail Effect */}
        <motion.div
          className="fixed w-4 h-4 bg-primary/50 rounded-full pointer-events-none z-50 mix-blend-difference"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          {currentStep >= 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-8"
            >
              <span className="text-6xl mb-4 block">🌀</span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                <TypewriterText text="Hi, I'm Meet 👋" />
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary font-medium">
                <TypewriterText text="Welcome to my Portfolio Website!" delay={1} />
              </h2>
            </motion.div>
          )}

          {currentStep >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <span className="text-4xl mb-4 block">💼</span>
              <h3 className="text-xl md:text-2xl text-accent font-medium">
                <TypewriterText text="Data Analyst | Product Enthusiast | Cloud & BI Explorer" delay={0.5} />
              </h3>
            </motion.div>
          )}

          {currentStep >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <span className="text-4xl mb-4 block">🌐</span>
              <p className="text-lg md:text-xl text-muted-foreground">
                <TypewriterText text="Based in Boston, MA – solving problems with data, logic, and creativity." delay={0.5} />
              </p>
            </motion.div>
          )}

          {currentStep >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-4xl mb-4 block">🧠</span>
              <p className="text-lg text-muted-foreground mb-8">
                <TypewriterText text="Scroll to explore my journey, skills, and projects." delay={0.5} />
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <ChevronDown className="w-8 h-8 mx-auto text-primary animate-bounce" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100],
              y: [0, Math.random() * 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
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

      {/* Gradient Wave */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20"
          animate={{
            background: [
              "linear-gradient(45deg, hsl(var(--primary)/0.2), hsl(var(--accent)/0.2), hsl(var(--primary)/0.2))",
              "linear-gradient(225deg, hsl(var(--accent)/0.2), hsl(var(--primary)/0.2), hsl(var(--accent)/0.2))",
              "linear-gradient(45deg, hsl(var(--primary)/0.2), hsl(var(--accent)/0.2), hsl(var(--primary)/0.2))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Theme Toggle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-8 right-8 flex items-center space-x-2 bg-background/80 backdrop-blur-md rounded-full p-3 border border-border/50"
      >
        <Sun className="h-4 w-4 text-yellow-500" />
        <Switch 
          checked={isDarkMode} 
          onCheckedChange={setIsDarkMode} 
          className="data-[state=checked]:bg-slate-800" 
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
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-muted-foreground">Available for hire</span>
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-4xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Hi! I Am
              <br />
              <motion.span
                className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Meet Patel
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-xl text-muted-foreground max-w-md"
            >
              A Data Analyst based in Boston, MA, passionate about leveraging data, 
              cloud, and analytics to solve complex business challenges and drive innovation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
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
            transition={{ delay: 1.3 }}
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
                transition={{ delay: 1.5 + index * 0.2 }}
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
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
              {[...Array(5)].map((_, i) => (
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
        transition={{ delay: 2 }}
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