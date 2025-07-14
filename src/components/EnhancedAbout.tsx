import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Award, Code2, Database, Cloud, BarChart3, Download } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const EnhancedAbout = () => {
  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { icon: Award, number: 10, label: "Projects Completed", gradient: "from-orange-500 to-red-500" },
    { icon: Code2, number: 6, label: "Tech Experience", gradient: "from-blue-500 to-purple-500" },
    { icon: Database, number: 100, label: "Data Models", gradient: "from-purple-500 to-pink-500" },
    { icon: BarChart3, number: 2, label: "Years Experience", gradient: "from-green-500 to-blue-500" },
  ];

  const expertiseCards = [
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transforming complex datasets into actionable insights using advanced analytics, visualization tools, and statistical modeling techniques.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Cloud,
      title: "Cloud Technologies", 
      description: "Designing and implementing scalable cloud solutions with expertise in AWS, Azure, and Google Cloud platforms for optimal performance.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Database,
      title: "Business Intelligence",
      description: "Creating comprehensive BI solutions that enable data-driven decision making across all organizational levels and departments.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-600 hover:bg-orange-200">
            Get to know me
          </Badge>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            I'm Meet Patel, an IT Professional based in Boston, MA, passionate about leveraging 
            data, cloud, and analytics to solve complex business challenges and drive innovation.
          </motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left" className="space-y-8">
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-gray-600 leading-relaxed text-lg"
              >
                With over 2+ years of hands-on experience in the IT field, I specialize in transforming 
                raw data into strategic insights that drive business decisions. My expertise spans across 
                data analytics, cloud technologies, and business intelligence solutions.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 leading-relaxed text-lg"
              >
                I believe in the power of data storytelling and creating solutions that not only solve 
                technical challenges but also deliver measurable business value. From building interactive 
                dashboards to optimizing cloud infrastructure, I'm committed to excellence in every project.
              </motion.p>
            </div>

            {/* Education Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Education</p>
                  <p className="text-gray-600 font-medium">BS Information Technology</p>
                  <p className="text-sm text-gray-600">UMass Boston • 2020-2024</p>
                  <p className="text-xs text-purple-600 font-semibold">GPA: 3.594/4.0 • Magna Cum Laude</p>
                  <p className="text-xs text-blue-600">Dean's List Recipient</p>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="px-6 py-3 rounded-full border-2 hover:bg-orange-50 transition-all duration-300">
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Right Content - Cards */}
          <AnimatedSection direction="right" className="space-y-6">
            {expertiseCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center`}
                    >
                      <card.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>

        {/* Stats Section */}
        <motion.div 
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={statsInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <motion.div 
                whileHover={{ rotate: 10 }}
                className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                className="text-3xl font-bold text-gray-800 mb-2"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {stat.number}+
                </motion.span>
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedAbout;