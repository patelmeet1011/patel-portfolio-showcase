
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-yellow-300 rounded-full opacity-60"></div>
      <div className="absolute top-40 left-20 w-12 h-12 bg-blue-400 rounded-full opacity-40"></div>
      <div className="absolute bottom-40 right-40 w-16 h-16 bg-purple-400 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Available for hire</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Hi! I Am
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Meet Patel
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-md">An IT Professional based in Boston, MA, and I'm passionate about leveraging data, cloud, and analytics to solve complex problems.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Hire Me
            </Button>
            <Button variant="outline" className="px-8 py-3">
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

        {/* Right Content - Professional Placeholder */}
        <div className="relative">
          <div className="relative z-10">
            <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-orange-100 to-purple-100 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">MP</span>
                </div>
                <p className="text-gray-600">Your Professional Photo</p>
              </div>
            </div>
          </div>
          
          {/* Floating Awards Badge */}
          <div className="absolute top-10 right-0 bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">★</span>
              </div>
              <div>
                <div className="text-sm font-semibold">Best Design</div>
                <div className="text-xs text-gray-500">Awards</div>
              </div>
            </div>
          </div>

          {/* Floating UI/UX Badge */}
          <div className="absolute bottom-20 left-0 bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">IT</span>
              </div>
              <div>
                <div className="text-sm font-semibold">Data Analytics</div>
                <div className="text-xs text-gray-500">Professional expertise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
