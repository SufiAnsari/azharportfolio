'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WordsPullUpMultiStyle } from '@/components/ui/words-pull-up-multi-style';
import { AnimatedLetter } from '@/components/ui/animated-letter';
import { ShieldCheck, Code2, Server, MapPin } from 'lucide-react';

const ABOUT_TEXT =
  'Over the last four years I have worked as an IT Analyst at Capita delivering endpoint support and incident resolution, and before that as a Junior Software Developer at Allscripts Technology building and maintaining .NET applications with C# and SQL. I thrive at the intersection of infrastructure reliability and software quality.';

const HEADING_SEGMENTS = [
  {
    text: 'I am Azhar Hakim,',
    className: 'font-normal',
  },
  {
    text: 'an IT Analyst',
    className: 'font-serif-italic text-white',
  },
  {
    text: 'with expertise in endpoint support, Windows infrastructure, and .NET development.',
    className: 'font-normal',
  },
];

const METRICS = [
  {
    icon: Server,
    value: '4+ Years',
    label: 'Enterprise IT Experience',
    detail: 'Capita & Allscripts Technology',
  },
  {
    icon: Code2,
    value: '.NET & C#',
    label: 'Application Support & Dev',
    detail: 'SQL, PowerShell & TypeScript',
  },
  {
    icon: ShieldCheck,
    value: 'Endpoint SLAs',
    label: 'Incident Resolution & Reliability',
    detail: 'Windows Server, DNS / DHCP',
  },
  {
    icon: MapPin,
    value: 'Pune, India',
    label: 'Location & Availability',
    detail: 'On-site & Remote Ready',
  },
];

/**
 * AboutSection — Azhar Hakim Portfolio
 *
 * Asymmetric 2-column layout:
 * - Left: Editorial typography with Instrument Serif accents & scroll-linked text reveal
 * - Right: 2x2 Glassmorphic metric highlight cards
 */
export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const chars = ABOUT_TEXT.split('');
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#08080a] py-16 sm:py-24 md:py-28 px-4 sm:px-6"
    >
      <div className="ambient-glow absolute inset-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column (7 cols) — Bio & Editorial Typography */}
          <motion.div
            className="lg:col-span-7 glass-card rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              {/* Small Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-widest text-primary/70 mb-6 sm:mb-8 font-medium">
                <span>About Me</span>
              </div>

              {/* Mixed-Font Heading */}
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-primary leading-[1.15] tracking-[-0.03em]"
              >
                <WordsPullUpMultiStyle segments={HEADING_SEGMENTS} />
              </h2>

              {/* Character reveal paragraph */}
              <p className="text-sm sm:text-base md:text-lg text-primary/80 leading-relaxed font-light">
                {chars.map((char, i) => (
                  <AnimatedLetter
                    key={i}
                    char={char}
                    index={i}
                    totalChars={chars.length}
                    scrollTarget={sectionRef}
                  />
                ))}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-primary/50">
              <span>IT Analyst · Pune, MH</span>
              <span className="font-mono">Capita IT Services</span>
            </div>
          </motion.div>

          {/* Right Column (5 cols) — Key Stat Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {METRICS.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  className="glass-card rounded-2xl p-6 flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight tabular-nums">
                      {metric.value}
                    </h3>
                    <p className="text-xs font-medium text-primary/90 mt-0.5">
                      {metric.label}
                    </p>
                    <p className="text-[11px] text-primary/50 mt-1">
                      {metric.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
