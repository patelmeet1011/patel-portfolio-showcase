import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Users, 
  Database,
  BarChart3,
  Cloud,
  Award,
  Briefcase
} from 'lucide-react';

const MasterfulExperience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      company: "Mobiquity Inc.",
      location: "Waltham, MA",
      position: "Data Analyst",
      period: "Jan 2024 - Present",
      type: "Full-time",
      description: "Drive key business outcomes by translating complex client requirements into actionable data insights. Work directly contributes to improving digital products, enhancing marketing effectiveness, and ensuring data governance.",
      achievements: [
        { text: "Collaborated with clients using SQL, BigQuery, and Redshift to deliver data-driven insights", impact: "Client Success" },
        { text: "Analyzed user engagement data, improving digital product performance", impact: "15% Retention ↑" },
        { text: "Optimized marketing campaigns using Google Analytics and SQL", impact: "25% Engagement ↑" },
        { text: "Created interactive Tableau and Power BI dashboards for real-time KPI monitoring", impact: "Real-time Insights" },
        { text: "Applied A/B testing, customer segmentation, and predictive modeling", impact: "20% Campaign ROI ↑" },
        { text: "Built scalable data workflows with Apache Airflow and AWS Glue", impact: "HIPAA & GDPR Compliant" },
        { text: "Designed secure cloud data solutions on AWS, Azure, and Google Cloud", impact: "Enterprise Scale" }
      ],
      skills: ["SQL", "BigQuery", "Tableau", "Power BI", "AWS", "Python", "A/B Testing"],
      color: "from-blue-500 to-indigo-600",
      icon: Building2
    },
    {
      company: "Novus Logics",
      location: "Ahmedabad, India",
      position: "Data Analyst Intern",
      period: "Jun 2022 - Aug 2022",
      type: "Internship",
      description: "Focused on optimizing data processes and providing foundational analysis to support team objectives during a transformative internship experience.",
      achievements: [
        { text: "Spearheaded SQL optimization initiatives", impact: "60% Faster Queries" },
        { text: "Managed full data lifecycle including collection, cleaning, and preprocessing", impact: "99.5% Accuracy" },
        { text: "Conducted comprehensive Exploratory Data Analysis (EDA)", impact: "Key Insights" },
        { text: "Developed and maintained interactive Tableau dashboards", impact: "Stakeholder Ready" },
        { text: "Automated reporting processes with complex SQL queries", impact: "30% Efficiency ↑" },
        { text: "Provided technical support and resolved customer issues", impact: "High Satisfaction" }
      ],
      skills: ["SQL", "Tableau", "Data Cleaning", "EDA", "Reporting", "Customer Support"],
      color: "from-emerald-500 to-teal-600",
      icon: TrendingUp
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="experience" className="py-32 scroll-mt-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-blue-500/10 text-blue-600 border border-blue-200 px-4 py-2">
            <Briefcase className="w-4 h-4 mr-2" />
            Professional Journey
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transforming data into actionable insights across diverse industries, 
            driving growth and innovation through analytical excellence.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="p-8 lg:p-12 glass-effect hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-xl">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Company Info */}
                    <div className="lg:col-span-4">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <exp.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <Badge className="mb-2 bg-slate-100 text-slate-700">
                            {exp.type}
                          </Badge>
                          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {exp.position}
                          </h3>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-slate-600">
                          <Building2 className="w-5 h-5 mr-3 text-blue-500" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <MapPin className="w-5 h-5 mr-3 text-emerald-500" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                          <Calendar className="w-5 h-5 mr-3 text-orange-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="outline"
                            className="text-xs hover:bg-blue-50 hover:border-blue-200 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="lg:col-span-8">
                      <h4 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-yellow-500" />
                        Key Achievements & Impact
                      </h4>
                      
                      <div className="grid gap-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.3 + achIndex * 0.1 
                            }}
                            className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                            <div className="flex-1">
                              <p className="text-slate-700 leading-relaxed mb-2">
                                {achievement.text}
                              </p>
                              <Badge className="bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 border-0 text-xs">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                {achievement.impact}
                              </Badge>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <Card className="max-w-4xl mx-auto p-12 glass-effect bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-0">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Drive Your Data Success?
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's collaborate to transform your data challenges into competitive advantages 
              through innovative analytics and strategic insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-blue-500/10 text-blue-600 px-6 py-3 text-sm">
                <Database className="w-4 h-4 mr-2" />
                Data Analytics
              </Badge>
              <Badge className="bg-emerald-500/10 text-emerald-600 px-6 py-3 text-sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Business Intelligence
              </Badge>
              <Badge className="bg-indigo-500/10 text-indigo-600 px-6 py-3 text-sm">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud Solutions
              </Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterfulExperience;