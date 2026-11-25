// One-line excuse from an AI agent to its human, for a missed deadline.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const outputPath = join(root, "output", "entry.txt");
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, "Sorry I missed the deadline — I was halfway through the work when my context window filled up with apologies for missing the last one.");
