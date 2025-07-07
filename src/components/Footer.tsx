
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">
              Meet<span className="text-orange-500">Patel</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Passionate IT professional specializing in data analytics, cloud technologies, 
              and business intelligence solutions that drive organizational success.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-orange-500 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-orange-500 transition-colors">Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Twitter</a></li>
              <li><a href="mailto:meet.patel@email.com" className="text-gray-400 hover:text-orange-500 transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Meet Patel. All rights reserved. Built with passion and modern technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
