import { expect, test } from '@playwright/test'

test('should sign in with email=jhondoe@gmail.com and password=123', async ({
  page,
}) => {
  await page.goto('/auth/sign-in')

  await expect(page.getByText('Login', { exact: true })).toBeVisible()
})
