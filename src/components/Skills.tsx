
import React from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Languages",
      skills: ["Python", "R", "SQL", "Java", "Ruby", "HTML/CSS", "Unix/Linux"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Data Analysis & Visualization",
      skills: ["Tableau", "Power BI", "Microsoft Excel", "Plotly", "Streamlit", "EDA", "Dashboard Design"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Databases & Cloud",
      skills: ["SQL Server", "BigQuery", "Redshift", "AWS", "Azure", "Google Cloud", "SSMS"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Analytics & Tools",
      skills: ["Predictive Modeling", "A/B Testing", "Customer Segmentation", "Apache Airflow", "AWS Glue", "Google Analytics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance & Security",
      skills: ["HIPAA", "GDPR", "Data Security", "CompTIA CySA+", "AWS Certified"],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Business Intelligence",
      skills: ["ETL Development", "Data Warehousing", "Oracle NetSuite", "Dynamics 365", "VMware"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My Awesome <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I have extensive experience across multiple domains of IT and data analytics, 
            with expertise in modern tools and technologies that drive business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <span className="text-white font-bold text-lg">
                  {category.title.charAt(0)}
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-800 mb-3">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
