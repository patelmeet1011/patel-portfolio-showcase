import React from 'react';
import EnhancedHeader from '@/components/EnhancedHeader';
import MasterfulHero from '@/components/MasterfulHero';
import MasterfulAbout from '@/components/MasterfulAbout';
import MasterfulSkills from '@/components/MasterfulSkills';
import MasterfulProjects from '@/components/MasterfulProjects';
import MasterfulExperience from '@/components/MasterfulExperience';
import MasterfulEducation from '@/components/MasterfulEducation';
import MasterfulCertificates from '@/components/MasterfulCertificates';
import MasterfulContact from '@/components/MasterfulContact';
import MasterfulFooter from '@/components/MasterfulFooter';
import Testimonials from '@/components/Testimonials';
import Achievements from '@/components/Achievements';
import CourseWork from '@/components/CourseWork';
import AnimatedSection from '@/components/AnimatedSection';
import CursorEffect from '@/components/CursorEffect';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Index = () => {
  useSmoothScroll();
  
  return (
    <div className="min-h-screen font-sans">
      <CursorEffect />
      <EnhancedHeader />
      <MasterfulHero />
      <MasterfulAbout />
      <MasterfulSkills />
      <MasterfulProjects />
      <MasterfulExperience />
      <MasterfulEducation />
      <AnimatedSection>
        <CourseWork />
      </AnimatedSection>
      <AnimatedSection>
        <Achievements />
      </AnimatedSection>
      <MasterfulCertificates />
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <MasterfulContact />
      <MasterfulFooter />
    </div>
  );
};

export default Index;