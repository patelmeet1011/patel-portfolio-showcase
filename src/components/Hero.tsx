import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun, Award, Code2 } from 'lucide-react';
const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-yellow-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 left-20 w-12 h-12 bg-blue-400 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute bottom-40 right-40 w-16 h-16 bg-purple-400 rounded-full opacity-50"></div>
      
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
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Hi! I Am
              <br />
              <span className="gradient-text animate-shimmer bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text text-transparent">
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

          {/* Stats */}
          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">2+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">10+</div>
              <div className="text-sm text-gray-600">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Right Content - Professional Photo */}
        <div className="relative animate-fade-in">
          <div className="relative z-10">
            {/* Main Profile Card */}
            <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden hover-lift glass-effect animate-glow">
              {/* Decorative circles inside card */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full animate-float"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-float" style={{
              animationDelay: '1s'
            }}></div>
              
              <div className="text-center z-10">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-2xl ring-4 ring-primary/20 hover-scale">
                  <img src="/lovable-uploads/eb8c85a5-cc25-44c1-802d-330e20a9070b.png" alt="Meet Patel - Data Analyst" className="w-full h-full object-cover" />
                </div>
                <p className="text-foreground font-medium">Meet Patel</p>
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