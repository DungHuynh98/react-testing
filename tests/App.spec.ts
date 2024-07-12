import { test, expect, type Page } from '@playwright/test';

test.describe('Get list users', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://127.0.0.1:3000")
  });

  test('should display the get users button', async ({ page }) => {
    await expect(page.getByText(/get users/i)).toBeVisible();
    const listItems = await page.$$('li');
    expect(listItems.length).toBe(0);
  });

  test('should display the list users', async ({ page }) => {
    const btn = page.getByText(/get users/i)
    await expect(btn).toBeVisible();

    await btn.click()

    await page.waitForSelector('li', {
      timeout: 5000
    })
    const listItems = await page.$$('li');
    expect(listItems.length).toBe(10);
  });
});