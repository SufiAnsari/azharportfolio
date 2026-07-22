import React from 'react';

/**
 * JsonLd component for structured data (Schema.org)
 * Implements ProfilePage, Person, and WebSite schemas for Google Search & AI search crawlers.
 */
export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': 'https://azhar-hakim-portfolio.netlify.app/#profilepage',
        url: 'https://azhar-hakim-portfolio.netlify.app/',
        name: 'Azhar Hakim — IT Analyst & Software Developer',
        description:
          'Official portfolio of Azhar Hakim, IT Analyst at Capita specializing in enterprise endpoint support, Windows infrastructure, PowerShell scripting, and C# / .NET development in Pune.',
        mainEntity: {
          '@id': 'https://azhar-hakim-portfolio.netlify.app/#person',
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://azhar-hakim-portfolio.netlify.app/#person',
        name: 'Azhar Hakim',
        jobTitle: 'IT Analyst & Software Developer',
        description:
          'Experienced IT Analyst at Capita with background in enterprise IT support, Windows Server services, PowerShell scripting, and C# .NET software development.',
        url: 'https://azhar-hakim-portfolio.netlify.app/',
        email: 'azarhakim55@gmail.com',
        sameAs: ['https://www.linkedin.com/in/azhar-hakim-2498b9217'],
        worksFor: {
          '@type': 'Organization',
          name: 'Capita',
        },
        alumniOf: {
          '@type': 'Organization',
          name: 'Allscripts Technology',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        knowsAbout: [
          'IT Support & Endpoint Management',
          'Windows Server Infrastructure',
          'DNS & DHCP Network Services',
          'Active Directory Administration',
          'PowerShell Scripting & Automation',
          'C# Programming Language',
          '.NET Framework & .NET Core',
          'SQL Database Queries & Modeling',
          'ITSM Ticketing & Incident Resolution',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://azhar-hakim-portfolio.netlify.app/#website',
        url: 'https://azhar-hakim-portfolio.netlify.app/',
        name: 'Azhar Hakim Portfolio',
        publisher: {
          '@id': 'https://azhar-hakim-portfolio.netlify.app/#person',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
