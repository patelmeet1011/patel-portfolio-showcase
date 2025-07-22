import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  Star,
  Target,
  Zap
} from 'lucide-react';

const MasterfulAbout = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const stats = [
    { 
      icon: TrendingUp, 
      number: "2+", 
      label: "Years Experience",
      description: "Professional data analytics",
      color: "text-blue-600"
    },
    { 
      icon: Award, 
      number: "29+", 
      label: "Certifications",
      description: "Industry credentials",
      color: "text-emerald-600"
    },
    { 
      icon: Database, 
      number: "50+", 
      label: "Projects",
      description: "Successful deliveries",
      color: "text-purple-600"
    },
    { 
      icon: Brain, 
      number: "3.6", 
      label: "GPA",
      description: "Magna Cum Laude",
      color: "text-orange-600"
    },
  ];

  const highlights = [
    {
      icon: Briefcase,
      title: "Current Role",
      description: "Data Analyst at Mobiquity Inc.",
      detail: "Leading data-driven insights and analytics solutions",
      accent: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "BS Information Technology",
      detail: "UMass Boston • Magna Cum Laude • Dean's List",
      accent: "bg-emerald-500/10 text-emerald-600"
    },
    {
      icon: MapPin,
      title: "Location", 
      description: "Boston, Massachusetts",
      detail: "Open to remote and hybrid opportunities",
      accent: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Target,
      title: "Specialization",
      description: "Business Intelligence & Analytics",
      detail: "Cloud technologies, ML, data visualization",
      accent: "bg-orange-500/10 text-orange-600"
    }
  ];

  const coreSkills = [
    "Python", "SQL", "Tableau", "Power BI", "AWS", "Azure", "GCP", 
    "Apache Airflow", "Machine Learning", "Data Visualization", 
    "Business Intelligence", "Statistical Analysis", "ETL", "Database Design"
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial opacity-20"
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
              <Star className="w-4 h-4 mr-2" />
              About Me
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Passionate About{' '}
            <motion.span 
              className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Data Stories
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Transforming complex datasets into strategic insights that drive business decisions. 
            I believe in the power of <span className="text-primary font-medium">data storytelling</span> and 
            creating solutions that deliver measurable value.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
          {/* Left Content - Enhanced */}
          <motion.div
            className="lg:col-span-7 space-y-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.p 
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                With over <span className="text-primary font-medium">2+ years</span> of hands-on experience in the IT field, 
                I specialize in transforming raw data into strategic insights that drive business decisions. 
                My expertise spans across data analytics, cloud technologies, and business intelligence solutions.
              </motion.p>
              
              <motion.p 
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Currently at <span className="text-primary font-medium">Mobiquity Inc.</span>, I translate complex 
                business requirements into insights, optimize product performance, and enhance marketing strategies 
                using cutting-edge tools while ensuring <span className="text-primary font-medium">HIPAA and GDPR compliance</span>.
              </motion.p>
            </div>

            {/* Enhanced Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <Card className="p-6 h-full elegant-border hover:elegant-shadow-hover transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className={`w-12 h-12 ${highlight.accent} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <highlight.icon className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 text-lg">{highlight.title}</h3>
                        <p className="text-primary font-medium mb-2">{highlight.description}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{highlight.detail}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Enhanced Stats */}
          <motion.div
            ref={ref}
            className="lg:col-span-5 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.15,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Card className="p-6 text-center h-full elegant-border hover:elegant-shadow-hover transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <motion.div 
                    className={`w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </motion.div>
                  <motion.div 
                    className="text-4xl font-bold text-foreground mb-3 font-display"
                    initial={{ scale: 0.5 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm font-semibold text-primary mb-2">{stat.label}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{stat.description}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Badge className="mb-6 bg-primary/5 text-primary border-primary/20 px-6 py-3 elegant-border">
              <Zap className="w-4 h-4 mr-2" />
              Core Expertise
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Technical Mastery</h3>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.05,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-6 py-3 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default elegant-border"
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

export default MasterfulAbout;