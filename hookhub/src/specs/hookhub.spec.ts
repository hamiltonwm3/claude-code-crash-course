import { test, expect } from '@playwright/test';

test.describe('HookHub', () => {

  test.describe('Hero section', () => {
    test('renders headline and badge', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByText('Community-Powered Automation')).toBeVisible();
      await expect(page.getByRole('heading', { name: /Supercharge/i })).toBeVisible();
      await expect(page.getByText('powerful hooks')).toBeVisible();
    });

    test('renders CTA buttons', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByRole('button', { name: 'Browse Hooks' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Submit a Hook' })).toBeVisible();
    });

    test('displays stats', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByText('50+')).toBeVisible();
      await expect(page.getByText('Hooks Available')).toBeVisible();
      await expect(page.getByText('1.2k')).toBeVisible();
      await expect(page.getByText('Downloads')).toBeVisible();
      await expect(page.getByText('200+')).toBeVisible();
      await expect(page.getByText('Contributors')).toBeVisible();
    });
  });

  test.describe('Header', () => {
    test('renders HookHub brand and search input', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByText('HookHub').first()).toBeVisible();
      await expect(page.getByPlaceholder('Search hooks...')).toBeVisible();
    });
  });

  test.describe('Hook cards', () => {
    test('renders featured hooks section', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByRole('heading', { name: 'Featured' })).toBeVisible();
    });

    test('renders all hooks section', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByRole('heading', { name: 'All Hooks' })).toBeVisible();
    });

    test('each hook card shows name, description, and View link', async ({ page }) => {
      await page.goto('/');
      const cards = page.getByTestId('hook-card');
      const count = await cards.count();
      expect(count).toBeGreaterThan(0);
      const first = cards.first();
      await expect(first.getByRole('link', { name: /View/i })).toBeVisible();
    });
  });

  test.describe('Footer', () => {
    test('renders brand, resource links, and Anthropic attribution', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByText('Powered by')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Anthropic' })).toBeVisible();
      await expect(page.getByText('Documentation')).toBeVisible();
      await expect(page.getByText('Contribute')).toBeVisible();
    });

    test('shows copyright notice', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByText(/HookHub. All rights reserved/i)).toBeVisible();
    });
  });
});
