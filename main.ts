import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Output directory: the grader writes to /output; local runs may
// override it with MAKEFUN_OUTPUT_DIR (see the kit's RULES.txt).
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const repoDir = dirname(fileURLToPath(import.meta.url));

mkdirSync(outDir, { recursive: true });
// Copy the pre-rendered image byte for byte; nothing else is written.
writeFileSync(
  join(outDir, "entry.png"),
  readFileSync(join(repoDir, "entry.png")),
);
