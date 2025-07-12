
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Timeline from '@/components/Timeline';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Certificates />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
