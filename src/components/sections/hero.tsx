'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from '@/components/ui/words-pull-up';

const NAV_ITEMS = [
  'About',
  'Skills',
  'Experience',
  'Contact',
  'LinkedIn',
];

/**
 * HeroSection — Azhar Hakim Portfolio
 *
 * Prisma-style full-viewport hero with portfolio data:
 * - Inset rounded container with background video
 * - SVG noise + gradient overlays
 * - Pill navbar at top-center
 * - Giant "Azhar" heading (pull-up animation)
 * - IT Analyst description + CTA button
 */
export function HeroSection() {
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const descInView = useInView(descRef, { once: true });
  const btnInView = useInView(btnRef, { once: true });

  return (
    <section className="relative h-screen w-full p-4 md:p-6 bg-black">
      {/* Inset rounded container */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">

        {/* Background Video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Noise Overlay */}
        <div className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10 pointer-events-none" />

        {/* Pill Navbar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href={item === 'LinkedIn'
                      ? 'https://www.linkedin.com/in/azhar-hakim-2498b9217'
                      : `#${item.toLowerCase()}`}
                    target={item === 'LinkedIn' ? '_blank' : undefined}
                    rel={item === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap transition-colors duration-200"
                    style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = '#E1E0CC';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        'rgba(225, 224, 204, 0.8)';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Hero Content — bottom-aligned 12-col grid */}
        <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-12 items-end">
          {/* Left 8 cols — Giant Heading */}
          <div className="col-span-12 lg:col-span-8">
            <h1
              className="font-medium leading-[0.85] tracking-[-0.07em] select-none"
              style={{
                fontSize: 'clamp(120px, 18vw, 380px)',
                color: '#E1E0CC',
              }}
            >
              <WordsPullUp text="Azhar." />
            </h1>
          </div>

          {/* Right 4 cols — Description + Button */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 pb-6 px-4 lg:px-0 lg:pb-8 lg:pr-8">
            {/* Role badge */}
            <motion.p
              className="text-[10px] sm:text-xs tracking-widest uppercase"
              style={{ color: 'rgba(222, 219, 200, 0.5)' }}
              initial={{ y: 20, opacity: 0 }}
              animate={descInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              IT Analyst · Pune
            </motion.p>

            {/* Description */}
            <motion.p
              ref={descRef}
              className="text-xs sm:text-sm md:text-base"
              style={{ color: 'rgba(222, 219, 200, 0.7)', lineHeight: 1.2 }}
              initial={{ y: 20, opacity: 0 }}
              animate={descInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              IT Analyst at Capita with experience in endpoint support, Windows
              infrastructure, and .NET application development. Open to new
              opportunities in Pune and beyond.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              ref={btnRef}
              initial={{ y: 20, opacity: 0 }}
              animate={btnInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-5 pr-1 py-1 transition-all duration-300"
                style={{ color: '#000000' }}
              >
                <span className="font-medium text-sm sm:text-base">Get in touch</span>
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                  <ArrowRight
                    size={16}
                    style={{ color: '#E1E0CC' }}
                    strokeWidth={2}
                  />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
