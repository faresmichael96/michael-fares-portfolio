import { expect, test } from "@playwright/test";

test("contact links are available", async ({ page }) => {
  await page.goto("/");

  const contact = page.locator("#contact");

  await expect(
    contact.getByRole("link", { name: /Get in touch/i }),
  ).toBeVisible();

  await expect(
    contact.getByRole("link", { name: /LinkedIn/i }),
  ).toHaveAttribute("href", /linkedin\.com/);

  await expect(contact.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
    "href",
    /github\.com/,
  );

  await expect(
    contact.getByRole("link", { name: /Resume|CV/i }),
  ).toHaveAttribute("href", /\/cv\/michael-fares-cv\.pdf$/);
});
