'use client';

import { useRef } from 'react';
import { WordsPullUpMultiStyle } from '@/components/ui/words-pull-up-multi-style';
import { AnimatedLetter } from '@/components/ui/animated-letter';

const ABOUT_TEXT =
  'Over the last four years I have worked as an IT Analyst at Capita delivering endpoint support and incident resolution, and before that as a Junior Software Developer at Allscripts Technology building and maintaining .NET applications with C# and SQL. I thrive at the intersection of infrastructure reliability and software quality.';

const HEADING_SEGMENTS = [
  {
    text: 'I am Azhar Hakim,',
    className: 'font-normal',
  },
  {
    text: 'an IT Analyst',
    className: 'font-serif-italic',
  },
  {
    text: 'with expertise in endpoint support, Windows infrastructure, and .NET development.',
    className: 'font-normal',
  },
];

/**
 * AboutSection — Azhar Hakim Portfolio
 *
 * Prisma design with Azhar's personal bio data.
 */
export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const chars = ABOUT_TEXT.split('');

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6"
    >
      {/* Inner Card */}
      <div
        className="max-w-6xl mx-auto rounded-2xl md:rounded-3xl px-6 sm:px-10 md:px-16 py-12 sm:py-16 md:py-20 text-center"
        style={{ backgroundColor: '#101010' }}
      >
        {/* Small Label */}
        <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-6 sm:mb-8">
          IT Analyst · Pune, India
        </p>

        {/* Mixed-Font Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12"
          style={{
            color: '#E1E0CC',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
          }}
        >
          <WordsPullUpMultiStyle segments={HEADING_SEGMENTS} />
        </h2>

        {/* Scroll-linked character reveal paragraph */}
        <p
          className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#DEDBC8' }}
        >
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
    </section>
  );
}
