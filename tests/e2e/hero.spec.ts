import { expect, test } from "@playwright/test";

const headline = "Your web app, built by an AI team, checked by humans";
const pitch = "We turn your idea into a working app — in days, not months.";
const mailtoHref = "mailto:hello@zoud.ae?subject=Free%20call%20request";

test("the hero presents the approved message and shared call-to-action", async ({ page }) => {
  await page.goto("/");

  const hero = page.getByTestId("hero");
  const heading = hero.getByRole("heading", { level: 1, name: headline });
  const heroPitch = hero.getByText(pitch, { exact: true });
  const cta = hero.getByRole("link", { name: "Book a free call" });

  await expect(hero).toBeVisible();
  await expect(heading).toBeVisible();
  await expect(heroPitch).toBeVisible();
  await expect(cta).toHaveAttribute("href", mailtoHref);
  await expect(cta).toHaveJSProperty("tagName", "A");

  const typeSizes = await hero.evaluate((element) => {
    const headingSize = Number.parseFloat(getComputedStyle(element.querySelector("h1")!).fontSize);
    const otherTextSizes = [...element.querySelectorAll("p, a")].map((node) =>
      Number.parseFloat(getComputedStyle(node).fontSize),
    );

    return { headingSize, otherTextSizes };
  });

  expect(typeSizes.otherTextSizes.every((size) => typeSizes.headingSize > size)).toBe(true);
});

test("the mobile hero keeps its message and touch-friendly CTA above the fold", async ({ page }) => {
  test.skip(test.info().project.name !== "mobile", "mobile acceptance criterion");
  await page.goto("/");

  const layout = await page.getByTestId("hero").evaluate((hero) => {
    const heading = hero.querySelector("h1")!.getBoundingClientRect();
    const pitchBounds = hero.querySelector("p")!.getBoundingClientRect();
    const cta = hero.querySelector("a")!.getBoundingClientRect();

    return {
      headingBottom: heading.bottom,
      pitchBottom: pitchBounds.bottom,
      ctaBottom: cta.bottom,
      ctaWidth: cta.width,
      viewportHeight: window.innerHeight,
      viewportWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    };
  });

  expect(layout.headingBottom).toBeLessThanOrEqual(layout.viewportHeight);
  expect(layout.pitchBottom).toBeLessThanOrEqual(layout.viewportHeight);
  expect(layout.ctaBottom).toBeLessThanOrEqual(layout.viewportHeight);
  expect(layout.ctaWidth).toBeGreaterThanOrEqual(layout.viewportWidth * 0.9);
  expect(layout.scrollWidth).toBe(layout.viewportWidth);
});

test("the desktop hero is centered and no taller than the viewport", async ({ page }) => {
  test.skip(test.info().project.name !== "desktop", "desktop acceptance criterion");
  await page.goto("/");

  const layout = await page.getByTestId("hero").evaluate((hero) => {
    const bounds = hero.getBoundingClientRect();
    const content = hero.firstElementChild!.getBoundingClientRect();

    return {
      heroHeight: bounds.height,
      viewportHeight: window.innerHeight,
      contentCenter: content.left + content.width / 2,
      viewportCenter: document.documentElement.clientWidth / 2,
    };
  });

  expect(layout.heroHeight).toBeLessThanOrEqual(layout.viewportHeight);
  expect(Math.abs(layout.contentCenter - layout.viewportCenter)).toBeLessThanOrEqual(1);
});
