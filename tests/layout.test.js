import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const layoutPath = path.join(process.cwd(), 'src', 'app', 'layout.tsx');

test('root layout includes skip link and main content anchor', async () => {
  const contents = await readFile(layoutPath, 'utf8');

  assert.match(contents, /href="#main-content"/, 'Skip link points to main content');
  assert.match(contents, /id="main-content"/, 'Main content anchor exists');
  assert.match(contents, /suppressHydrationWarning/, 'html element has suppressHydrationWarning');
});
