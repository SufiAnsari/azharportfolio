import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  ExperienceSection,
  ContactSection,
} from '@/components/sections';

/**
 * Azhar Hakim Portfolio
 * Prisma-style landing page with portfolio data
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
