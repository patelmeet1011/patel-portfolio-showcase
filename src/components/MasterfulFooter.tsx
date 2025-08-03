import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  Heart,
  Code,
  Coffee,
  ExternalLink,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const MasterfulFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/meet-patel-7581b31b9/",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      href: "https://github.com/meet1348",
      icon: Github,
      color: "hover:text-slate-800"
    },
    {
      name: "Email",
      href: "mailto:patelmeet1348@gmail.com",
      icon: Mail,
      color: "hover:text-emerald-600"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      Meet<span className="text-blue-400">Patel</span>
                    </h3>
                    <p className="text-slate-400 text-sm">Data Analytics Expert</p>
                  </div>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
                  Passionate data analyst specializing in transforming complex data into actionable insights. 
                  Dedicated to driving business success through innovative analytics and cloud solutions.
                </p>

                {/* Location */}
                <div className="flex items-center text-slate-400 mb-6">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Boston, MA • Available for Remote Work</span>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 group ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 text-slate-400 group-hover:text-current transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Skills & Expertise */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">Core Expertise</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-blue-400 font-medium mb-2">Data & Analytics</h5>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      SQL, Python, BigQuery, Tableau, Power BI, Statistical Analysis
                    </p>
                  </div>
                  <div>
                    <h5 className="text-emerald-400 font-medium mb-2">Cloud Technologies</h5>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      AWS, Azure, Google Cloud, Apache Airflow, Data Engineering
                    </p>
                  </div>
                  <div>
                    <h5 className="text-purple-400 font-medium mb-2">Business Intelligence</h5>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      KPI Development, Dashboard Design, Process Optimization
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center text-slate-400"
              >
                <span>© {currentYear} Meet Patel. Crafted with</span>
                <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
                <span>and</span>
                <Coffee className="w-4 h-4 mx-2 text-amber-500" />
                <span>in Boston</span>
              </motion.div>

              {/* Back to Top */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  className="border-slate-600 text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all duration-300 group"
                >
                  <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                  Back to Top
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-indigo-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-40 w-3 h-3 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </footer>
  );
};

export default MasterfulFooter;