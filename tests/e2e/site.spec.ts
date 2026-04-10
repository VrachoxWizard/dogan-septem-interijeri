import { expect, test, type Page } from '@playwright/test';

async function mockWeb3Forms(
    page: Page,
    payload: Record<string, unknown>,
    status = 200,
) {
    await page.route('https://api.web3forms.com/submit', async (route) => {
        await route.fulfill({
            status,
            contentType: 'application/json',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-store',
            },
            body: JSON.stringify(payload),
        });
    });
}

test('loads without fatal page errors', async ({ page }) => {
    const pageErrors: string[] = [];
    const consoleErrors: string[] = [];

    page.on('pageerror', (error) => {
        pageErrors.push(error.message);
    });

    page.on('console', (message) => {
        if (message.type() === 'error') {
            consoleErrors.push(message.text());
        }
    });

    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1, name: /Prostor koji ima smisla/i })).toBeVisible();
    expect(pageErrors).toEqual([]);
    expect(consoleErrors).toEqual([]);
});

test('skip link moves focus to main content', async ({ page }) => {
    await page.goto('/');

    await page.keyboard.press('Tab');
    const skipLink = page.getByRole('link', { name: 'Preskoči na sadržaj' });

    await expect(skipLink).toBeFocused();
    await skipLink.press('Enter');
    await expect(page.locator('main')).toBeFocused();
});

test('hero CTA navigates to the contact section', async ({ page }) => {
    await page.goto('/');

    const heroSection = page.locator('section').first();
    await heroSection.getByRole('link', { name: 'Zatraži ponudu' }).click();

    await expect(page).toHaveURL(/#kontakt$/);
    await expect(page.getByRole('heading', { level: 2, name: 'Kreirajmo prostor zajedno' })).toBeVisible();
});

test('deep-linked pages initialize the scrolled navbar state', async ({ page }) => {
    for (const hash of ['#kontakt', '#usluge']) {
        await page.goto(`/${hash}`);
        await expect.poll(async () => page.locator('header').getAttribute('data-scrolled')).toBe('true');
    }
});

test('mobile menu traps focus and restores it on close', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto('/');

    const toggle = page.getByRole('button', { name: 'Otvori navigaciju' });
    await toggle.click();

    const dialog = page.getByRole('dialog', { name: 'Navigacija' });
    const firstLink = dialog.getByRole('link', { name: 'O Nama' });
    const lastLink = dialog.getByRole('link', { name: 'Zatraži ponudu' });

    await expect(dialog).toBeVisible();
    await page.waitForTimeout(100);
    await expect(firstLink).toBeFocused();

    await page.keyboard.press('Shift+Tab');
    await expect(lastLink).toBeFocused();

    await page.keyboard.press('Escape');
    await expect(page.locator('header')).toHaveAttribute('data-menu-open', 'false');
    await expect(toggle).toBeFocused();
});

test('gallery controls update the selected slide indicator', async ({ page }) => {
    await page.goto('/#galerija');

    const firstDot = page.getByRole('button', { name: 'Idi na sliku 1' });
    const secondDot = page.getByRole('button', { name: 'Idi na sliku 2' });

    await expect(firstDot).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: 'Sljedeća slika' }).click();
    await expect(secondDot).toHaveAttribute('aria-pressed', 'true');
    await firstDot.click();
    await expect(firstDot).toHaveAttribute('aria-pressed', 'true');
});

test('contact form shows a success state when Web3Forms responds successfully', async ({ page }) => {
    await mockWeb3Forms(page, { success: true });

    await page.goto('/#kontakt');

    await page.getByLabel('Ime i prezime').fill('Test Korisnik');
    await page.getByLabel('Telefon ili email').fill('test@example.com');
    await page.getByLabel('Vrsta projekta').selectOption('Adaptacija');
    await page.getByLabel('Vaša poruka i detalji').fill('Trebam procjenu za adaptaciju stana u Zagrebu.');
    await page.getByRole('button', { name: 'POŠALJI UPIT' }).click();

    await expect(page.getByRole('heading', { level: 3, name: 'Upit je poslan!' })).toBeVisible();
});

test('contact form surfaces API errors accessibly', async ({ page }) => {
    await mockWeb3Forms(page, { success: false, message: 'Testna greška iz servisa.' }, 400);

    await page.goto('/#kontakt');

    await page.getByLabel('Ime i prezime').fill('Test Korisnik');
    await page.getByLabel('Telefon ili email').fill('+385 95 111 2222');
    await page.getByLabel('Vrsta projekta').selectOption('Adaptacija');
    await page.getByLabel('Vaša poruka i detalji').fill('Trebam pomoć s renovacijom kupaonice i kuhinje.');
    await page.getByRole('button', { name: 'POŠALJI UPIT' }).click();

    await expect(page.getByRole('alert')).toContainText('Testna greška iz servisa.');
});

test('contact form falls back cleanly when the Web3Forms key is missing', async ({ page }) => {
    await page.goto('http://127.0.0.1:4174/#kontakt');

    await page.getByLabel('Ime i prezime').fill('Test Korisnik');
    await page.getByLabel('Telefon ili email').fill('test@example.com');
    await page.getByLabel('Vrsta projekta').selectOption('Adaptacija');
    await page.getByLabel('Vaša poruka i detalji').fill('Molim vas javite se oko ponude za adaptaciju.');
    await page.getByRole('button', { name: 'POŠALJI UPIT' }).click();

    await expect(page.getByRole('alert')).toContainText('Obrazac trenutno nije dostupan. Kontaktirajte nas telefonom ili emailom.');
});
