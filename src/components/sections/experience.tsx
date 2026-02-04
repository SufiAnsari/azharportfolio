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
      description: 'Providing high-quality technical support for enterprise clients, managing critical incidents, and maintaining infrastructure stability.',
      color: 'border-accent'
    },
    {
      role: 'Junior Software Developer',
      company: 'Allscripts Technology',
      period: 'Sep 2021 - Apr 2023',
      description: 'Developed and maintained reliable desktop and web applications using the .NET ecosystem.',
      color: 'border-accent-secondary'
    },
  ];

  return (
    <Section id="experience" padding="xl" className="relative">
      {/* Local ambient glow used to enhance glass effect if global isn't enough in this spot */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <Container size="md">
        <div className="text-center mb-16 relative z-10">
          <HyperText text="Experience" className="text-4xl font-bold mx-auto" />
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
                  <p className="text-foreground-muted leading-relaxed text-lg">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
