import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Send, 
  MessageCircle, 
  CheckCircle, 
  Linkedin, 
  Download, 
  Mail,
  Clock,
  MapPin,
  Phone,
  Globe,
  Zap,
  Heart
} from 'lucide-react';

const MasterfulContact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xblolkkn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully! 🎉",
          description: "Thank you for reaching out! I'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or email me directly at patelmeet1348@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "patelmeet1348@gmail.com",
      subtitle: "Feel free to reach out anytime",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      subtitle: "Quick and professional replies",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Boston, MA",
      subtitle: "EST Timezone",
      color: "from-purple-500 to-violet-600"
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
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-indigo-500/10 text-indigo-600 border border-indigo-200 px-4 py-2">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Let's Create Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your data into actionable insights? Let's discuss how we can 
            collaborate to drive your business forward with innovative analytics solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-5 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Whether you're looking to optimize your data workflows, implement business intelligence 
                solutions, or explore new analytical opportunities, I'm here to help bring your vision to life.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <Card className="p-6 glass-effect hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-xl">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-slate-700 font-medium">{info.value}</p>
                        <p className="text-slate-500 text-sm">{info.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-6 h-auto flex-col gap-3 group border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href="https://www.linkedin.com/in/meet-patel-7581b31b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Connect on LinkedIn</span>
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300 p-6 h-auto flex-col gap-3 group bg-white/50 backdrop-blur-sm"
              >
                <a
                  href="/meetpatelResume.pdf"
                  download="meetpatelResume.pdf"
                  className="flex flex-col items-center gap-3"
                >
                  <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Download Resume</span>
                </a>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 p-6 rounded-2xl border border-indigo-100"
            >
              <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                Why Work With Me?
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">24h</div>
                  <div className="text-slate-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">100%</div>
                  <div className="text-slate-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <Card className="p-8 lg:p-12 glass-effect border-0 bg-white/80 backdrop-blur-xl shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Send Me a Message
                </h3>
                <p className="text-slate-600">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Your Name
                    </label>
                    <Input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="John Doe" 
                      required 
                      className="border-slate-200 focus:border-indigo-300 focus:ring-indigo-200 bg-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Email Address
                    </label>
                    <Input 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="john@example.com" 
                      required 
                      className="border-slate-200 focus:border-indigo-300 focus:ring-indigo-200 bg-white/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Subject
                  </label>
                  <Input 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Project Discussion / Collaboration Opportunity" 
                    required 
                    className="border-slate-200 focus:border-indigo-300 focus:ring-indigo-200 bg-white/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <Textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={6} 
                    placeholder="Tell me about your project, goals, and how I can help you achieve them..." 
                    required 
                    className="border-slate-200 focus:border-indigo-300 focus:ring-indigo-200 bg-white/50 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-4 text-lg font-semibold group transition-all duration-300 shadow-lg hover:shadow-xl border-0"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                    Secure & Confidential
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-red-500" />
                    Built with Care
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MasterfulContact;