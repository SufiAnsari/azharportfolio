'use client';

import { Container, Section } from '@/components/ui';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import Image from 'next/image';

export function AboutSection() {
  const services = [
    { title: 'Web Development', icon: '💻' },
    { title: 'Backend Systems', icon: '⚙️' },
    { title: 'Problem Solving', icon: '🧩' },
  ];

  return (
    <Section id="about" padding="xl" className="relative">
      <Container size="lg">
        {/* Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image (Reference style) */}
          <div className="relative mx-auto lg:mx-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/5 shadow-[0_0_50px_rgba(145,94,255,0.2)] glass-panel">
              <Image
                src="/profile.png"
                alt="Azhar Hakim"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative blob behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-transparent opacity-20 blur-3xl -z-10 rounded-full scale-110" />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="relative glass-panel p-8 rounded-2xl">
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
                <h3 className="text-2xl font-bold mb-4">I&apos;m Azhar Hakim</h3>
                <p className="text-foreground-muted leading-relaxed text-lg">
                  IT Analyst & Software Developer with a strong foundation in Computer Engineering.
                  I specialize in building reliable systems, automating workflows, and ensuring
                  operational excellence. With a background in both .NET development and
                  enterprise infrastructure support, I bridge the gap between code and operations.
                </p>
              </div>
            </div>

            {/* Service Pills / Cards with GlowingEffect */}
            <div className="flex flex-col gap-4">
              {services.map((service) => (
                <div key={service.title} className="relative glass-panel p-4 rounded-xl flex items-center gap-4 hover:border-accent/50 transition-colors cursor-default group">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.01}
                    borderWidth={2}
                    movementDuration={0.5}
                  />
                  <div className="relative w-12 h-12 rounded-lg bg-surface/50 flex items-center justify-center text-2xl border border-white/5 group-hover:bg-accent/10 transition-colors">
                    {service.icon}
                  </div>
                  <span className="relative font-semibold text-lg">{service.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
