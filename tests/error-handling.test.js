/**
 * error-handling.test.js
 *
 * Verifies that all error-handling additions are in place:
 * - logger utility exports error/warn/info
 * - error.tsx uses reset() and logs the error
 * - not-found.tsx exists and links back home
 * - ErrorBoundary is a class component with getDerivedStateFromError
 * - contact.tsx has try/catch and a submitError state
 * - hero.tsx video has an onError handler
 * - features.tsx video and img both have onError handlers
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const src = (relative) => path.join(process.cwd(), 'src', ...relative.split('/'));

// ── logger ────────────────────────────────────────────────────────────────────

test('logger exports error, warn, and info functions', async () => {
  const contents = await readFile(src('lib/logger.ts'), 'utf8');
  assert.match(contents, /export const logger/, 'logger is exported');
  assert.match(contents, /error\(/, 'logger has error()');
  assert.match(contents, /warn\(/, 'logger has warn()');
  assert.match(contents, /info\(/, 'logger has info()');
});

test('logger does not expose stack traces in production build path', async () => {
  const contents = await readFile(src('lib/logger.ts'), 'utf8');
  // Stack is only included when isDev is true
  assert.match(contents, /isDev/, 'stack trace is gated on isDev');
});

// ── error.tsx ─────────────────────────────────────────────────────────────────

test('error.tsx exists and calls reset()', async () => {
  const contents = await readFile(src('app/error.tsx'), 'utf8');
  // reset is passed as onClick handler: onClick={reset}
  assert.match(contents, /reset/, 'error page references the reset function');
  assert.match(contents, /'use client'/, 'error page is a client component');
});

test('error.tsx does not render error.message or error.stack in JSX', async () => {
  const contents = await readFile(src('app/error.tsx'), 'utf8');
  // These would expose internal details to the user
  assert.doesNotMatch(
    contents,
    /\{error\.message\}/,
    'error.message is not rendered into DOM',
  );
  assert.doesNotMatch(
    contents,
    /\{error\.stack\}/,
    'error.stack is not rendered into DOM',
  );
});

// ── not-found.tsx ─────────────────────────────────────────────────────────────

test('not-found.tsx exists and links back to home', async () => {
  const contents = await readFile(src('app/not-found.tsx'), 'utf8');
  // Matches href="/" or href='/' inside any element (Link or <a>)
  assert.match(contents, /href=["']\/["']/, 'not-found page links back to home');
  assert.match(contents, /404/, 'not-found page references 404');
});

// ── ErrorBoundary ─────────────────────────────────────────────────────────────

test('ErrorBoundary is a class component with getDerivedStateFromError', async () => {
  const contents = await readFile(src('components/ui/error-boundary.tsx'), 'utf8');
  assert.match(contents, /class ErrorBoundary extends Component/, 'ErrorBoundary is a class component');
  assert.match(contents, /getDerivedStateFromError/, 'has getDerivedStateFromError');
  assert.match(contents, /componentDidCatch/, 'has componentDidCatch');
});

test('ErrorBoundary does not render error details into the DOM', async () => {
  const contents = await readFile(src('components/ui/error-boundary.tsx'), 'utf8');
  assert.doesNotMatch(
    contents,
    /\{error\.message\}/,
    'error.message is not rendered in fallback',
  );
});

// ── page.tsx ──────────────────────────────────────────────────────────────────

test('page.tsx wraps all sections in ErrorBoundary', async () => {
  const contents = await readFile(src('app/page.tsx'), 'utf8');
  assert.match(contents, /ErrorBoundary/, 'page imports ErrorBoundary');
  // Each of the 5 sections should be wrapped
  const boundaryCount = (contents.match(/<ErrorBoundary/g) ?? []).length;
  assert.equal(boundaryCount, 5, 'all 5 sections are wrapped in an ErrorBoundary');
});

// ── contact.tsx ───────────────────────────────────────────────────────────────

test('contact.tsx handleSubmit has try/catch', async () => {
  const contents = await readFile(src('components/sections/contact.tsx'), 'utf8');
  assert.match(contents, /try \{/, 'handleSubmit has a try block');
  assert.match(contents, /catch/, 'handleSubmit has a catch block');
  assert.match(contents, /submitError/, 'contact form has submitError state');
});

test('contact.tsx error message is generic and safe', async () => {
  const contents = await readFile(src('components/sections/contact.tsx'), 'utf8');
  assert.doesNotMatch(
    contents,
    /error\.message/,
    'raw error.message is not shown to user',
  );
  // The safe fallback message must reference the direct email
  assert.match(
    contents,
    /azarhakim55@gmail\.com/,
    'error fallback includes direct email address',
  );
});

// ── hero.tsx ──────────────────────────────────────────────────────────────────

test('hero.tsx video has an onError handler', async () => {
  const contents = await readFile(src('components/sections/hero.tsx'), 'utf8');
  assert.match(contents, /onError/, 'hero video has onError');
  assert.match(
    contents,
    /style\.display = 'none'/,
    'hero video is hidden on error',
  );
});

// ── features.tsx ──────────────────────────────────────────────────────────────

test('features.tsx video and img both have onError handlers', async () => {
  const contents = await readFile(src('components/sections/features.tsx'), 'utf8');
  const onErrorCount = (contents.match(/onError/g) ?? []).length;
  assert.ok(onErrorCount >= 2, `features.tsx has at least 2 onError handlers (found ${onErrorCount})`);
});
