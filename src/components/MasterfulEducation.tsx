import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Users, 
  Star,
  TrendingUp,
  Brain,
  Target,
  Trophy,
  Sparkles,
  Calendar
} from 'lucide-react';

const MasterfulEducation = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    {
      title: "Magna Cum Laude Graduate",
      detail: "GPA 3.594/4.0",
      description: "Graduated with high honors, demonstrating consistent academic excellence",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      metric: "Top 10%"
    },
    {
      title: "Dean's List Recognition", 
      detail: "Multiple Semesters",
      description: "Consistently recognized for outstanding academic performance",
      icon: Star,
      color: "from-purple-500 to-pink-500",
      metric: "4 Semesters"
    }
  ];

  const courses = [
    {
      code: "IT471",
      title: "Data Analytics & Business Intelligence",
      instructor: "Prof. Shan Jiang",
      grade: "A",
      description: "Advanced data analytics techniques, machine learning algorithms, and business intelligence solutions for enterprise decision-making.",
      skills: ["Python", "Machine Learning", "Data Visualization", "Statistical Analysis", "Predictive Modeling"],
      icon: Brain,
      color: "from-blue-500 to-indigo-600",
      projects: "5 Major Projects",
      highlight: "ML Specialization"
    },
    {
      code: "IT341", 
      title: "System Administration",
      instructor: "UMass Boston Faculty",
      grade: "A",
      description: "Comprehensive Linux server administration, network configuration, security protocols, and enterprise infrastructure management.",
      skills: ["Linux", "Ubuntu Server", "SSH", "Network Security", "System Configuration", "DevOps"],
      icon: Users,
      color: "from-emerald-500 to-teal-600",
      projects: "Infrastructure Setup",
      highlight: "Security Focus"
    },
    {
      code: "PM Course",
      title: "Project Management Excellence",
      instructor: "Prof. Michael Dotto",
      grade: "Top 3 Student",
      description: "Strategic project management methodologies, agile frameworks, leadership principles, and cross-functional team coordination.",
      skills: ["Agile", "Scrum", "Leadership", "Team Management", "Process Improvement", "Risk Management"],
      icon: Target,
      color: "from-purple-500 to-violet-600",
      projects: "Team Leadership",
      highlight: "Leadership Recognition"
    }
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
    <section id="education" className="py-32 scroll-mt-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50/40"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-violet-500/10 text-violet-600 border border-violet-200 px-4 py-2">
            <GraduationCap className="w-4 h-4 mr-2" />
            Academic Excellence
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Educational <span className="gradient-text">Foundation</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Built on a foundation of academic excellence and continuous learning, 
            combining theoretical knowledge with practical application.
          </p>
        </motion.div>

        {/* University Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="p-10 text-center glass-effect bg-white/80 backdrop-blur-xl border-0 hover:shadow-2xl transition-all duration-500">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">
              University of Massachusetts Boston
            </h3>
            <p className="text-xl text-violet-600 font-semibold mb-4">
              Bachelor of Science in Information Technology
            </p>
            <div className="flex justify-center space-x-6 text-sm text-slate-600">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                2020 - 2024
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                Magna Cum Laude
              </span>
              <span className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                3.594 GPA
              </span>
            </div>
          </Card>
        </motion.div>

        {/* Academic Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="p-8 glass-effect hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-xl">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                        {achievement.title}
                      </h3>
                      <Badge className="bg-violet-100 text-violet-700 border-violet-200">
                        {achievement.metric}
                      </Badge>
                    </div>
                    <p className="text-violet-600 font-semibold mb-3">{achievement.detail}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Coursework Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, rotateY: 5 }}
              className="group h-full"
            >
              <Card className="p-8 h-full glass-effect hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-xl relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${course.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <course.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-2">
                        Grade: {course.grade}
                      </Badge>
                      <div className="text-xs text-slate-500">{course.projects}</div>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-violet-600 transition-colors">
                      {course.code}
                    </h3>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      {course.title}
                    </h4>
                    <p className="text-sm text-violet-600 font-medium mb-3">{course.instructor}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {course.description}
                    </p>
                    
                    <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {course.highlight}
                    </Badge>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-slate-700">Technologies & Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="text-xs hover:bg-violet-50 hover:border-violet-200 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-12 text-center glass-effect bg-gradient-to-r from-violet-500/10 to-blue-500/10 border-0">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Academic Excellence Meets Real-World Application
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              A strong educational foundation combined with hands-on experience in cutting-edge 
              technologies, preparing for tomorrow's data challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-violet-500/10 text-violet-600 px-6 py-3 text-sm border-violet-200">
                <Trophy className="w-4 h-4 mr-2" />
                3.594/4.0 GPA
              </Badge>
              <Badge className="bg-blue-500/10 text-blue-600 px-6 py-3 text-sm border-blue-200">
                <Award className="w-4 h-4 mr-2" />
                Magna Cum Laude
              </Badge>
              <Badge className="bg-emerald-500/10 text-emerald-600 px-6 py-3 text-sm border-emerald-200">
                <Star className="w-4 h-4 mr-2" />
                Dean's List
              </Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterfulEducation;