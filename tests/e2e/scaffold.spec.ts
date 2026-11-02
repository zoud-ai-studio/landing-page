import { expect, test } from "@playwright/test";

test("the production export loads without server rendering", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.ok()).toBe(true);
  await expect(page.locator("main")).toBeVisible();
});
