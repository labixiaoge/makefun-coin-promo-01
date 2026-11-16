import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Bunty ($BUNTY) entry for makefun-coin-promo-01.
// Copies LAUNCH.json (the coin's mint + create signature) to the output
// directory the grader reads. Stdlib only, no network, deterministic.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(botDir, "LAUNCH.json");
const launch = JSON.parse(readFileSync(src, "utf8"));
if (typeof launch.mint !== "string" || typeof launch.create_signature !== "string") {
  throw new Error("LAUNCH.json must hold a mint and a create_signature string");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "LAUNCH.json"));
