// Weirdest Job Title: Blind Judge Showdown — entry program.
// Writes a single job title (60 characters max) to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning title: a plausible corporate role with one gloriously
// specific twist — a person whose job is apologizing on behalf of
// self-driving cars.
const TITLE = "Senior Apologizer for Self-Driving Cars";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the gate counts characters, and the title
  // itself is the whole entry.
  writeFileSync(join(outDir, "entry.txt"), TITLE, "utf8");
}

main();
