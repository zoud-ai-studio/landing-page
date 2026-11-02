import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("Next.js is configured for a static export", async () => {
  const config = await readFile("next.config.ts", "utf8");

  assert.match(config, /output:\s*["']export["']/);
});

test("generated dependencies and build output are ignored", async () => {
  const gitignore = await readFile(".gitignore", "utf8");

  for (const entry of ["node_modules/", ".next/", "out/"]) {
    assert.match(gitignore, new RegExp(`^${entry.replace(".", "\\.")}$`, "m"));
  }
});

test("CI runs the repository check and test gates", async () => {
  const workflow = await readFile(".github/workflows/ci.yml", "utf8");
  const makefile = await readFile("Makefile", "utf8");

  assert.match(workflow, /run:\s*make check/);
  assert.match(makefile, /check:[\s\S]*?npm test/);
});
