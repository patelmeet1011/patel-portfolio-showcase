
import React from 'react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Analytics",
      position: "Senior Data Analyst",
      period: "2022 - Present",
      description: "Leading data analytics initiatives for enterprise clients, developing automated reporting solutions and machine learning models that improved decision-making processes by 40%.",
      achievements: [
        "Reduced data processing time by 50% through pipeline optimization",
        "Led team of 5 analysts on major client projects",
        "Implemented real-time dashboard solutions"
      ]
    },
    {
      company: "DataViz Solutions",
      position: "Data Analyst",
      period: "2020 - 2022",
      description: "Developed comprehensive business intelligence solutions and interactive dashboards for mid-market companies, focusing on sales analytics and customer insights.",
      achievements: [
        "Created 20+ interactive Tableau dashboards",
        "Improved client retention through predictive analytics",
        "Streamlined reporting processes saving 15 hours/week"
      ]
    },
    {
      company: "CloudFirst Inc",
      position: "Junior Data Analyst",
      period: "2019 - 2020",
      description: "Started career focusing on data cleaning, basic analytics, and supporting senior analysts with cloud-based data solutions and reporting tasks.",
      achievements: [
        "Mastered SQL and Python for data analysis",
        "Contributed to 10+ client projects",
        "Earned AWS Cloud Practitioner certification"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Professional <span className="text-orange-500">Experience</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My journey in the IT and data analytics field, showcasing growth and 
            increasing responsibilities across different organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 relative">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  <div className="lg:w-1/3 mb-4 lg:mb-0">
                    <div className="text-orange-500 font-semibold text-sm mb-1">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {exp.position}
                    </h3>
                    <div className="text-gray-600 font-medium">
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
