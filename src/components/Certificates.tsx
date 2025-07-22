import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Foundations: Data, Data, Everywhere",
      organization: "Google",
      date: "Dec 2024",
      credentialId: "1UNAS86QN6FH",
      type: "Data Analytics",
      description: "Comprehensive foundation course covering data analytics, analytical skills, and SQL fundamentals.",
      certificateUrl: "/Coursera 1UNAS86QN6FH.pdf",
      skills: ["Data Analytics", "Analytical Skills", "SQL"]
    },
    {
      title: "SQL (Advanced)",
      organization: "HackerRank",
      date: "Sep 2024",
      credentialId: "C7D47011D1C2",
      type: "Database",
      description: "Advanced SQL certification covering complex queries, optimization, and database management.",
      certificateUrl: "/sql_advanced certificate.pdf",
      skills: ["Advanced SQL", "Database Management", "Query Optimization"]
    },
    {
      title: "SQL (Intermediate)",
      organization: "HackerRank",
      date: "Sep 2024",
      credentialId: "F1A816DF6B41",
      type: "Database",
      description: "Intermediate SQL skills covering joins, subqueries, and data manipulation techniques.",
      certificateUrl: "/sql_intermediate certificate.pdf",
      skills: ["SQL", "Data Manipulation", "Database Queries"]
    },
    {
      title: "Advanced Google Analytics",
      organization: "Google",
      date: "Jun 2024 - Jun 2027",
      type: "Analytics",
      description: "Advanced Google Analytics features, custom reports, and advanced data analysis techniques.",
      certificateUrl: "/Advanced Google Analytics.pdf",
      skills: ["Advanced Analytics", "Custom Reports", "Data Insights"]
    },
    {
      title: "Google Analytics for Beginners",
      organization: "Google",
      date: "Jun 2024 - Jun 2027",
      type: "Analytics",
      description: "Foundational course covering Google Analytics setup, reporting, and basic insights.",
      certificateUrl: "/Course_Certificate.pdf",
      skills: ["Google Analytics", "Data Analysis", "Web Analytics"]
    },
    {
      title: "Google Analytics for Power Users",
      organization: "Google",
      date: "Jun 2024 - Jun 2027",
      type: "Analytics",
      description: "Power user features of Google Analytics including advanced segmentation and analysis.",
      certificateUrl: "/Coursecertificatemeet.pdf",
      skills: ["Advanced Analytics", "Segmentation", "Power User Features"]
    },
    {
      title: "CompTIA Cybersecurity Analyst+ (CySA+) (CS0-003): 1 Security Operations",
      organization: "LinkedIn Learning",
      date: "Dec 2023",
      type: "Cybersecurity",
      description: "Comprehensive cybersecurity operations training covering threat detection and security operations.",
      certificateUrl: "#",
      skills: ["Security Operations", "Cybersecurity", "Threat Detection"]
    },
    {
      title: "AWS Certified Cloud Practitioner (CLF-C01) Cert Prep: 1 Cloud Concepts",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Cloud Computing",
      description: "AWS cloud concepts preparation covering core cloud computing principles and AWS services.",
      certificateUrl: "#",
      skills: ["Amazon Web Services (AWS)", "Cloud Computing", "Cloud Concepts"]
    },
    {
      title: "AWS Essential Training for Developers",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Cloud Computing",
      description: "Essential AWS training for developers covering core services and development tools.",
      certificateUrl: "/CertificateOfCompletion_AWS Essential Training for Developers.pdf",
      skills: ["Amazon Web Services (AWS)", "Cloud Development", "AWS Services"]
    },
    {
      title: "Become a Data Analyst",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Data Analytics",
      description: "Comprehensive data analyst training covering Excel, Tableau, Power BI, and data visualization.",
      certificateUrl: "#",
      skills: ["Microsoft Excel", "Tableau", "Data Visualization", "Microsoft Power BI", "Data Analytics"]
    },
    {
      title: "Business Intelligence for Consultants",
      organization: "LinkedIn Learning",
      date: "May 2023",
      credentialId: "AQhsO5SMzA5bApjxWVITlNg-FLFc",
      type: "Business Intelligence",
      description: "Business intelligence training focused on consulting applications and data analytics.",
      certificateUrl: "#",
      skills: ["Business Intelligence (BI)", "Data Analytics", "Consulting"]
    },
    {
      title: "Cert Prep: Certified Analytics Professional (CAP)",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Data Analytics",
      description: "Preparation for Certified Analytics Professional certification covering advanced analytics concepts.",
      certificateUrl: "#",
      skills: ["Data Analytics", "Professional Certification", "Advanced Analytics"]
    },
    {
      title: "Data Cleaning in Python Essential Training",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Programming",
      description: "Essential training for data cleaning techniques using Python programming language.",
      certificateUrl: "#",
      skills: ["Python (Programming Language)", "Data Cleaning", "Data Processing"]
    },
    {
      title: "Data Fluency: Exploring and Describing Data",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Data Science",
      description: "Data fluency training covering data exploration and description techniques.",
      certificateUrl: "#",
      skills: ["MySQL", "Data Science", "Data Exploration"]
    },
    {
      title: "Excel Statistics Essential Training: 1 (2019)",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Data Analytics",
      description: "Essential statistical analysis training using Microsoft Excel for data analytics.",
      certificateUrl: "#",
      skills: ["Microsoft Excel", "Statistical Data Analysis", "Statistics"]
    },
    {
      title: "Introduction to Career Skills in Data Analytics",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Professional Development",
      description: "Career development skills specifically for data analytics professionals.",
      certificateUrl: "#",
      skills: ["Tech Career Skills", "Data Analytics", "Professional Development"]
    },
    {
      title: "Learning Amazon Web Services (AWS) for Developers",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Cloud Computing",
      description: "AWS development training covering cloud services and development best practices.",
      certificateUrl: "#",
      skills: ["Amazon Web Services (AWS)", "Data Analytics", "Cloud Development"]
    },
    {
      title: "Learning Data Analytics Part 2: Extending and Applying Core Knowledge",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Data Analytics",
      description: "Advanced data analytics training extending core knowledge and practical applications.",
      certificateUrl: "#",
      skills: ["MySQL", "Data Analytics", "Advanced Analytics"]
    },
    {
      title: "Learning Data Analytics: 1 Foundations",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Data Analytics",
      description: "Foundational data analytics training covering core concepts and principles.",
      certificateUrl: "#",
      skills: ["Data Analytics", "Data Foundations", "Analytics Fundamentals"]
    },
    {
      title: "Learning Data Visualization",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Data Visualization",
      description: "Comprehensive data visualization training covering design principles and tools.",
      certificateUrl: "#",
      skills: ["Data Visualization", "Visual Design", "Analytics Presentation"]
    },
    {
      title: "Learning Excel: Data Analysis",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Data Analytics",
      description: "Excel-focused data analysis training covering advanced Excel features for analytics.",
      certificateUrl: "#",
      skills: ["Microsoft Excel", "Data Analysis", "Excel Analytics"]
    },
    {
      title: "Power BI Essential Training",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Business Intelligence",
      description: "Essential Microsoft Power BI training covering dashboard creation and data modeling.",
      certificateUrl: "#",
      skills: ["Microsoft Power BI", "Business Intelligence", "Data Modeling"]
    },
    {
      title: "Predictive Analytics Essential Training: Data Mining",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Data Science",
      description: "Predictive analytics and data mining training covering machine learning concepts.",
      certificateUrl: "#",
      skills: ["Predictive Analytics", "Data Mining", "Machine Learning"]
    },
    {
      title: "R Essential Training: Wrangling and Visualizing Data",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Programming",
      description: "R programming training focused on data wrangling and visualization techniques.",
      certificateUrl: "#",
      skills: ["R (Programming Language)", "Data Wrangling", "Data Visualization"]
    },
    {
      title: "Ruby Essential Training Part 1: The Basics",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Programming",
      description: "Basic Ruby programming language training covering fundamental concepts.",
      certificateUrl: "#",
      skills: ["Ruby", "Programming Fundamentals", "Software Development"]
    },
    {
      title: "SQL for Data Analysis",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Database",
      description: "SQL training specifically focused on data analysis applications and techniques.",
      certificateUrl: "#",
      skills: ["MySQL", "SQL", "Data Analytics", "Database Development"]
    },
    {
      title: "SQL: Data Reporting and Analysis",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Database",
      description: "Advanced SQL training for data reporting and analysis applications.",
      certificateUrl: "#",
      skills: ["Data Analysis", "MySQL", "SQL", "Reporting"]
    },
    {
      title: "Tableau Essential Training",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Data Visualization",
      description: "Essential Tableau training covering dashboard creation and data visualization.",
      certificateUrl: "#",
      skills: ["Tableau", "Data Visualization", "Dashboard Design"]
    },
    {
      title: "The Non-Technical Skills of Effective Data Scientists",
      organization: "LinkedIn Learning",
      date: "May 2023",
      type: "Professional Development",
      description: "Soft skills training for data science professionals covering communication and collaboration.",
      certificateUrl: "#",
      skills: ["Data Science", "Professional Skills", "Communication"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Cloud Computing':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300';
      case 'Data Analytics':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300';
      case 'Analytics':
        return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300';
      case 'Database':
        return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300';
      case 'Business Intelligence':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300';
      case 'Data Visualization':
        return 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300';
      case 'Programming':
        return 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300';
      case 'Data Science':
        return 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950 dark:text-teal-300';
      case 'Cybersecurity':
        return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300';
      case 'Professional Development':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300';
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
                <p className="text-primary font-medium text-sm mb-2">
                  {cert.organization}
                </p>
                {cert.credentialId && (
                  <p className="text-muted-foreground text-xs mb-3 font-mono">
                    ID: {cert.credentialId}
                  </p>
                )}
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
              <div className="text-3xl font-bold text-primary">10</div>
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