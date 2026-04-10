import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    headless: true,
    trace: 'retain-on-failure',
  },
  webServer: [
    {
      command: 'node tools/run-vite-dev.mjs --port 4173 --with-web3forms',
      url: 'http://127.0.0.1:4173',
      reuseExistingServer: true,
      timeout: 120000,
    },
    {
      command: 'node tools/run-vite-dev.mjs --port 4174',
      url: 'http://127.0.0.1:4174',
      reuseExistingServer: true,
      timeout: 120000,
    },
  ],
});
