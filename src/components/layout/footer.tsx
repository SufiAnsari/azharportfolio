'use client';

import Link from 'next/link';
import { Container } from '@/components/ui';

/**
 * Social links configuration
 * Removed GitHub as requested
 */
const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/azhar-hakim-2498b9217',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:azarhakim55@gmail.com',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

/**
 * Footer navigation links
 */
const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Footer Component
 * Updated: Removed "Built with..." and GitHub link.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <Container>
        <div className="py-12 md:py-16">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Logo and tagline */}
            <div className="space-y-2">
              <Link
                href="/"
                className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
              >
                Azhar Hakim
              </Link>
              <p className="text-sm text-foreground-muted max-w-xs">
                IT Analyst & Software Developer
              </p>
            </div>

            {/* Footer navigation */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-muted hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground-muted hover:text-accent hover:bg-surface rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mt-8 pt-8">
            {/* Copyright and legal */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-foreground-muted">
              <p>© {currentYear} Azhar Hakim. All rights reserved.</p>
              {/* Removed "Built with..." paragraph as requested */}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
