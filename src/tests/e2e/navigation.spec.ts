import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  test("desktop navigation links navigate to homepage sections", async ({
    page,
  }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "About" }).click();

    await expect(page).toHaveURL(/\/#about$/);
    await expect(page.locator("#about")).toBeVisible();
  });

  test("mobile navigation opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const menuButton = page.getByRole("button", {
      name: "Open navigation",
    });

    await expect(menuButton).toBeVisible();
    await menuButton.click();

    await expect(
      page.getByRole("button", { name: "Close navigation" }),
    ).toBeVisible();

    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeVisible();

    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Projects" })
      .click();

    await expect(page).toHaveURL(/\/#projects$/);

    await expect(
      page.getByRole("button", { name: "Open navigation" }),
    ).toBeVisible();
  });

  test("header navigation works from a 404 page", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");

    await page.getByRole("link", { name: "Skills" }).click();

    await expect(page).toHaveURL(/\/#skills$/);
    await expect(page.locator("#skills")).toBeVisible();
  });
});
