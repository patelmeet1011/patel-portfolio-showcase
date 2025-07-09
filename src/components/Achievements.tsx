import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Star, Target, Zap, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('achievements-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: Award,
      title: "Magna Cum Laude Graduate",
      description: "Graduated with GPA 3.594/4.0 from UMass Boston",
      category: "Academic Excellence",
      color: "from-yellow-500 to-orange-500",
      highlight: "Top 10% of Class"
    },
    {
      icon: Trophy,
      title: "Dean's List Recipient",
      description: "Recognized for academic achievement multiple semesters",
      category: "Academic Honor",
      color: "from-purple-500 to-blue-500",
      highlight: "Multiple Semesters"
    },
    {
      icon: Target,
      title: "25% ROI Improvement",
      description: "Achieved significant marketing campaign optimization",
      category: "Professional Impact",
      color: "from-green-500 to-blue-500",
      highlight: "Client Success"
    },
    {
      icon: Zap,
      title: "60% Processing Time Reduction",
      description: "Optimized SQL queries and data workflows",
      category: "Technical Excellence",
      color: "from-red-500 to-pink-500",
      highlight: "Performance Boost"
    },
    {
      icon: TrendingUp,
      title: "15% Customer Retention Increase",
      description: "Data-driven insights improved user engagement",
      category: "Business Growth",
      color: "from-indigo-500 to-purple-500",
      highlight: "User Impact"
    },
    {
      icon: Star,
      title: "Multi-Cloud Certification",
      description: "AWS, Azure, and Google Cloud expertise",
      category: "Professional Certification",
      color: "from-orange-500 to-red-500",
      highlight: "Industry Recognized"
    }
  ];

  const stats = [
    { number: "3.59", suffix: "/4.0", label: "Academic GPA", delay: "0s" },
    { number: "25", suffix: "%", label: "ROI Improvement", delay: "0.2s" },
    { number: "60", suffix: "%", label: "Processing Faster", delay: "0.4s" },
    { number: "100", suffix: "+", label: "Projects Delivered", delay: "0.6s" }
  ];

  const CountUp = ({ number, suffix, label, delay }: any) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          const target = parseFloat(number);
          const increment = target / 50;
          let current = 0;
          
          const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(counter);
            } else {
              setCount(current);
            }
          }, 30);
          
          return () => clearInterval(counter);
        }, parseFloat(delay) * 1000);
        
        return () => clearTimeout(timer);
      }
    }, [isVisible, number, delay]);

    return (
      <div className="text-center">
        <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
          {count.toFixed(number.includes('.') ? 2 : 0)}{suffix}
        </div>
        <div className="text-muted-foreground text-sm">{label}</div>
      </div>
    );
  };

  return (
    <section id="achievements-section" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border border-primary/20">
            Recognition & Impact
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Achievements & <span className="text-gradient-rainbow">Milestones</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of academic honors, professional achievements, and measurable impact 
            that showcase dedication to excellence and continuous growth.
          </p>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover-lift glass-effect">
              <CountUp {...stat} />
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift glass-effect animate-bounce-in group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background glow effect */}
              <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center animate-glow`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {achievement.highlight}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                <Badge className="bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary">
                  {achievement.category}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 max-w-2xl mx-auto glass-effect hover-lift">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Achieve More Together?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create measurable impact and achieve exceptional results for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all hover-scale">
                Start a Project
              </button>
              <button className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-full font-medium transition-all hover-scale">
                View Portfolio
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;