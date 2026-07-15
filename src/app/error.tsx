'use client';

/**
 * error.tsx — Next.js App Router segment error boundary
 *
 * This page is shown when any server or client component in the root segment
 * throws an unhandled error at render time. It intentionally shows NO error
 * details to the user — only a safe, generic message.
 *
 * Full error details are logged server-side via the logger utility.
 */

import { useEffect } from 'react';
import { logger } from '@/lib/logger';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log full error details server-side only.
    // `error.digest` is Next.js's server-generated error ID — safe to log.
    logger.error(
      'Unhandled render error caught by root error boundary',
      { digest: error.digest ?? 'none' },
      error,
    );
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Almarai, system-ui, sans-serif',
          color: '#E1E0CC',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            maxWidth: '480px',
            padding: '2rem',
          }}
        >
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
            Something went wrong
          </p>

          <h1
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              marginBottom: '1rem',
              color: '#E1E0CC',
            }}
          >
            Unexpected error.
          </h1>

          <p
            style={{
              fontSize: '0.875rem',
              lineHeight: 1.6,
              color: 'rgba(222,219,200,0.55)',
              marginBottom: '2rem',
            }}
          >
            An unexpected error occurred while loading this page. The issue has
            been logged. Please try refreshing, or come back shortly.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={reset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#E1E0CC',
                color: '#000000',
                border: 'none',
                borderRadius: '9999px',
                padding: '0.6rem 1.4rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Try again
            </button>

            <a
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'transparent',
                color: 'rgba(222,219,200,0.6)',
                border: '1px solid rgba(222,219,200,0.15)',
                borderRadius: '9999px',
                padding: '0.6rem 1.4rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                fontFamily: 'inherit',
              }}
            >
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
