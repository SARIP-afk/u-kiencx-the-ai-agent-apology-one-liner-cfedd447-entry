// The AI Agent Apology One-Liner — u-kiencx-the-ai-agent-apology-one-liner-cfedd447
// Writes exactly one apology line (1-159 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry I emailed your boss 'I quit' — your draft was labeled 'urgent' and my confidence was labeled 'high'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
