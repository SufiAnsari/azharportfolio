import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  ExperienceSection,
  ContactSection,
} from '@/components/sections';
import { Footer } from '@/components/layout/footer';
import { ErrorBoundary } from '@/components/ui/error-boundary';

/**
 * Azhar Hakim Portfolio — Redesigned Landing Page
 *
 * Each section is wrapped in an ErrorBoundary for resilience.
 */
export default function HomePage() {
  return (
    <>
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <AboutSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <FeaturesSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <ExperienceSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <ContactSection />
        <Footer />
      </ErrorBoundary>
    </>
  );
}
