
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: "marketing-insights",
      title: "Marketing Campaign Insights & Automation",
      period: "Oct 2024 - Dec 2024",
      description: "Addressed manual, time-intensive marketing campaign analysis by harnessing data analytics to automate performance tracking and develop predictive models for campaign outcomes.",
      technologies: ["Python", "Apache Airflow", "AWS Glue", "Tableau", "Pandas", "Scikit-learn"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      metrics: "10% ROI Enhancement",
      liveUrl: "https://marketing-insights-demo.vercel.app",
      githubUrl: "https://github.com/meetpatel/marketing-insights"
    },
    {
      id: "us-pollution-dashboard",
      title: "US Pollution Data Dashboard (2000–2016)",
      period: "Oct 2022 - Nov 2022",
      description: "Created an interactive Tableau dashboard to visualize and analyze air pollution trends across U.S. states from 2000 to 2016. Focused on environmental data exploration to uncover regional patterns and trends in pollutant levels over time.",
      technologies: ["Tableau", "Data Cleaning", "Excel", "Geospatial Visualization", "Environmental Analytics", "Kaggle"],
      image: "https://images.unsplash.com/photo-1569163139394-de44cb2c924e?w=400&h=250&fit=crop",
      metrics: "16-Year Trend Analysis",
      liveUrl: "https://public.tableau.com/app/profile/meet.patel/viz/USPollutionDashboard",
      githubUrl: "https://github.com/meetpatel/us-pollution-dashboard"
    },
    {
      id: "ubuntu-server-config",
      title: "Ubuntu 20.04 LTS Server Installation & Remote Access",
      period: "Jan 2022 - May 2022",
      description: "Completed a hands-on system administration project for IT341, focused on installing and configuring Ubuntu 20.04 LTS Server on both physical lab machines and virtual workstations with secure remote access setup.",
      technologies: ["Ubuntu Server", "Linux Administration", "SSH", "RDP", "Network Configuration", "Virtualization"],
      image: "https://images.unsplash.com/photo-1629654291663-b91ad427698f?w=400&h=250&fit=crop",
      metrics: "Full Lab Setup",
      liveUrl: "#",
      githubUrl: "https://github.com/meetpatel/ubuntu-server-config"
    },
    {
      id: "excel-viz-pro",
      title: "Excel Visualization Web App (Excel Viz Pro)",
      period: "Sep 2023 - Dec 2023",
      description: "Empowered non-technical users to quickly gain insights from spreadsheet data by creating an accessible, user-friendly tool using Python and Streamlit framework.",
      technologies: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      metrics: "Instant Visualizations",
      liveUrl: "https://excel-viz-pro.streamlit.app",
      githubUrl: "https://github.com/meetpatel/excel-viz-pro"
    },
    {
      id: "tableau-analysis",
      title: "Multi-Domain Data Analysis in Tableau",
      period: "Dec 2022 (Academic Project)",
      description: "Demonstrated Tableau proficiency by analyzing and visualizing data from three distinct domains: retail furniture sales, global gaming industry, and U.S. environmental emissions.",
      technologies: ["Tableau", "SQL", "Data Blending", "Statistical Analysis"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      metrics: "25% Efficiency Gain",
      liveUrl: "https://public.tableau.com/app/profile/meet.patel/vizzes",
      githubUrl: "https://github.com/meetpatel/tableau-analysis"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in data analytics, 
            cloud technologies, and business intelligence solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-lift glass-effect border-border/50 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground border border-primary/20">
                    {project.metrics}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                  <span className="text-xs text-primary font-medium">{project.period}</span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs hover-scale">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    asChild 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 flex-1 hover-scale"
                  >
                    <Link to={`/project/${project.id}`}>
                      View Details
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    size="sm" 
                    variant="outline" 
                    className="flex-1 hover-scale"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 px-8 py-3 hover-scale animate-glow"
          >
            <a href="https://github.com/meetpatel" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
