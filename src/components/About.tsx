
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a passionate IT professional with expertise in data analytics, cloud technologies, 
            and business intelligence. I transform complex data into actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              With over 7 years of experience in the IT field, I specialize in creating 
              data-driven solutions that help organizations make informed decisions. 
              My journey began with a passion for understanding complex systems and 
              has evolved into expertise in cutting-edge technologies.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              I believe in the power of data to tell stories and drive innovation. 
              Whether it's building interactive dashboards, optimizing cloud infrastructure, 
              or developing analytical models, I'm committed to delivering solutions that 
              make a real impact.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
                <p className="text-gray-600">Master's in Data Science</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                <p className="text-gray-600">New York, USA</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-l-orange-500">
              <h3 className="font-semibold text-gray-800 mb-2">Mission</h3>
              <p className="text-gray-600">
                To bridge the gap between complex data and meaningful insights, 
                empowering businesses to make data-driven decisions.
              </p>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-blue-500">
              <h3 className="font-semibold text-gray-800 mb-2">Vision</h3>
              <p className="text-gray-600">
                Creating a future where data accessibility and visualization 
                drive innovation across all industries.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
