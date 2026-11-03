import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const mailtoHref = "mailto:hello@zoud.ae?subject=Free%20call%20request";

test("approved hero copy and the shared CTA URI have one content owner", async () => {
  const content = await readFile("lib/content.ts", "utf8");

  assert.match(content, /Your web app, built by an AI team, checked by humans/);
  assert.match(content, /We turn your idea into a working app — in days, not months\./);
  assert.match(content, /Book a free call/);
  assert.match(content, new RegExp(mailtoHref.replace(/[?]/g, "\\?")));
});

test("the hero remains a typed presentational server component", async () => {
  const [hero, page] = await Promise.all([
    readFile("components/sections/Hero.tsx", "utf8"),
    readFile("app/page.tsx", "utf8"),
  ]);

  assert.doesNotMatch(hero, /["']use client["']/);
  assert.doesNotMatch(hero, /from ["'].*lib\/content["']/);
  assert.match(page, /<Hero/);
});
