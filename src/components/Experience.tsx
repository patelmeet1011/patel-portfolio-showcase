
import React from 'react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "Mobiquity Inc.",
      location: "Waltham, MA",
      position: "Data Analyst",
      period: "Jan 2024 - Present",
      description: "Drive key business outcomes by translating complex client requirements into actionable data insights. Work directly contributes to improving digital products, enhancing marketing effectiveness, and ensuring data governance.",
      achievements: [
        "Collaborated with clients using SQL, BigQuery, and Redshift to deliver data-driven insights",
        "Analyzed user engagement data, improving digital product performance and increasing customer retention by 15%",
        "Optimized marketing campaigns using Google Analytics and SQL, boosting engagement rates by 25% and ROI by 20%",
        "Created interactive Tableau and Power BI dashboards for real-time KPI monitoring",
        "Applied A/B testing, customer segmentation, and predictive modeling achieving 20% improvement in campaign effectiveness",
        "Built scalable data workflows with Apache Airflow and AWS Glue while ensuring HIPAA and GDPR compliance",
        "Designed secure cloud data solutions on AWS, Azure, and Google Cloud platforms"
      ]
    },
    {
      company: "Novus Logics",
      location: "Ahmedabad, India",
      position: "Data Analyst Intern",
      period: "Jun 2022 - Aug 2022",
      description: "Focused on optimizing data processes and providing foundational analysis to support team objectives during a transformative internship experience.",
      achievements: [
        "Spearheaded SQL optimization initiatives, reducing query processing time by 60%",
        "Managed full data lifecycle including collection, cleaning, and preprocessing for accuracy",
        "Conducted comprehensive Exploratory Data Analysis (EDA) to uncover key trends and patterns",
        "Developed and maintained interactive Tableau dashboards for stakeholder insights",
        "Automated reporting processes with complex SQL queries, improving data retrieval efficiency by 30%",
        "Provided technical support and resolved customer issues to ensure high client satisfaction"
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
                    <div className="text-gray-600 font-medium mb-1">
                      {exp.company}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {exp.location}
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
