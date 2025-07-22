import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Code, Database, Shield, Network, Server, BarChart3, Cpu } from 'lucide-react';

const CourseWork = () => {
  const courses = [
    {
      category: "Data Analytics & Visualization",
      icon: BarChart3,
      courses: [
        "Data Analytics",
        "Advanced Coding for Analytics", 
        "Data Warehousing",
        "Business Intelligence"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Database & Systems",
      icon: Database,
      courses: [
        "Databases",
        "Database Design & Implementation",
        "SQL for Data Analysis",
        "Big Data Technologies"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      category: "Programming & Scripting",
      icon: Code,
      courses: [
        "Intro to Scripting",
        "Intermediate Scripting", 
        "Object-Oriented Programming",
        "Web Development"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      category: "System Administration",
      icon: Server,
      courses: [
        "Introduction to Linux/Unix",
        "Intro to System Administration",
        "Ubuntu Server Configuration",
        "Virtualization Technologies"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Network & Security",
      icon: Shield,
      courses: [
        "Network Security",
        "Cybersecurity Fundamentals",
        "Data Privacy & Compliance",
        "Information Assurance"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      category: "Cloud & Infrastructure",
      icon: Cpu,
      courses: [
        "Cloud Computing Fundamentals",
        "AWS Essentials",
        "Azure Cloud Services",
        "DevOps Practices"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="coursework" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            Academic Foundation
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Relevant <span className="text-primary">Coursework</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Key courses from my Information Technology degree at UMass Boston that built 
            my expertise in data analytics, cloud technologies, and business intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="p-6 h-full border-border/50 hover:border-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{category.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.courses.map((course, courseIndex) => (
                    <motion.div
                      key={courseIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (courseIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-muted-foreground text-sm font-medium">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseWork;