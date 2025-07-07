
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Marketing Campaign Insights & Automation",
      period: "Oct 2024 - Dec 2024",
      description: "Addressed manual, time-intensive marketing campaign analysis by harnessing data analytics to automate performance tracking and develop predictive models for campaign outcomes.",
      technologies: ["Python", "Apache Airflow", "AWS Glue", "Tableau", "Pandas", "Scikit-learn"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      metrics: "10% ROI Enhancement",
      achievements: [
        "Engineered automated ETL workflows using Apache Airflow and AWS Glue",
        "Developed predictive models in Python for campaign outcome forecasting",
        "Created intuitive Tableau dashboards for real-time KPI access",
        "Ensured HIPAA and GDPR compliance standards",
        "Increased engagement rates by 15%",
        "Reduced manual reporting by 15-20 hours per week"
      ]
    },
    {
      title: "Excel Visualization Web App (Excel Viz Pro)",
      period: "Sep 2023 - Dec 2023",
      description: "Empowered non-technical users to quickly gain insights from spreadsheet data by creating an accessible, user-friendly tool using Python and Streamlit framework.",
      technologies: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      metrics: "Instant Visualizations",
      achievements: [
        "Seamless .csv and .xlsx file compatibility for frictionless user experience",
        "Leveraged Plotly for dynamic, interactive chart generation",
        "Built efficient Python backend using Pandas and NumPy",
        "Developed intuitive Streamlit UI prioritizing simplicity and responsiveness",
        "Enabled users to download customized charts",
        "Supported multiple chart types with hover, zoom, and pan functionality"
      ]
    },
    {
      title: "Multi-Domain Data Analysis in Tableau",
      period: "Dec 2022 (Academic Project)",
      description: "Demonstrated Tableau proficiency by analyzing and visualizing data from three distinct domains: retail furniture sales, global gaming industry, and U.S. environmental emissions.",
      technologies: ["Tableau", "SQL", "Data Blending", "Statistical Analysis"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      metrics: "25% Efficiency Gain",
      achievements: [
        "Integrated transactional data with customer demographics",
        "Improved data processing efficiency by 25%",
        "Enhanced sales forecasting accuracy by 20%",
        "Applied advanced data blending techniques for unified analytical view",
        "Identified strategies leading to 15% reduction in inventory holding costs",
        "Created comprehensive visualizations for emission trends across states and sectors"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in data analytics, 
            cloud technologies, and business intelligence solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500 hover:bg-orange-600">
                    {project.metrics}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-lg">{project.title}</h3>
                  <span className="text-xs text-orange-500 font-medium">{project.period}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600 flex-1">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-3">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
