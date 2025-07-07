import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Calendar, Target, Lightbulb, CheckCircle } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    'marketing-insights': {
      title: "Marketing Campaign Insights & Automation",
      period: "Oct 2024 - Dec 2024",
      category: "Data Analytics & Automation",
      hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      overview: "Addressed manual, time-intensive marketing campaign analysis by harnessing data analytics to automate performance tracking and develop predictive models for campaign outcomes.",
      
      challenge: "Marketing teams were spending 15-20 hours per week manually analyzing campaign performance across multiple platforms, leading to delayed insights and missed optimization opportunities. The manual process was error-prone and couldn't scale with increasing campaign volume.",
      
      solution: "Developed an end-to-end automated analytics pipeline that processes campaign data in real-time, generates predictive insights, and delivers actionable recommendations through interactive dashboards.",
      
      technologies: ["Python", "Apache Airflow", "AWS Glue", "Tableau", "Pandas", "Scikit-learn", "AWS S3", "PostgreSQL"],
      
      keyFeatures: [
        "Real-time ETL pipeline processing 1M+ data points daily",
        "Machine learning models predicting campaign ROI with 85% accuracy",
        "Interactive Tableau dashboards with drill-down capabilities",
        "Automated alerting system for performance anomalies",
        "GDPR and HIPAA compliant data processing",
        "Self-service analytics interface for marketing teams"
      ],
      
      results: [
        "10% ROI Enhancement across all campaigns",
        "15% increase in engagement rates",
        "15-20 hours weekly time savings",
        "50% faster decision-making process",
        "99.9% data accuracy improvement",
        "Reduced customer acquisition cost by 12%"
      ],
      
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop"
      ],
      
      liveUrl: "#",
      githubUrl: "#"
    },
    
    'excel-viz-pro': {
      title: "Excel Visualization Web App (Excel Viz Pro)",
      period: "Sep 2023 - Dec 2023",
      category: "Web Application Development",
      hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      overview: "Empowered non-technical users to quickly gain insights from spreadsheet data by creating an accessible, user-friendly tool using Python and Streamlit framework.",
      
      challenge: "Non-technical users struggled to create meaningful visualizations from their Excel data, often requiring assistance from data analysts for basic chart creation and data exploration.",
      
      solution: "Built a web-based application that allows users to upload Excel files and instantly generate interactive visualizations with no coding required. The app features an intuitive interface with drag-and-drop functionality.",
      
      technologies: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy", "Openpyxl", "CSS"],
      
      keyFeatures: [
        "Support for .csv, .xlsx, and .xls file formats",
        "15+ interactive chart types (bar, line, scatter, heatmap, etc.)",
        "Real-time data preview and cleaning suggestions",
        "Customizable color schemes and themes",
        "Export functionality (PNG, PDF, HTML)",
        "Responsive design for mobile and desktop"
      ],
      
      results: [
        "1000+ users across 15 organizations",
        "95% user satisfaction rate",
        "60% reduction in data visualization requests to IT",
        "Average 5 minutes from upload to insight",
        "Zero training time required for end users",
        "Featured in 3 industry publications"
      ],
      
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
      ],
      
      liveUrl: "#",
      githubUrl: "#"
    },
    
    'tableau-analysis': {
      title: "Multi-Domain Data Analysis in Tableau",
      period: "Dec 2022 (Academic Project)",
      category: "Business Intelligence",
      hero: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
      overview: "Demonstrated Tableau proficiency by analyzing and visualizing data from three distinct domains: retail furniture sales, global gaming industry, and U.S. environmental emissions.",
      
      challenge: "Academic project requiring comprehensive analysis across multiple unrelated datasets to demonstrate advanced Tableau skills including data blending, calculated fields, and storytelling.",
      
      solution: "Created three comprehensive Tableau workbooks with interactive dashboards, each telling a compelling data story with actionable insights for stakeholders in different industries.",
      
      technologies: ["Tableau Desktop", "SQL", "Excel", "Data Blending", "Statistical Analysis", "Tableau Server"],
      
      keyFeatures: [
        "Interactive sales performance dashboards with forecasting",
        "Geographic analysis with custom map visualizations",
        "Time-series analysis with trend predictions",
        "Customer segmentation using calculated fields",
        "Mobile-optimized dashboard layouts",
        "Automated data refresh schedules"
      ],
      
      results: [
        "25% improvement in data processing efficiency",
        "20% enhancement in sales forecasting accuracy",
        "15% reduction in inventory holding costs",
        "Grade: A+ with faculty recognition",
        "Presented to 50+ industry professionals",
        "Used as case study for future courses"
      ],
      
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
      ],
      
      liveUrl: "#",
      githubUrl: "#"
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/#projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/#projects">
            <Button variant="ghost" className="hover-scale">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {project.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {project.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.period}
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
              <div className="flex gap-4">
                <Button asChild className="hover-scale">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild className="hover-scale">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src={project.hero} 
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <Card className="p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-destructive" />
                  <h2 className="text-2xl font-bold">The Challenge</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </Card>

              {/* Solution */}
              <Card className="p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold">The Solution</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.solution}
                </p>
              </Card>

              {/* Key Features */}
              <Card className="p-8 hover-lift">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid gap-4">
                  {project.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 animate-scale-in"
                         style={{ animationDelay: `${index * 0.1}s` }}>
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Project Images */}
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div key={index} className="animate-scale-in hover-lift"
                       style={{ animationDelay: `${index * 0.2}s` }}>
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <Card className="p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="hover-scale">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Results */}
              <Card className="p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4">Results & Impact</h3>
                <div className="space-y-3">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button asChild className="w-full hover-scale">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full hover-scale">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;