import { expect, test } from "@playwright/test";

test.describe("404 Not Found page", () => {
  test("displays the 404 page for an unknown URL", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");

    // Verify the server returns an actual HTTP 404 status.
    expect(response?.status()).toBe(404);

    // Verify the page content.
    await expect(
      page.getByRole("heading", {
        name: "Looks like this page took a wrong turn.",
      }),
    ).toBeVisible();

    await expect(page.getByText("Error 404")).toBeVisible();

    await expect(
      page.getByText(
        "The page you're looking for doesn't exist or may have moved. Let's get you back on track.",
      ),
    ).toBeVisible();

    // Verify both navigation links.
    await expect(
      page.getByRole("link", { name: "Back to homepage" }),
    ).toHaveAttribute("href", "/");

    await expect(
      page.getByRole("link", { name: "Explore projects" }),
    ).toHaveAttribute("href", "/#projects");
  });

  test("allows navigation back to the homepage", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");

    await page.getByRole("link", { name: "Back to homepage" }).click();

    await expect(page).toHaveURL("/");
  });
});
