/**
 * not-found.tsx — Custom 404 page
 *
 * Shown whenever notFound() is called or a route cannot be matched.
 * Matches the portfolio's dark aesthetic. No internal paths or framework
 * details are exposed.
 */

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Azhar Hakim Portfolio',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Almarai, system-ui, sans-serif',
        color: '#E1E0CC',
        padding: '2rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '480px' }}>
        {/* Status badge */}
        <p
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(222,219,200,0.4)',
            marginBottom: '1.5rem',
          }}
        >
          404 · Not found
        </p>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 10vw, 6rem)',
            fontWeight: 400,
            lineHeight: 0.9,
            letterSpacing: '-0.05em',
            marginBottom: '1.25rem',
            color: '#E1E0CC',
          }}
        >
          Lost.
        </h1>

        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: 1.7,
            color: 'rgba(222,219,200,0.55)',
            marginBottom: '2.5rem',
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Head back to the portfolio.
        </p>

        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#E1E0CC',
            color: '#000000',
            borderRadius: '9999px',
            padding: '0.65rem 1.5rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            textDecoration: 'none',
            fontFamily: 'inherit',
          }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
