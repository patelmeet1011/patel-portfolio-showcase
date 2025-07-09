import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, GraduationCap, Award, Users } from 'lucide-react';

const Education = () => {
  const courses = [
    {
      code: "IT471",
      title: "Data Analytics & Business Intelligence",
      instructor: "Prof. Shan Jiang",
      grade: "A",
      description: "Advanced data analytics techniques, machine learning algorithms, and business intelligence solutions.",
      skills: ["Python", "Machine Learning", "Data Visualization", "Statistical Analysis"],
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500"
    },
    {
      code: "IT341", 
      title: "System Administration",
      instructor: "UMass Boston Faculty",
      grade: "A",
      description: "Linux server administration, network configuration, and secure remote access implementation.",
      skills: ["Linux", "Ubuntu Server", "SSH", "Network Security", "System Configuration"],
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      code: "PM Course",
      title: "Project Management",
      instructor: "Prof. Michael Dotto",
      grade: "Top 3 Student",
      description: "Comprehensive project management methodologies, leadership principles, and team collaboration.",
      skills: ["Project Planning", "Leadership", "Team Management", "Process Improvement"],
      icon: Award,
      color: "from-purple-500 to-violet-500"
    }
  ];

  const achievements = [
    {
      title: "Magna Cum Laude Graduate",
      detail: "GPA 3.594/4.0",
      icon: GraduationCap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Dean's List Recipient", 
      detail: "Multiple Semesters",
      icon: Award,
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/10 via-background to-muted/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border border-primary/20">
            Academic Excellence
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            UMass Boston <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic coursework and achievements that demonstrate consistent excellence and 
            leadership in data analytics, system administration, and project management.
          </p>
        </div>

        {/* Academic Achievements */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="p-6 hover-lift glass-effect animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center animate-glow`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{achievement.detail}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index}
              className="p-6 hover-lift glass-effect animate-bounce-in group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background glow */}
              <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${course.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center animate-glow`}>
                    <course.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-green-100 text-green-800 border border-green-200">
                    Grade: {course.grade}
                  </Badge>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {course.code}: {course.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">{course.instructor}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="text-xs hover-scale"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 max-w-2xl mx-auto glass-effect hover-lift animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Academic Excellence Meets Practical Application
            </h3>
            <p className="text-muted-foreground mb-6">
              Consistently recognized for outstanding academic performance and the ability to 
              translate theoretical knowledge into real-world solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-primary/10 text-primary px-4 py-2">
                3.594/4.0 GPA
              </Badge>
              <Badge className="bg-accent/10 text-accent px-4 py-2">
                Magna Cum Laude
              </Badge>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">
                Dean's List
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;