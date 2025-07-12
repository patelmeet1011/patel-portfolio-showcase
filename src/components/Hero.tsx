import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun, Award, Code2 } from 'lucide-react';
const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="particle w-3 h-3 top-20 left-20 animate-particle-float"></div>
        <div className="particle w-2 h-2 top-1/3 right-1/4 animate-particle-float" style={{ animationDelay: '2s' }}></div>
        <div className="particle w-4 h-4 bottom-1/3 left-1/3 animate-particle-float" style={{ animationDelay: '4s' }}></div>
        <div className="particle w-1.5 h-1.5 top-1/2 right-1/3 animate-particle-float" style={{ animationDelay: '6s' }}></div>
      </div>
      
      {/* Morphing Background Shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 morphing-shape blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 morphing-shape blur-xl" style={{ animationDelay: '3s' }}></div>
      
      {/* Theme Toggle */}
      <div className="absolute top-8 right-8 flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full p-3">
        <Sun className="h-4 w-4 text-yellow-500" />
        <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} className="data-[state=checked]:bg-slate-800" />
        <Moon className="h-4 w-4 text-slate-600" />
      </div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 animate-slide-up">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Available for hire</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-text-reveal">
              Hi! I Am
              <br />
              <span className="gradient-text animate-shimmer bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent typing-cursor">
                Meet Patel
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-md">
              A Data Analyst based in Boston, MA, passionate about leveraging data, 
              cloud, and analytics to solve complex business challenges and drive innovation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-glow">
              Hire Me
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-full border-2 hover:bg-primary/10 transition-all duration-300 hover-scale">
              View Portfolio
            </Button>
          </div>

          {/* Animated Stats */}
          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center animate-counter-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-2xl font-bold text-foreground relative">
                2+
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse-ring"></div>
              </div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center animate-counter-up" style={{ animationDelay: '0.7s' }}>
              <div className="text-2xl font-bold text-foreground relative">
                10+
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse-ring"></div>
              </div>
              <div className="text-sm text-muted-foreground">Projects Done</div>
            </div>
            <div className="text-center animate-counter-up" style={{ animationDelay: '0.9s' }}>
              <div className="text-2xl font-bold text-foreground relative">
                50+
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse-ring"></div>
              </div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Right Content - Enhanced Professional Photo */}
        <div className="relative animate-slide-in-right">
          <div className="relative z-10">
            {/* Main Profile Card with Enhanced Animations */}
            <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden hover-lift glass-effect animate-glow group">
              {/* Enhanced Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full animate-float"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full animate-float" style={{
              animationDelay: '1s'
            }}></div>
              <div className="absolute top-1/2 left-2 w-3 h-3 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 right-2 w-4 h-4 bg-accent/20 rounded-full animate-bounce"></div>
              
              <div className="text-center z-10">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-2xl ring-4 ring-primary/20 hover-scale group-hover:ring-primary/40 transition-all duration-500 relative">
                  <img src="/lovable-uploads/eb8c85a5-cc25-44c1-802d-330e20a9070b.png" alt="Meet Patel - Data Analyst" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">Meet Patel</p>
                <p className="text-muted-foreground text-sm mt-1">Data Analytics Expert</p>
              </div>
            </div>
          </div>
          
          {/* Floating Awards Badge */}
          <div className="absolute -top-6 -right-6 bg-card rounded-2xl p-4 shadow-2xl border border-border hover-lift glass-effect animate-scale-in">
            
          </div>

          {/* Floating Tech Badge */}
          

          {/* Additional floating elements */}
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
          </div>
          <div className="absolute top-1/4 -left-2 transform">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>
          <div className="absolute bottom-1/4 -right-2 transform">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;