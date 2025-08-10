import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Linkedin, Download, Github } from 'lucide-react';

const EnhancedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Coursework', href: '#coursework' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      const lenis = (window as any).__lenis;
      if (element) {
        if (lenis?.scrollTo) {
          lenis.scrollTo(element, { offset: -80 });
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-foreground">Meet</span>
            <span className="gradient-text">Patel</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hover:bg-primary/10 hover:text-primary"
            >
              <a
                href="https://www.linkedin.com/in/meet-patel-7581b31b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hover:bg-primary/10 hover:text-primary"
            >
              <a
                href="https://github.com/patelmeet1011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="sm"
              className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href="/meetpatelResume.pdf"
                download="Meet_Patel_Resume.pdf"
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
            
            <Button 
              onClick={() => handleNavClick('#contact')}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X size={24} className="text-foreground" /> : 
              <Menu size={24} className="text-foreground" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg">
              <nav className="container mx-auto px-6 py-6">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                
                <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-border/50">
                  <Button
                    asChild
                    variant="ghost"
                    className="justify-start hover:bg-primary/10 hover:text-primary"
                  >
                    <a
                      href="https://www.linkedin.com/in/meet-patel-7581b31b9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="ghost"
                    className="justify-start hover:bg-primary/10 hover:text-primary"
                  >
                    <a
                      href="https://github.com/patelmeet1011"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Profile
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    className="justify-start border-primary/20 text-primary"
                  >
                    <a
                      href="/meetpatelResume.pdf"
                      download="Meet_Patel_Resume.pdf"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download Resume
                    </a>
                  </Button>
                  
                  <Button 
                    onClick={() => handleNavClick('#contact')}
                    className="justify-start bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Contact Me
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default EnhancedHeader;