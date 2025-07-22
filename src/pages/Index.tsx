
import React from 'react';
import ModernHero from '@/components/ModernHero';
import ModernAbout from '@/components/ModernAbout';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import CourseWork from '@/components/CourseWork';
import AnimatedSection from '@/components/AnimatedSection';
import CursorEffect from '@/components/CursorEffect';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Index = () => {
  useSmoothScroll();
  
  return (
    <div className="min-h-screen font-sans">
      <CursorEffect />
      <ModernHero />
      <ModernAbout />
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      <AnimatedSection>
        <Education />
      </AnimatedSection>
      <AnimatedSection>
        <CourseWork />
      </AnimatedSection>
      <AnimatedSection>
        <Achievements />
      </AnimatedSection>
      <AnimatedSection>
        <Certificates />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
