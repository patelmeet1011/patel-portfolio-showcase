
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Award, Code2, Database, Cloud, BarChart3, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-600 hover:bg-orange-200">
            Get to know me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm Meet Patel, an IT Professional based in Boston, MA, passionate about leveraging 
            data, cloud, and analytics to solve complex business challenges and drive innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                With over 2+ years of hands-on experience in the IT field, I specialize in transforming 
                raw data into strategic insights that drive business decisions. My expertise spans across 
                data analytics, cloud technologies, and business intelligence solutions.
              </p>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                I believe in the power of data storytelling and creating solutions that not only solve 
                technical challenges but also deliver measurable business value. From building interactive 
                dashboards to optimizing cloud infrastructure, I'm committed to excellence in every project.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
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
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Experience</p>
                  <p className="text-gray-600">2+ Years</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button variant="outline" className="px-6 py-3 rounded-full border-2 hover:bg-orange-50 transition-all duration-300">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            {/* Expertise Areas */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Data Analytics</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Transforming complex datasets into actionable insights using advanced analytics, 
                visualization tools, and statistical modeling techniques.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Cloud Technologies</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Designing and implementing scalable cloud solutions with expertise in 
                AWS, Azure, and Google Cloud platforms for optimal performance.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Business Intelligence</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Creating comprehensive BI solutions that enable data-driven decision making 
                across all organizational levels and departments.
              </p>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">10+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">100+</div>
            <div className="text-gray-600">Data Models</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">2+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
