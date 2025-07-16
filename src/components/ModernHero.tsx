import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import Scene3D from './Scene3D';

const ModernHero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MP</span>
            </div>
            <span className="font-display font-medium text-foreground">Meet Patel</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-6"
          >
            <a 
              href="https://github.com/patelmeet1011" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/meetpatel1011" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Menu
            </Button>
          </motion.div>
        </div>
      </nav>

      <div className="container mx-auto px-6 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-primary font-medium tracking-wide text-sm uppercase"
              >
                Meet Patel
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl lg:text-7xl font-display font-semibold text-foreground leading-tight"
              >
                Hello, I'm a{' '}
                <span className="text-primary">Data</span>{' '}
                Analyst.
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              I'm a passionate data analyst with 2+ years of experience transforming 
              complex datasets into actionable insights. Specialized in business intelligence, 
              cloud technologies, and data visualization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                className="px-8 py-3 rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-8"
            >
              <button
                onClick={scrollToAbout}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-sm font-medium">Scroll down</span>
                <ArrowDown className="w-4 h-4 group-hover:transform group-hover:translateY-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Content - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[600px] rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl opacity-90" />
            <Scene3D />
            
            {/* Decorative elements */}
            <div className="absolute top-8 left-8 w-4 h-4 bg-white/30 rounded-full" />
            <div className="absolute bottom-12 right-12 w-6 h-6 bg-accent/60 rounded-full" />
            <div className="absolute top-1/2 right-8 w-2 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ModernHero;