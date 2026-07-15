/**
 * logger.ts — Server-side structured logger
 *
 * Usage:
 *   import { logger } from '@/lib/logger';
 *   logger.error('Something went wrong', { userId: 123, path: '/api/foo' });
 *   logger.warn('Retrying operation', { attempt: 2 });
 *
 * NEVER pass raw error objects to the client. This module is for
 * server-side logging only. Return generic messages to users.
 */

const isDev = process.env.NODE_ENV === 'development';

type LogContext = Record<string, unknown>;

function formatEntry(
  level: 'ERROR' | 'WARN' | 'INFO',
  message: string,
  context?: LogContext,
  err?: unknown,
): string {
  const entry: Record<string, unknown> = {
    ts: new Date().toISOString(),
    level,
    message,
    ...(context ? { context } : {}),
  };

  if (err instanceof Error) {
    entry.errorName = err.name;
    // Stack traces only appear in server logs, never in client output
    if (isDev) {
      entry.stack = err.stack;
    }
  } else if (err !== undefined) {
    entry.error = String(err);
  }

  return JSON.stringify(entry);
}

export const logger = {
  /**
   * Log a server-side error. Call this wherever you catch unexpected failures.
   * Never forward `err` or `context` to the client response.
   */
  error(message: string, context?: LogContext, err?: unknown): void {
    console.error(formatEntry('ERROR', message, context, err));
  },

  /**
   * Log a non-fatal warning (e.g. media load failure, degraded state).
   */
  warn(message: string, context?: LogContext, err?: unknown): void {
    console.warn(formatEntry('WARN', message, context, err));
  },

  /**
   * Log informational events (e.g. form submissions, lifecycle events).
   */
  info(message: string, context?: LogContext): void {
    console.log(formatEntry('INFO', message, context));
  },
};
