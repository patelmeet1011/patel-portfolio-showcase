
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Ready To Get <span className="text-orange-500">Started?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can work together to transform your data into actionable insights. 
            I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Talk About You</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're looking for a data analyst, need help with business intelligence, 
                or want to discuss a potential collaboration, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                <p className="text-gray-600">meet.patel@email.com</p>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </Card>
              
              <Card className="p-6">
                <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                <p className="text-gray-600">New York, NY, USA</p>
              </Card>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl">
              <h4 className="font-semibold text-gray-800 mb-2">Quick Response Time</h4>
              <p className="text-gray-600 text-sm">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to call me directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 py-3"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
