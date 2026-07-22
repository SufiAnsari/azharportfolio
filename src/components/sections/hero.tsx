'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
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
 * Cinematic full-viewport hero with portfolio data:
 * - Uses min-h-[100dvh] to prevent iOS Safari address bar height jump issues
 * - Inset rounded container with background video & noise gradient overlay
 * - Live status badge ("Available for IT Roles in Pune")
 * - Dynamic high-impact headline "Azhar."
 * - High-contrast CTA with hover motion
 */
export function HeroSection() {
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const descInView = useInView(descRef, { once: true });
  const btnInView = useInView(btnRef, { once: true });

  return (
    <section className="relative min-h-[100dvh] w-full p-3 sm:p-4 md:p-6 bg-[#08080a] flex flex-col justify-between">
      {/* Inset rounded glass container */}
      <div className="relative w-full flex-1 min-h-[calc(100dvh-1.5rem)] md:min-h-[calc(100dvh-3rem)] rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">

        {/* Background Video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          onError={(e) => {
            console.warn(
              JSON.stringify({ ts: new Date().toISOString(), level: 'WARN', message: 'Hero background video failed to load' }),
            );
            (e.currentTarget as HTMLVideoElement).style.display = 'none';
          }}
        />

        {/* Noise Overlay */}
        <div className="noise-overlay opacity-[0.65] mix-blend-overlay pointer-events-none z-10" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/60 via-[#08080a]/30 to-[#08080a]/90 z-10 pointer-events-none" />

        {/* Top Floating Bar: Status Badge + Pill Navbar */}
        <div className="absolute top-4 left-0 right-0 z-30 px-4 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-7xl mx-auto">
          {/* Availability Status Badge */}
          <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white/90 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">Available for Roles in Pune & Remote</span>
          </div>

          {/* Centered / Right Pill Navbar */}
          <nav className="bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 sm:px-6 shadow-xl mx-auto md:mx-0">
            <ul className="flex items-center gap-4 sm:gap-6 md:gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href={item === 'LinkedIn'
                      ? 'https://www.linkedin.com/in/azhar-hakim-2498b9217'
                      : `#${item.toLowerCase()}`}
                    target={item === 'LinkedIn' ? '_blank' : undefined}
                    rel={item === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    aria-current={item === 'About' ? 'page' : undefined}
                    className="text-xs sm:text-sm font-medium transition-all duration-200 hover:text-white text-primary/80 hover:scale-105 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Hero Content — bottom-aligned grid */}
        <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-12 items-end p-6 sm:p-8 md:p-12 lg:p-14 gap-6">
          {/* Left Column — Display Heading */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary opacity-80" />
              <span className="text-xs tracking-widest uppercase text-primary/60 font-medium">
                IT Analyst & Software Engineer
              </span>
            </div>
            <h1
              className="font-semibold leading-[0.85] tracking-[-0.06em] select-none text-primary drop-shadow-sm"
              style={{
                fontSize: 'clamp(80px, 16vw, 320px)',
              }}
            >
              <WordsPullUp text="Azhar." />
            </h1>
          </div>

          {/* Right Column — Description & CTA */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 pb-2 lg:pb-6">
            <motion.p
              ref={descRef}
              className="text-sm sm:text-base md:text-lg text-primary/85 leading-relaxed font-light"
              initial={{ y: 20, opacity: 0 }}
              animate={descInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              IT Analyst at Capita with 4+ years of experience in enterprise endpoint support,
              Windows infrastructure, PowerShell scripting, and .NET C# software development.
            </motion.p>

            {/* Actions */}
            <motion.div
              ref={btnRef}
              className="flex flex-wrap items-center gap-4 pt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={btnInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 bg-primary text-black font-semibold text-sm sm:text-base rounded-full pl-6 pr-2 py-2 transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(222,219,200,0.4)] active:scale-[0.98]"
              >
                <span>Get in touch</span>
                <span className="bg-black text-primary rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-black group-hover:text-white shrink-0">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-medium text-white transition-all duration-200 active:scale-[0.98]"
              >
                View Experience
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
