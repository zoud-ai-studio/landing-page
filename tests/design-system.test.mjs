import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("global styles define the approved semantic design tokens", async () => {
  const css = await readFile("app/globals.css", "utf8");

  for (const value of ["#0a1628", "#102033", "#ffffff", "#f6f8fa", "#5eead4"]) {
    assert.match(css.toLowerCase(), new RegExp(value));
  }

  for (const token of ["--color-background", "--color-text", "--color-surface", "--color-accent", "--space-1", "--space-9", "--radius-card", "--radius-button", "--content-width"]) {
    assert.match(css, new RegExp(`${token}:`));
  }

  assert.doesNotMatch(css.toLowerCase(), /#0f766e/);
  assert.doesNotMatch(css, /--color-accent-on-dark:/);
});

test("the licensed Inter variable font is self-hosted", async () => {
  const layout = await readFile("app/layout.tsx", "utf8");

  assert.match(layout, /next\/font\/local/);
  assert.match(layout, /InterVariable\.woff2/);
  await access("public/fonts/InterVariable.woff2");
  await access("public/fonts/OFL.txt");
});

test("Section and Card primitives consume shared layout tokens", async () => {
  const [section, card] = await Promise.all([
    readFile("components/ui/Section.tsx", "utf8"),
    readFile("components/ui/Card.tsx", "utf8"),
  ]);

  assert.match(section, /className/);
  assert.match(card, /className/);
  assert.doesNotMatch(section, /#[0-9a-f]{3,8}/i);
  assert.doesNotMatch(card, /#[0-9a-f]{3,8}/i);
});
