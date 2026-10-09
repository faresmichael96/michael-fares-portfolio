import { expect, test } from "@playwright/test";

test.describe("Projects", () => {
  test("featured project links to its case study", async ({ page }) => {
    await page.goto("/");

    await page
      .locator("#projects")
      .getByRole("link", {
        name: /View Case Study/i,
      })
      .click();

    await expect(page).toHaveURL("/projects/reservation-platform");
    await expect(
      page.getByRole("heading", {
        name: "Multi-Tenant Reservation Platform",
      }),
    ).toBeVisible();
  });

  test("live demo link points to the deployed application", async ({
    page,
  }) => {
    await page.goto("/");

    const liveDemo = page
      .locator("#projects")
      .getByRole("link", { name: /Live Demo/i })
      .first();

    await expect(liveDemo).toHaveAttribute(
      "href",
      "https://reservado-blue.vercel.app/",
    );
  });
});
