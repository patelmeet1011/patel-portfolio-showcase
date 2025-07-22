import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Github, 
  ChevronRight,
  Calendar,
  Target,
  Code2,
  Sparkles
} from 'lucide-react';

const MasterfulProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: "marketing-insights",
      title: "Marketing Campaign Insights & Automation",
      period: "Oct 2024 - Dec 2024",
      category: "Data Analytics",
      description: "Addressed manual, time-intensive marketing campaign analysis by harnessing data analytics to automate performance tracking and develop predictive models for campaign outcomes.",
      technologies: ["Python", "Apache Airflow", "AWS Glue", "Tableau", "Pandas", "Scikit-learn"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      metrics: "10% ROI Enhancement",
      impact: "Increased campaign effectiveness by 25%",
      liveUrl: "https://marketing-insights-demo.vercel.app",
      githubUrl: "https://github.com/meetpatel/marketing-insights",
      showLiveDemo: false,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "excel-viz-pro",
      title: "Excel Visualization Web App (Excel Viz Pro)",
      period: "Sep 2023 - Dec 2023",
      category: "Web Development",
      description: "Empowered non-technical users to quickly gain insights from spreadsheet data by creating an accessible, user-friendly tool using Python and Streamlit framework.",
      technologies: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      metrics: "Instant Visualizations",
      impact: "Reduced analysis time by 80%",
      liveUrl: "https://patelmeet1011.github.io/ExcelVizProIt485/",
      githubUrl: "https://github.com/patelmeet1011/ExcelVizProIt485",
      showLiveDemo: true,
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: "tableau-analysis",
      title: "Multi-Domain Data Analysis in Tableau",
      period: "Dec 2022",
      category: "Business Intelligence",
      description: "Demonstrated Tableau proficiency by analyzing and visualizing data from three distinct domains: retail furniture sales, global gaming industry, and U.S. environmental emissions.",
      technologies: ["Tableau", "SQL", "Data Blending", "Statistical Analysis"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      metrics: "25% Efficiency Gain",
      impact: "Improved decision-making speed",
      liveUrl: "https://public.tableau.com/app/profile/meet.patel/vizzes",
      githubUrl: "https://github.com/meetpatel/tableau-analysis",
      showLiveDemo: false,
      gradient: "from-purple-500/20 to-indigo-500/20"
    },
    {
      id: "us-pollution-dashboard",
      title: "US Pollution Data Dashboard (2000–2016)",
      period: "Oct 2022 - Nov 2022",
      category: "Environmental Analytics",
      description: "Created an interactive Tableau dashboard to visualize and analyze air pollution trends across U.S. states from 2000 to 2016. Focused on environmental data exploration to uncover regional patterns.",
      technologies: ["Tableau", "Data Cleaning", "Excel", "Geospatial Visualization", "Environmental Analytics", "Kaggle"],
      image: "https://images.unsplash.com/photo-1569163139394-de44cb2c924e?w=600&h=400&fit=crop",
      metrics: "16-Year Trend Analysis",
      impact: "Revealed critical pollution patterns",
      liveUrl: "https://public.tableau.com/app/profile/meet.patel/viz/USPollutionDashboard",
      githubUrl: "https://github.com/meetpatel/us-pollution-dashboard",
      showLiveDemo: false,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: "web-scraping-unicorns",
      title: "Web Scraping & Data Storage of Unicorn Companies",
      period: "Apr 2023 - May 2023",
      category: "Data Engineering",
      description: "Developed a Python-based data scraping and storage pipeline focused on extracting and persisting real-time data about unicorn companies (privately held startups valued at over $1B).",
      technologies: ["Python", "BeautifulSoup", "SQLite", "requests", "ETL", "Web Scraping"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      metrics: "1M+ Data Points",
      impact: "Automated data collection pipeline",
      liveUrl: "#",
      githubUrl: "https://github.com/meetpatel/unicorn-scraper",
      showLiveDemo: false,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: "ubuntu-server-config",
      title: "Ubuntu 20.04 LTS Server Installation & Remote Access",
      period: "Jan 2022 - May 2022",
      category: "System Administration",
      description: "Completed a hands-on system administration project for IT341, focused on installing and configuring Ubuntu 20.04 LTS Server on both physical lab machines and virtual workstations.",
      technologies: ["Ubuntu Server", "Linux Administration", "SSH", "RDP", "Network Configuration", "Virtualization"],
      image: "https://images.unsplash.com/photo-1629654291663-b91ad427698f?w=600&h=400&fit=crop",
      metrics: "Full Lab Setup",
      impact: "Complete server infrastructure",
      liveUrl: "#",
      githubUrl: "https://github.com/meetpatel/ubuntu-server-config",
      showLiveDemo: false,
      gradient: "from-slate-500/20 to-gray-500/20"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Masterful Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-primary/5 text-primary border-primary/20 px-6 py-3 elegant-border">
              <Code2 className="w-4 h-4 mr-2" />
              Featured Work
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Selected{' '}
            <motion.span 
              className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            A showcase of projects that demonstrate expertise in <span className="text-primary font-medium">data analytics</span>, 
            cloud technologies, and business intelligence solutions.
          </motion.p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group"
            >
              <Card className="overflow-hidden elegant-border hover:elegant-shadow-hover transition-all duration-500 bg-card/50 backdrop-blur-sm">
                {/* Enhanced Image Section */}
                <div className="relative overflow-hidden h-64">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}
                    animate={{
                      opacity: hoveredProject === index ? 0.8 : 0.6
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge className="bg-primary/90 text-primary-foreground border-0 backdrop-blur-sm">
                      <Target className="w-3 h-3 mr-1" />
                      {project.metrics}
                    </Badge>
                    <Badge variant="outline" className="bg-card/90 text-card-foreground border-border/50 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white/90 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.period}
                    </div>
                    <div className="text-white/90 text-sm font-medium">
                      {project.impact}
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Content Section */}
                <div className="p-8">
                  <motion.h3 
                    className="font-bold text-foreground text-xl mb-4 leading-tight group-hover:text-primary transition-colors duration-300"
                    layout
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + techIndex * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs font-medium elegant-border hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.div
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        asChild 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 group/btn"
                      >
                        <Link to={`/project/${project.id}`}>
                          View Details
                          <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </motion.div>
                    
                    <AnimatePresence>
                      {project.showLiveDemo && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            asChild
                            size="lg" 
                            variant="outline" 
                            className="elegant-border hover:bg-primary/5 hover:text-primary group/btn"
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8 elegant-border hover:elegant-shadow-hover transition-all duration-500 bg-gradient-to-r from-primary/5 to-primary/10">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Explore More Work</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Discover additional projects and contributions on my GitHub profile
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 group"
                >
                  <a href="https://github.com/patelmeet1011" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 w-5 h-5" />
                    View GitHub Profile
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterfulProjects;