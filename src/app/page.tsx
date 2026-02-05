import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ContactSection,
} from '@/components/sections';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://azhar-hakim-portfolio.netlify.app';

/**
 * Home Page
 * Main landing page for the portfolio
 */
export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Azhar Hakim',
        url: siteUrl,
        jobTitle: 'IT Analyst',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Pune',
          addressCountry: 'IN',
        },
        sameAs: ['https://www.linkedin.com/in/azhar-hakim-2498b9217'],
        knowsAbout: [
          'Endpoint Support',
          'IT Operations',
          'C#',
          '.NET',
          'SQL',
          'PowerShell',
          'Windows Server',
          'DNS',
          'DHCP',
        ],
      },
      {
        '@type': 'JobPosting',
        title: 'IT Analyst',
        description:
          'Open to IT Analyst and Endpoint Support Engineer roles focused on Windows endpoint support, incident resolution, and .NET application support.',
        employmentType: 'FULL_TIME',
        hiringOrganization: {
          '@type': 'Organization',
          name: 'Azhar Hakim Portfolio',
          sameAs: siteUrl,
        },
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Pune',
            addressCountry: 'IN',
          },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
