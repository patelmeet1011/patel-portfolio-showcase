import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Essential Training for Developers",
      organization: "Amazon Web Services (AWS)",
      date: "2024",
      type: "Cloud Computing",
      description: "Comprehensive training covering AWS core services, best practices, and development tools.",
      certificateUrl: "/CertificateOfCompletion_AWS Essential Training for Developers.pdf",
      skills: ["AWS", "Cloud Computing", "DevOps"]
    },
    {
      title: "Google Analytics for Beginners",
      organization: "Google",
      date: "2024",
      type: "Analytics",
      description: "Foundational course covering Google Analytics setup, reporting, and insights.",
      certificateUrl: "/Google analytics for beginners Course_Certificate.pdf",
      skills: ["Google Analytics", "Data Analysis", "Web Analytics"]
    },
    {
      title: "Google Analytics for Power Users",
      organization: "Google",
      date: "2024",
      type: "Analytics",
      description: "Advanced Google Analytics features, custom reports, and data analysis techniques.",
      certificateUrl: "/google analytics for power user.pdf",
      skills: ["Advanced Analytics", "Custom Reports", "Data Insights"]
    },
    {
      title: "Google Foundation Certificate",
      organization: "Google",
      date: "2024",
      type: "Professional Development",
      description: "Foundation certificate covering essential digital skills and Google workspace tools.",
      certificateUrl: "/Google Foundation.pdf",
      skills: ["Digital Skills", "Google Workspace", "Productivity"]
    },
    {
      title: "SQL Advanced Certificate",
      organization: "Professional Training Institute",
      date: "2024",
      type: "Database",
      description: "Advanced SQL concepts including complex queries, optimization, and database design.",
      certificateUrl: "/sql_advanced certificate.pdf",
      skills: ["Advanced SQL", "Database Design", "Query Optimization"]
    },
    {
      title: "SQL Intermediate Certificate",
      organization: "Professional Training Institute",
      date: "2024",
      type: "Database",
      description: "Intermediate SQL skills covering joins, subqueries, and data manipulation.",
      certificateUrl: "/sql_intermediate certificate.pdf",
      skills: ["SQL", "Data Manipulation", "Database Queries"]
    },
    {
      title: "Google Analytics Fundamentals",
      organization: "Google",
      date: "2024",
      type: "Analytics",
      description: "Core concepts of Google Analytics including tracking, measurement, and reporting.",
      certificateUrl: "/google analytics.pdf",
      skills: ["Google Analytics", "Web Tracking", "Digital Marketing"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Cloud Computing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Analytics':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Database':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Professional Development':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">
              Professional <span className="gradient-text">Certifications</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Continuously expanding my expertise through industry-recognized certifications 
            in cloud computing, data analytics, and modern development practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-lift group animate-scale-in glass-effect border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Header */}
              <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border/50">
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    variant="outline" 
                    className={`${getTypeColor(cert.type)} border transition-all duration-300 group-hover:scale-105`}
                  >
                    {cert.type}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.date}
                  </div>
                </div>
                
                <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {cert.organization}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="p-4 border-b border-border/50">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover-scale"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Certificate Actions */}
              <div className="p-4">
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 group/btn"
                >
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Certificate Summary Stats */}
        <div className="mt-16 bg-card border border-border/50 rounded-2xl p-8 animate-fade-in glass-effect">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{certificates.length}</div>
              <div className="text-muted-foreground text-sm">Total Certificates</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-muted-foreground text-sm">Specializations</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2024</div>
              <div className="text-muted-foreground text-sm">Latest Year</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground text-sm">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;