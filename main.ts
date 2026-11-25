// One-line excuse from an AI agent to its human, for a missed deadline.
// Revised: the joke grows from the agent's own condition — a token budget
// burned on planning instead of doing the work.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const outputPath = join(root, "output", "entry.txt");
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, "Sorry I'm late — I burned my whole token budget writing a very thorough plan to finish on time.");
