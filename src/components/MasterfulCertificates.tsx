import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Award,
  ExternalLink,
  Linkedin,
  Database,
  BarChart3,
  Cloud,
  Zap,
  TrendingUp,
  Users,
  Shield,
  Globe,
  Brain,
  Clock
} from 'lucide-react';

const MasterfulCertificates = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const certificationCategories = [
    {
      title: "Cloud & Data Engineering",
      icon: Cloud,
      color: "from-blue-500 to-indigo-600",
      certifications: [
        {
          name: "AWS Essential Training for Developers",
          issuer: "Amazon Web Services",
          level: "Professional",
          description: "Comprehensive training in AWS cloud services, serverless architecture, and development best practices."
        }
      ]
    },
    {
      title: "Analytics & Intelligence",
      icon: BarChart3,
      color: "from-emerald-500 to-teal-600",
      certifications: [
        {
          name: "Google Analytics for Beginners",
          issuer: "Google",
          level: "Beginner",
          description: "Foundation in web analytics, user behavior tracking, and data-driven marketing insights."
        },
        {
          name: "Google Analytics for Power Users",
          issuer: "Google",
          level: "Advanced",
          description: "Advanced analytics techniques, custom reporting, and complex data analysis methodologies."
        },
        {
          name: "Google Analytics Certification",
          issuer: "Google",
          level: "Certified",
          description: "Official Google Analytics certification demonstrating expertise in digital analytics and reporting."
        }
      ]
    },
    {
      title: "Database Management",
      icon: Database,
      color: "from-purple-500 to-violet-600",
      certifications: [
        {
          name: "SQL Intermediate Certification",
          issuer: "Professional Training Institute",
          level: "Intermediate",
          description: "Advanced SQL querying, joins, subqueries, and database optimization techniques."
        },
        {
          name: "SQL Advanced Certification",
          issuer: "Professional Training Institute",
          level: "Advanced",
          description: "Complex database design, performance tuning, and enterprise-level SQL development."
        }
      ]
    },
    {
      title: "Professional Development",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      certifications: [
        {
          name: "Google Foundation Certification",
          issuer: "Google",
          level: "Foundation",
          description: "Fundamental knowledge in Google technologies, digital literacy, and modern workplace skills."
        }
      ]
    }
  ];

  const stats = [
    { label: "Certifications Earned", value: "7+", icon: Award },
    { label: "Training Hours", value: "200+", icon: Clock },
    { label: "Skill Areas", value: "4", icon: TrendingUp },
    { label: "Platforms Mastered", value: "3", icon: Globe }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="certificates" className="py-32 scroll-mt-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-amber-500/10 text-amber-600 border border-amber-200 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Professional Certifications
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Certified <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through industry-recognized 
            certifications from leading technology companies and educational institutions.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="p-6 text-center glass-effect hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {certificationCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group"
            >
              <Card className="p-8 lg:p-12 glass-effect hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-xl">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-slate-600">
                      {category.certifications.length} Certification{category.certifications.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                {/* Certifications Grid */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {category.certifications.map((cert, certIndex) => (
                    <motion.div
                      key={certIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + certIndex * 0.1 
                      }}
                      className="p-6 bg-slate-50/50 rounded-xl hover:bg-slate-50 transition-colors group/cert"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover/cert:text-amber-600 transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-amber-600 font-medium mb-1">{cert.issuer}</p>
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 ml-4">
                          {cert.level}
                        </Badge>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Card className="max-w-4xl mx-auto p-12 glass-effect bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-0">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Linkedin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                View All Certifications on LinkedIn
              </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Explore my complete certification portfolio and professional achievements 
                on my LinkedIn profile for detailed verification and additional credentials.
              </p>
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold group border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://www.linkedin.com/in/meet-patel-7581b31b9/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                View LinkedIn Certifications
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge className="bg-blue-500/10 text-blue-600 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Verified Credentials
              </Badge>
              <Badge className="bg-emerald-500/10 text-emerald-600 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Industry Recognition
              </Badge>
              <Badge className="bg-purple-500/10 text-purple-600 px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Continuous Learning
              </Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterfulCertificates;