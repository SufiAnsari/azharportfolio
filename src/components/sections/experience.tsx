'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WordsPullUpMultiStyle } from '@/components/ui/words-pull-up-multi-style';

const EXPERIENCE = [
  {
    role: 'IT Analyst',
    company: 'Capita',
    period: 'May 2023 – Present',
    summary:
      'Delivering endpoint support and incident resolution for enterprise users while keeping Windows services reliable.',
    highlights: [
      'Diagnose and resolve Windows desktop issues, application errors, and connectivity problems for end users.',
      'Track incidents and service requests through ticketing workflows, documenting fixes and root causes.',
      'Support core infrastructure services such as DNS/DHCP and assist with system stability checks.',
      'Coordinate with internal teams to prioritise critical incidents and restore services quickly.',
    ],
  },
  {
    role: 'Junior Software Developer',
    company: 'Allscripts Technology',
    period: 'Sep 2021 – Apr 2023',
    summary:
      'Maintained .NET applications and supported data workflows alongside development teams.',
    highlights: [
      'Developed and maintained .NET applications with C# and SQL for internal business processes.',
      'Assisted with bug fixes, code updates, and deployments in collaboration with senior developers.',
      'Supported database queries and data validation to keep application outputs accurate.',
      'Documented changes and helped with user support for application updates.',
    ],
  },
];

const HEADER_SEGMENTS = [
  { text: 'Professional experience.', className: 'text-primary' },
  { text: ' Where I have made an impact.', className: 'text-gray-500' },
];

/**
 * ExperienceSection — Azhar Hakim Portfolio
 * Prisma-inspired dark cards with timeline layout.
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-black py-16 sm:py-20 px-4 sm:px-6">
      <div className="bg-noise absolute inset-0 opacity-[0.1] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={HEADER_SEGMENTS}
              containerClassName="flex-col sm:flex-row gap-x-2"
            />
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {EXPERIENCE.map((item, i) => (
            <ExperienceCard key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  item,
  index,
}: {
  item: (typeof EXPERIENCE)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl p-6 sm:p-8 md:p-10"
      style={{ backgroundColor: '#101010' }}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Top row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium" style={{ color: '#E1E0CC' }}>
            {item.role}
          </h3>
          <p className="text-primary/80 text-sm sm:text-base font-medium">{item.company}</p>
        </div>
        <span
          className="text-[10px] sm:text-xs tracking-widest uppercase shrink-0 px-3 py-1 rounded-full border"
          style={{ color: 'rgba(222,219,200,0.5)', borderColor: 'rgba(222,219,200,0.12)' }}
        >
          {item.period}
        </span>
      </div>

      {/* Summary */}
      <p className="text-gray-400 text-xs sm:text-sm mb-5 leading-relaxed">{item.summary}</p>

      {/* Highlights */}
      <ul className="space-y-2">
        {item.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="w-1 h-1 rounded-full mt-2 shrink-0"
              style={{ backgroundColor: '#DEDBC8', opacity: 0.4 }}
            />
            <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
