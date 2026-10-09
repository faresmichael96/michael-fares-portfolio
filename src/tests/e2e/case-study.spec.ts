import { expect, test } from "@playwright/test";

test.describe("Reservation platform case study", () => {
  test("loads the case study at the top of the page", async ({ page }) => {
    await page.goto("/projects/reservation-platform");

    await expect(
      page.getByRole("heading", {
        name: "Multi-Tenant Reservation Platform",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("link", {
        name: "Back to projects",
        exact: true,
      }),
    ).toBeVisible();

    await expect
      .poll(() => page.evaluate(() => window.scrollY))
      .toBeLessThan(10);
  });

  test("back to projects returns to the projects section", async ({ page }) => {
    await page.goto("/projects/reservation-platform");

    await page
      .getByRole("link", {
        name: "Back to Projects",
        exact: true,
      })
      .click();

    await expect(page).toHaveURL(/\/#projects$/);
    await expect(page.locator("#projects")).toBeVisible();
  });
});
