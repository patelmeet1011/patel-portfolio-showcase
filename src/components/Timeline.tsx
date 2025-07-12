import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';
import { Calendar, MapPin, Building, GraduationCap, Trophy, Code2 } from 'lucide-react';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  type: 'education' | 'work' | 'project' | 'achievement';
  icon: React.ReactNode;
}

const timelineData: TimelineEvent[] = [
  {
    id: '1',
    date: 'Jan 2024 - Present',
    title: 'Master of Science in Information Technology',
    subtitle: 'University of Massachusetts Boston',
    description: 'Specializing in Data Analytics, Cloud Computing, and Business Intelligence. Current GPA: 3.8/4.0',
    location: 'Boston, MA',
    type: 'education',
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    id: '2',
    date: 'Jun 2022 - Aug 2022',
    title: 'Data Analyst Intern',
    subtitle: 'Novus Logics',
    description: 'Analyzed customer data patterns, created interactive dashboards, and presented insights to stakeholders. Recognized for punctuality and analytical thinking.',
    location: 'Ahmedabad, India',
    type: 'work',
    icon: <Building className="w-6 h-6" />
  },
  {
    id: '3',
    date: 'Oct 2022 - Nov 2022',
    title: 'US Pollution Data Dashboard (2000–2016)',
    subtitle: 'UMass Boston - Academic Project',
    description: 'Created interactive Tableau dashboard analyzing air pollution trends across U.S. states. Built state-by-state heatmaps and trend visualizations.',
    location: 'Boston, MA',
    type: 'project',
    icon: <Code2 className="w-6 h-6" />
  },
  {
    id: '4',
    date: 'Jan 2022 - May 2022',
    title: 'Ubuntu Server Installation & Configuration',
    subtitle: 'System Administration Project',
    description: 'Installed and configured Ubuntu 20.04 LTS Server with SSH and RDP access. Managed user accounts, network configuration, and security protocols.',
    location: 'UMass Boston',
    type: 'project',
    icon: <Code2 className="w-6 h-6" />
  },
  {
    id: '5',
    date: '2021 - 2024',
    title: 'Multiple Professional Certifications',
    subtitle: 'AWS, Google Analytics, SQL',
    description: 'Earned certifications in AWS Essential Training, Google Analytics (Beginners & Power User), SQL (Intermediate & Advanced), and Google Foundation.',
    location: 'Online',
    type: 'achievement',
    icon: <Trophy className="w-6 h-6" />
  }
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-blue-500';
      case 'work': return 'bg-green-500';
      case 'project': return 'bg-purple-500';
      case 'achievement': return 'bg-yellow-500';
      default: return 'bg-primary';
    }
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'education': return 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950';
      case 'work': return 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950';
      case 'project': return 'border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950';
      case 'achievement': return 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950';
      default: return 'border-border bg-card';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of my educational milestones, professional experiences, and key projects
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          <div className="space-y-12">
            {timelineData.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Node */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${getTypeColor(event.type)} text-white shadow-lg`}
                >
                  {event.icon}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-background"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 hsl(var(--primary)/0.4)",
                        "0 0 0 10px hsl(var(--primary)/0)",
                        "0 0 0 0 hsl(var(--primary)/0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>

                {/* Event Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex-1 p-6 rounded-lg border-2 shadow-lg backdrop-blur-sm ${getTypeStyles(event.type)} transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <motion.h3
                        whileHover={{ color: "hsl(var(--primary))" }}
                        className="text-xl font-bold text-foreground mb-1"
                      >
                        {event.title}
                      </motion.h3>
                      <p className="text-primary font-medium">{event.subtitle}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>

                  {/* Type Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${getTypeColor(event.type)} text-white`}
                  >
                    {event.type}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Timeline End Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: timelineData.length * 0.2 }}
            className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg ml-8 mt-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;