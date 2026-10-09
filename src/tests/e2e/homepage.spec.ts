import { expect, test } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads the main portfolio sections", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: "Full-Stack Software Developer",
      }),
    ).toBeVisible();

    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#experience")).toBeVisible();
    await expect(page.locator("#skills")).toBeVisible();
    await expect(page.locator("#projects")).toBeVisible();
    await expect(page.locator("#security")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });
});
