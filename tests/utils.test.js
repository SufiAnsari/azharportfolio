import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const utilsPath = path.join(process.cwd(), 'src', 'lib', 'utils.ts');

test('cn helper composes clsx with tailwind-merge', async () => {
  const contents = await readFile(utilsPath, 'utf8');

  assert.match(contents, /function cn\(/, 'cn function is defined');
  assert.match(contents, /twMerge\(clsx\(inputs\)\)/, 'cn uses twMerge and clsx');
});
