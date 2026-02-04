'use client';

import { Container, Section } from '@/components/ui';
import { GlowingEffect } from '@/components/ui/glowing-effect';

/* Helper Component for Dot Progress */
const SkillRow = ({ name, level }: { name: string; level: number }) => {
  // Level 1-5
  const totalDots = 5;

  return (
    <div className="flex items-center gap-4 mb-4 group">
      <div className="w-8 h-8 rounded bg-surface border border-white/10 flex items-center justify-center text-xs font-mono text-foreground-muted group-hover:border-accent transition-colors">
        {name.substring(0, 2).toUpperCase()}
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">{name}</span>
        </div>
        {/* Dots container */}
        <div className="flex gap-2">
          {[...Array(totalDots)].map((_, i) => (
            <div
              key={i}
              className={`
                                h-3 w-3 rounded-full 
                                ${i < level ? 'bg-gradient-primary shadow-[0_0_8px_rgba(255,0,127,0.5)]' : 'bg-surface border border-white/10'}
                            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Skills Section Component
 * Updated: Removed "React" and "Active Directory" as requested.
 */
export function SkillsSection() {
  const skills = {
    "Development": [
      { name: "C# / .NET", level: 5 },
      { name: "SQL", level: 4 },
      { name: "TypeScript", level: 3 },
      // Removed React
    ],
    "Infrastructure": [
      { name: "Windows Server", level: 5 },
      { name: "PowerShell", level: 4 },
      { name: "Networking (DNS/DHCP)", level: 5 },
      // Removed Active Directory
    ]
  };

  return (
    <Section id="skills" padding="xl">
      <Container size="lg">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-bold mb-6 text-foreground-muted flex items-center gap-2">
                <span className="w-2 h-8 bg-accent-secondary rounded-full" />
                {category}
              </h3>
              <div className="relative bg-surface/30 p-6 rounded-2xl border border-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
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
                  {items.map(skill => (
                    <SkillRow key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
