'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from '@/components/ui/words-pull-up-multi-style';

const EXPERIENCE = [
  {
    role: 'IT Analyst',
    company: 'Capita',
    location: 'Pune, India',
    period: 'May 2023 – Present',
    isCurrent: true,
    summary:
      'Delivering enterprise endpoint support and incident resolution while maintaining high Windows infrastructure reliability and service uptime.',
    highlights: [
      'Diagnose and resolve Windows desktop issues, application errors, and network connectivity problems for enterprise end users.',
      'Track incidents and service requests through ITSM ticketing workflows, documenting fixes and root-cause solutions.',
      'Support core infrastructure services including DNS, DHCP, Active Directory, and system stability checks.',
      'Coordinate across technical escalation teams to prioritize critical incidents and restore business-critical services rapidly.',
    ],
    skills: ['Windows Server', 'Active Directory', 'DNS / DHCP', 'ITSM', 'Endpoint Support', 'PowerShell'],
  },
  {
    role: 'Junior Software Developer',
    company: 'Allscripts Technology',
    location: 'Pune, India',
    period: 'Sep 2021 – Apr 2023',
    isCurrent: false,
    summary:
      'Developed and maintained .NET applications and supported backend data workflows alongside senior software engineering teams.',
    highlights: [
      'Developed and maintained enterprise .NET applications using C# and SQL for internal business processes.',
      'Assisted with bug fixes, code updates, and software deployments in collaboration with senior developers.',
      'Executed database queries, data modeling, and schema validations to ensure application outputs remained accurate.',
      'Documented technical specs and provided tier-2 support for newly deployed application updates.',
    ],
    skills: ['C#', '.NET Framework', 'SQL', 'Database Queries', 'Bug Fixing', 'Technical Documentation'],
  },
];

const HEADER_SEGMENTS = [
  { text: 'Professional Experience.', className: 'text-primary font-light' },
  { text: ' Proven track record of impact.', className: 'text-white/40 font-light' },
];

export function ExperienceSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative bg-[#08080a] py-20 sm:py-28 px-4 sm:px-6">
      <div className="ambient-glow absolute inset-0 pointer-events-none" />
      <div className="bg-noise absolute inset-0 opacity-[0.08] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-widest text-primary/70 mb-4 font-medium">
            <span>Career Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={HEADER_SEGMENTS}
              containerClassName="flex-col sm:flex-row gap-x-2"
            />
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500/50 before:via-white/10 before:to-transparent">
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
      className="relative pl-10 sm:pl-16"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Timeline Node Dot */}
      <div className="absolute left-1.5 sm:left-5.5 top-8 -translate-x-1/2 flex items-center justify-center">
        <span className="relative flex h-5 w-5 items-center justify-center">
          {item.isCurrent && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-65"></span>
          )}
          <span
            className={`relative inline-flex rounded-full h-3.5 w-3.5 ${
              item.isCurrent ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]' : 'bg-white/40'
            }`}
          />
        </span>
      </div>

      {/* Experience Card */}
      <div className="glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 transition-all duration-300">
        {/* Top Meta Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                {item.role}
              </h3>
              {item.isCurrent && (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-medium">
                  Current Role
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 text-sm text-primary/80">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-primary" />
                {item.company}
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1 text-xs text-primary/60">
                <MapPin className="w-3 h-3" />
                {item.location}
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary/80 tabular-nums">
              <Calendar className="w-3 h-3 text-primary/60" />
              {item.period}
            </span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm sm:text-base text-primary/85 mb-6 leading-relaxed font-light">
          {item.summary}
        </p>

        {/* Highlight Bullets */}
        <ul className="space-y-3 mb-8">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-primary/75 leading-relaxed">
              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Skill Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-primary/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
