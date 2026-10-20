import React, { useEffect } from 'react';
import { AboutSection } from './AboutSection';
import { ProcessSection } from './ProcessSection';
import { FaqSection } from './FaqSection';
import { FinalCta } from './FinalCta';
import { PageView } from './Navbar';

interface AboutPageProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-20">
      {/* Main Narrative and Founder Section */}
      <AboutSection />

      {/* How we work */}
      <ProcessSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Final Call to Action */}
      <FinalCta />
    </div>
  );
};
