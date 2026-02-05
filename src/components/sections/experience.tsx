'use client';

import { Container, Section } from '@/components/ui';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { HyperText } from '@/components/ui/hyper-text';

export function ExperienceSection() {
  const experienceData = [
    {
      role: 'IT Analyst',
      company: 'Capita',
      period: 'May 2023 - Present',
      summary: 'Delivering endpoint support and incident resolution for enterprise users while keeping Windows services reliable.',
      highlights: [
        'Diagnose and resolve Windows desktop issues, application errors, and connectivity problems for end users.',
        'Track incidents and service requests through ticketing workflows, documenting fixes and root causes.',
        'Support core infrastructure services such as DNS/DHCP and assist with system stability checks.',
        'Coordinate with internal teams to prioritize critical incidents and restore services quickly.'
      ],
      color: 'border-accent',
    },
    {
      role: 'Junior Software Developer',
      company: 'Allscripts Technology',
      period: 'Sep 2021 - Apr 2023',
      summary: 'Maintained .NET applications and supported data workflows alongside development teams.',
      highlights: [
        'Developed and maintained .NET applications with C# and SQL for internal business processes.',
        'Assisted with bug fixes, code updates, and deployments in collaboration with senior developers.',
        'Supported database queries and data validation to keep application outputs accurate.',
        'Documented changes and helped with user support for application updates.'
      ],
      color: 'border-accent-secondary',
    },
  ];

  return (
    <Section
      id="experience"
      padding="xl"
      className="relative"
      ariaLabelledby="experience-heading"
    >
      {/* Local ambient glow used to enhance glass effect if global isn't enough in this spot */}
      <div
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="md">
        <div className="text-center mb-16 relative z-10">
          <HyperText
            text="IT Analyst Experience"
            className="text-4xl font-bold mx-auto"
            id="experience-heading"
            as="h2"
          />
          <p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
            Hands-on support and development experience aligned with endpoint support engineer responsibilities.
          </p>
        </div>

        <div className="space-y-8 relative z-10">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Card with GlowingEffect */}
              <div className={`relative glass-panel p-8 rounded-2xl border-l-4 ${item.color} hover:-translate-y-1 transition-all duration-300`}>
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                  movementDuration={0.5}
                />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                  <p className="text-accent font-medium mb-4">{item.company}</p>
                  <div className="flex items-center gap-4 text-sm text-foreground-muted font-mono mb-6">
                    <span>{item.period}</span>
                  </div>
                  <p className="text-foreground-muted leading-relaxed text-lg mb-6">{item.summary}</p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground-muted">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
