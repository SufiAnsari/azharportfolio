'use client';

import Link from 'next/link';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050507] text-primary/80 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/10">

          {/* Left — Brand & Role */}
          <div>
            <Link
              href="/"
              className="text-xl font-semibold text-white tracking-tight hover:text-primary transition-colors"
            >
              Azhar Hakim
            </Link>
            <p className="text-xs text-primary/60 mt-1 max-w-xs leading-relaxed font-light">
              IT Analyst & Software Developer · Enterprise Endpoint Support & .NET Applications in Pune.
            </p>
          </div>

          {/* Center — Nav Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — Social & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/azhar-hakim-2498b9217"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:azarhakim55@gmail.com"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all duration-200"
              aria-label="Email Azhar"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-primary text-black hover:bg-white transition-all duration-200 active:scale-95 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary/50 font-mono">
          <p>© {currentYear} Azhar Hakim. All rights reserved.</p>
          <p>Pune, MH, India</p>
        </div>
      </div>
    </footer>
  );
}
