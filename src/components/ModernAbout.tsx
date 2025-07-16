import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Brain, 
  Database, 
  TrendingUp, 
  MapPin, 
  GraduationCap,
  Briefcase,
  Star
} from 'lucide-react';

const ModernAbout = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { 
      icon: TrendingUp, 
      number: "2+", 
      label: "Years Experience",
      description: "Professional experience in data analytics"
    },
    { 
      icon: Award, 
      number: "15+", 
      label: "Certifications",
      description: "Industry-recognized certifications"
    },
    { 
      icon: Database, 
      number: "50+", 
      label: "Projects Completed",
      description: "Successful data projects delivered"
    },
    { 
      icon: Brain, 
      number: "3.6", 
      label: "GPA",
      description: "Magna Cum Laude graduate"
    },
  ];

  const highlights = [
    {
      icon: Briefcase,
      title: "Current Role",
      description: "Data Analyst at Mobiquity Inc.",
      detail: "Leading data-driven insights and analytics solutions"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "BS Information Technology",
      detail: "UMass Boston • Magna Cum Laude • Dean's List"
    },
    {
      icon: MapPin,
      title: "Location", 
      description: "Boston, Massachusetts",
      detail: "Open to remote and hybrid opportunities"
    },
    {
      icon: Star,
      title: "Specialization",
      description: "Business Intelligence & Analytics",
      detail: "Cloud technologies, data visualization, predictive modeling"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-display font-semibold text-foreground mb-6">
            Passionate About{' '}
            <span className="text-primary">Data Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming complex datasets into strategic insights that drive business decisions. 
            I believe in the power of data storytelling and creating solutions that deliver measurable value.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 2+ years of hands-on experience in the IT field, I specialize in transforming 
                raw data into strategic insights that drive business decisions. My expertise spans across 
                data analytics, cloud technologies, and business intelligence solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working at Mobiquity Inc., I translate complex business requirements into insights, 
                optimize product performance, and enhance marketing strategies using tools like Apache Airflow, 
                AWS Glue, and ensuring HIPAA and GDPR compliance.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="p-6 h-full border-border/50 hover:border-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <highlight.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-1">{highlight.title}</h3>
                        <p className="text-sm text-primary font-medium mb-1">{highlight.description}</p>
                        <p className="text-xs text-muted-foreground">{highlight.detail}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="p-6 text-center h-full border-border/50 hover:border-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2 font-display">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8">Core Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Python", "SQL", "Tableau", "Power BI", "AWS", "Azure", "GCP", 
              "Apache Airflow", "Machine Learning", "Data Visualization", 
              "Business Intelligence", "Statistical Analysis", "ETL", "Database Design"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernAbout;