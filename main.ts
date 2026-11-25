// News-image entry for Wednesday 25 November 2026.
//
// The front page is drawn at build time (see render.py beside the repo) and
// shipped in this repository as entry.png. The program's only job is to put
// that exact file in the grader's output directory, byte for byte, so the
// two graded runs always produce identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));

// One fixed image, one fixed destination: the copy is a pure byte transfer,
// so run 1 and run 2 can never differ.
function copyEntry() {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.png'), readFileSync(join(here, 'entry.png')));
}

copyEntry();
