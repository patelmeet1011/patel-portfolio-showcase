import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  BarChart3, 
  Cloud, 
  Settings, 
  Shield, 
  Brain,
  Database,
  Sparkles
} from 'lucide-react';

const MasterfulSkills = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const skillCategories = [
    {
      title: "Programming & Languages",
      icon: Code2,
      skills: ["Python", "R", "SQL", "Java", "JavaScript", "HTML/CSS", "Unix/Linux"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200/50"
    },
    {
      title: "Data Analysis & Visualization", 
      icon: BarChart3,
      skills: ["Tableau", "Power BI", "Excel (PivotTables, VBA)", "Google Analytics", "ETL", "Data Warehousing", "Data Modeling", "Statistical Modeling"],
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200/50"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (Redshift, Glue)", "Azure (Synapse, Databricks)", "GCP", "Apache Airflow"],
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200/50"
    },
    {
      title: "Business & Process",
      icon: Settings,
      skills: ["Agile Methodologies", "Jira", "Confluence", "CRM/ERP", "Business Process Analysis", "KPI Monitoring"],
      gradient: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200/50"
    },
    {
      title: "Compliance & Security",
      icon: Shield,
      skills: ["HIPAA", "GDPR", "Data Security", "CompTIA CySA+", "AWS Certified"],
      gradient: "from-red-500/20 to-pink-500/20",
      iconColor: "text-red-600",
      borderColor: "border-red-200/50"
    },
    {
      title: "Business Intelligence",
      icon: Brain,
      skills: ["ETL Development", "Data Warehousing", "Predictive Modeling", "A/B Testing", "Customer Segmentation"],
      gradient: "from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200/50"
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-radial opacity-15"
        />
      </div>

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
              <Database className="w-4 h-4 mr-2" />
              Technical Skills
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Technology{' '}
            <motion.span 
              className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Expertise
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Extensive experience across multiple domains of IT and data analytics, 
            with expertise in <span className="text-primary font-medium">modern tools and technologies</span> that drive business success.
          </motion.p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className={`p-8 h-full elegant-border hover:elegant-shadow-hover transition-all duration-500 bg-gradient-to-br ${category.gradient} backdrop-blur-sm ${category.borderColor}`}>
                {/* Enhanced Icon */}
                <motion.div 
                  className={`w-16 h-16 bg-card rounded-2xl flex items-center justify-center mb-6 elegant-shadow group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 10 }}
                >
                  <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                </motion.div>
                
                {/* Category Title */}
                <motion.h3 
                  className="font-bold text-foreground mb-6 text-xl leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {category.title}
                </motion.h3>
                
                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.3 + index * 0.1 + skillIndex * 0.05, 
                        duration: 0.5 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                    >
                      <motion.div 
                        className={`w-2 h-2 ${category.iconColor} rounded-full flex-shrink-0`}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: skillIndex * 0.1
                        }}
                      />
                      <span className="text-muted-foreground font-medium hover:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative accent */}
                <motion.div
                  className={`absolute top-4 right-4 w-12 h-12 ${category.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="max-w-3xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <Card className="p-8 elegant-border hover:elegant-shadow-hover transition-all duration-500 bg-gradient-to-r from-primary/5 to-primary/10">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Let's discuss how my technical expertise can drive success for your next project.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterfulSkills;