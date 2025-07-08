
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Linkedin, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            Meet<span className="text-orange-500">Patel</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="hover:bg-blue-50 hover:text-blue-600"
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
              variant="outline" 
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              <a href="#contact" className="flex items-center gap-2">
                Contact Me
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 mt-4">
              <Button
                asChild
                variant="ghost"
                className="justify-start hover:bg-blue-50 hover:text-blue-600"
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
                variant="outline" 
                className="justify-start border-primary text-primary"
              >
                <a
                  href="/meetpatelResume.pdf"
                  download="meetpatelResume.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
              <Button 
                asChild
                className="justify-start bg-primary hover:bg-primary/90"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
