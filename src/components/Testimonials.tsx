import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=80&h=80&fit=crop&crop=face",
      content: "Meet's data analytics expertise transformed our marketing campaigns. His insights helped us achieve a 25% increase in ROI within just 3 months. Exceptional work!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "DataVision Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      content: "Working with Meet was a game-changer for our business intelligence. His cloud solutions optimized our data workflows and reduced processing time by 60%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      content: "Meet delivered exceptional Tableau dashboards that provided real-time insights into our operations. His attention to detail and technical skills are outstanding.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Data Science Lead",
      company: "Analytics Pro",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      content: "Meet's Python automation solutions saved our team countless hours. His ability to translate complex requirements into elegant solutions is remarkable.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="particle w-2 h-2 top-10 left-10" style={{ animationDelay: '0s' }}></div>
        <div className="particle w-1 h-1 top-20 right-20" style={{ animationDelay: '2s' }}></div>
        <div className="particle w-3 h-3 bottom-20 left-1/4" style={{ animationDelay: '4s' }}></div>
        <div className="particle w-1.5 h-1.5 top-1/3 right-1/3" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Clients Say About My <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from satisfied clients who have experienced the impact of 
            data-driven solutions and collaborative partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift glass-effect animate-scale-in group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <Avatar className="w-16 h-16 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;