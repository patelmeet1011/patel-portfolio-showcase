import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael A. Dotto",
      role: "Faculty & Industry Leader",
      company: "University of Massachusetts Boston",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      content: "Meet Patel is an excellent student, I enthusiastically support his application. He is intelligent, works well as a team member, and has demonstrated leadership potential. Meet produced quality work in my class and was among the top two or three students in all facets of the course. He writes well, is very analytical, and articulate in his presentation. I can see Meet as a successful professional; he has the capacity to understand material in depth.",
      rating: 5,
      credential: "617-645-2451 Michael.Dotto@umb.edu"
    },
    {
      name: "Shan Jiang",
      role: "Associate Professor",
      company: "University of Massachusetts Boston",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      content: "Meet was a student in my IT471 class and he was always dedicated to problem solving and projects where he could enhance data analytics skills. He got an A in my class.",
      rating: 5,
      credential: "IT471 - Data Analytics Course"
    },
    {
      name: "Santosh Pal & Hardik Patel",
      role: "Founder CEO & Sales Executive",
      company: "Novus Logics, Ahmedabad, India",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face",
      content: "This is to certify that Meet R Patel has successfully completed the internship as Data Analyst in Novus Logics from June 1st, 2022 to August 31st, 2022. During the period of his internship program with us he was found punctual, hardworking and inquisitive.",
      rating: 5,
      credential: "3-Month Data Analyst Internship"
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
            Professional <span className="gradient-text">Recommendations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Authentic testimonials from professors, industry leaders, and internship supervisors 
            who have witnessed my academic excellence and professional growth.
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

              <p className="text-muted-foreground leading-relaxed italic mb-4">
                "{testimonial.content}"
              </p>
              
              {testimonial.credential && (
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-primary/80 font-medium">
                    {testimonial.credential}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;