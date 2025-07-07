
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description: "Built a comprehensive dashboard analyzing sales performance across multiple regions with real-time KPI tracking and predictive analytics.",
      technologies: ["Python", "Tableau", "SQL", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      metrics: "Increased efficiency by 35%"
    },
    {
      title: "Customer Segmentation Model",
      description: "Developed machine learning models to segment customers based on behavior patterns, resulting in targeted marketing strategies.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Azure"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      metrics: "Improved conversion by 28%"
    },
    {
      title: "Cloud Data Pipeline",
      description: "Architected and implemented automated data pipelines processing 1M+ records daily with 99.9% uptime reliability.",
      technologies: ["AWS", "Python", "Apache Airflow", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      metrics: "Reduced processing time by 60%"
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
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">{project.title}</h3>
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
