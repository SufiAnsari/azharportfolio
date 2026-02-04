'use client';

import { Container, Section } from '@/components/ui';
import Image from 'next/image';

export function HeroSection() {
  return (
    <Section padding="xl" className="relative pt-32 lg:pt-48 pb-20 overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-accent-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <Container size="lg">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left z-10 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              Hi, I&apos;m <br className="hidden md:block" />
              Azhar Hakim
            </h1>

            <h2 className="text-base md:text-lg lg:text-xl font-bold mb-6 tracking-tight">
              <span className="text-gradient">IT Analyst / Software Developer / Endpoint Support</span>
            </h2>

            <p className="text-foreground-muted text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              I am a dedicated IT professional with experience in desktop support and software development.
              I have worked in enterprise environments delivering high client satisfaction, resolving
              critical technical issues, and maintaining system stability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a
                href="/resume.pdf"
                download
                className="bg-gradient-primary px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(145,94,255,0.3)]"
              >
                Download Resume
              </a>

              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/azhar-hakim-2498b9217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:border-accent transition-colors cursor-pointer text-foreground-muted hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:azarhakim55@gmail.com"
                  className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:border-accent transition-colors cursor-pointer text-foreground-muted hover:text-white"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Circular Profile Image */}
          <div className="flex-1 relative animate-fade-in delay-200">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Circular Mask / Image Placeholder */}
              <div className="absolute inset-0 rounded-full bg-surface border-2 border-white/10 overflow-hidden shadow-2xl z-10">
                <Image
                  src="/profile.png"
                  alt="Azhar Hakim"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Orbit Elements (Visual Flair) */}
              <div className="absolute -inset-4 border border-accent/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-12 border border-accent-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

              {/* Decorative Icon Bubbles */}
              {/* C# Bubble */}
              <div className="absolute top-0 right-10 w-12 h-12 bg-surface rounded-full border border-accent flex items-center justify-center z-20 shadow-lg shadow-accent/20 animate-bounce delay-100">
                <span className="text-xs font-bold text-accent">C#</span>
              </div>

              {/* .NET Bubble */}
              <div className="absolute bottom-12 left-0 w-14 h-14 bg-surface rounded-full border border-accent-secondary flex items-center justify-center z-20 shadow-lg shadow-accent-secondary/20 animate-bounce delay-300">
                <span className="text-xs font-bold text-accent-secondary">.NET</span>
              </div>

              {/* PowerShell Bubble - Top Left */}
              <div className="absolute top-10 left-4 w-10 h-10 bg-surface rounded-full border border-teal-400 flex items-center justify-center z-20 shadow-lg shadow-teal-400/20 animate-bounce delay-500">
                <span className="text-[10px] font-bold text-teal-400">PS</span>
              </div>

              {/* Windows Bubble - Bottom Right */}
              <div className="absolute bottom-4 right-12 w-11 h-11 bg-surface rounded-full border border-blue-400 flex items-center justify-center z-20 shadow-lg shadow-blue-400/20 animate-bounce delay-200">
                <span className="text-[10px] font-bold text-blue-400">Win</span>
              </div>

              {/* Network Bubble - Far Right Middle */}
              <div className="absolute top-1/2 -right-4 w-9 h-9 bg-surface rounded-full border border-yellow-400 flex items-center justify-center z-20 shadow-lg shadow-yellow-400/20 animate-bounce delay-700">
                <span className="text-[9px] font-bold text-yellow-400">Net</span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
