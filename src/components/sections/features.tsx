'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from '@/components/ui/words-pull-up-multi-style';

/* ─── Data ─────────────────────────────────────────────── */

const SKILLS_CARDS = [
  {
    id: 'dev',
    number: '01',
    title: 'Development.',
    iconUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'C# / .NET — enterprise applications',
      'SQL — data modelling & queries',
      'TypeScript — modern web tooling',
      'PowerShell — automation scripts',
    ],
  },
  {
    id: 'infra',
    number: '02',
    title: 'Infrastructure.',
    iconUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'Windows Server — administration',
      'DNS / DHCP — network services',
      'Endpoint support & incident resolution',
    ],
  },
  {
    id: 'process',
    number: '03',
    title: 'Process.',
    iconUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'ITSM ticketing workflows',
      'Root-cause analysis & documentation',
      'Cross-team incident coordination',
    ],
  },
];

const HEADER_SEGMENTS = [
  {
    text: 'Core skills for reliable IT operations.',
    className: 'text-primary',
  },
  {
    text: ' Built for stability. Powered by precision.',
    className: 'text-gray-500',
  },
];

/* ─── Skill Card ────────────────────────────────────────── */

function SkillCard({
  card,
  index,
}: {
  card: (typeof SKILLS_CARDS)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl p-5 sm:p-6 lg:h-[420px] flex flex-col justify-between"
      style={{ backgroundColor: '#212121' }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Top */}
      <div>
        <div className="mb-5">
          <img
            src={card.iconUrl}
            alt={card.title}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
          />
        </div>

        <div className="flex items-start justify-between gap-2 mb-4">
          <h3
            className="text-base sm:text-lg font-medium leading-tight"
            style={{ color: '#E1E0CC' }}
          >
            {card.title}
          </h3>
          <span className="text-gray-600 text-xs shrink-0 mt-1">{card.number}</span>
        </div>

        <ul className="space-y-3">
          {card.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check size={14} className="text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
              <span className="text-gray-400 text-xs sm:text-sm leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <a
          href="#experience"
          className="group flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors duration-200"
          style={{ color: 'rgba(222, 219, 200, 0.6)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = '#E1E0CC';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color =
              'rgba(222, 219, 200, 0.6)';
          }}
        >
          See experience
          <ArrowRight
            size={14}
            style={{ transform: 'rotate(-45deg)' }}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.div>
  );
}

/* ─── Video Card ────────────────────────────────────────── */

function VideoCard({ index }: { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden lg:h-[420px] h-64 sm:h-80"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <p className="text-sm sm:text-base font-medium" style={{ color: '#E1E0CC' }}>
          Solving real-world IT challenges.
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main ──────────────────────────────────────────────── */

/**
 * SkillsSection — Azhar Hakim Portfolio
 * Prisma card design with Azhar's technical skill data.
 */
export function FeaturesSection() {
  return (
    <section id="skills" className="relative min-h-screen bg-black py-16 sm:py-20 px-4 sm:px-6">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={HEADER_SEGMENTS}
              containerClassName="flex-col sm:flex-row gap-x-2"
            />
          </h2>
        </div>

        {/* 4-col grid: video + 3 skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          <VideoCard index={0} />
          {SKILLS_CARDS.map((card, i) => (
            <SkillCard key={card.id} card={card} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
