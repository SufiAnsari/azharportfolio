import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  ExperienceSection,
  ContactSection,
} from '@/components/sections';
import { ErrorBoundary } from '@/components/ui/error-boundary';

/**
 * Azhar Hakim Portfolio
 * Prisma-style landing page with portfolio data.
 *
 * Each section is wrapped in its own ErrorBoundary so that a render crash
 * in one section never takes down the rest of the page. Users see a safe
 * fallback message; full error details are logged server-side only.
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
      </ErrorBoundary>
    </>
  );
}

