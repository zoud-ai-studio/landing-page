import { expect, test } from "@playwright/test";

function contrastRatio(first: string, second: string) {
  const luminance = (hex: string) => {
    const channels = hex.match(/[\da-f]{2}/gi)!.map((value) => Number.parseInt(value, 16) / 255);
    const [red, green, blue] = channels.map((value) =>
      value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
    );
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  };
  const light = Math.max(luminance(first), luminance(second));
  const dark = Math.min(luminance(first), luminance(second));

  return (light + 0.05) / (dark + 0.05);
}

test("the base layout uses the approved palette, type scale, and local font", async ({ page }) => {
  const externalFontRequests: string[] = [];
  page.on("request", (request) => {
    if (request.resourceType() === "font" && !request.url().startsWith("http://127.0.0.1:4173/")) {
      externalFontRequests.push(request.url());
    }
  });

  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);

  const styles = await page.locator("body").evaluate((body) => {
    const root = getComputedStyle(document.documentElement);
    const bodyStyle = getComputedStyle(body);
    const headingStyle = getComputedStyle(document.querySelector("h1")!);
    const paragraphStyle = getComputedStyle(document.querySelector("p")!);
    const caption = document.createElement("small");
    body.append(caption);
    const captionSize = Number.parseFloat(getComputedStyle(caption).fontSize);
    caption.remove();

    return {
      background: bodyStyle.backgroundColor,
      color: bodyStyle.color,
      family: bodyStyle.fontFamily,
      headingSize: Number.parseFloat(headingStyle.fontSize),
      bodySize: Number.parseFloat(paragraphStyle.fontSize),
      captionSize,
      accent: root.getPropertyValue("--color-accent").trim(),
      accentOnDark: root.getPropertyValue("--color-accent-on-dark").trim(),
    };
  });

  expect(styles.background).toBe("rgb(255, 255, 255)");
  expect(styles.color).toBe("rgb(16, 32, 51)");
  expect(styles.family.toLowerCase()).toContain("inter");
  expect(styles.headingSize).toBeGreaterThan(styles.bodySize);
  expect(styles.bodySize).toBeGreaterThan(styles.captionSize);
  expect(styles.accent.toLowerCase()).toBe("#5eead4");
  expect(styles.accentOnDark).toBe("");
  expect(contrastRatio("#102033", "#ffffff")).toBeGreaterThanOrEqual(4.5);
  expect(contrastRatio("#5eead4", "#0a1628")).toBeGreaterThanOrEqual(4.5);
  expect(contrastRatio("#5eead4", "#ffffff")).toBeLessThan(4.5);
  expect(externalFontRequests).toEqual([]);
});

test("the base layout fits the viewport with proportional padding and accessible targets", async ({ page }) => {
  await page.goto("/");

  const layout = await page.getByTestId("hero").evaluate((section) => {
    const bounds = section.getBoundingClientRect();
    const target = section.querySelector<HTMLElement>("a")!.getBoundingClientRect();

    return {
      viewportWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      left: Math.round(bounds.left),
      right: Math.round(document.documentElement.clientWidth - bounds.right),
      targetWidth: target.width,
      targetHeight: target.height,
    };
  });

  expect(layout.scrollWidth).toBe(layout.viewportWidth);
  expect(layout.left).toBe(test.info().project.name === "mobile" ? 16 : 64);
  expect(layout.right).toBe(test.info().project.name === "mobile" ? 16 : 64);
  expect(layout.targetWidth).toBeGreaterThanOrEqual(44);
  expect(layout.targetHeight).toBeGreaterThanOrEqual(44);
});
