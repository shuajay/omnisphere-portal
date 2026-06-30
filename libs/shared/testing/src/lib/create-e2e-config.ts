import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';

export interface E2EConfigOptions {
  appName: string;
  port: number;
  testDir?: string;
}

export function createE2EConfig(filename: string, options: E2EConfigOptions) {
  const { appName, port, testDir = './src' } = options;
  const baseURL = process.env['BASE_URL'] || `http://localhost:${port}`;

  return defineConfig({
    ...nxE2EPreset(filename, { testDir }),
    use: {
      baseURL,
      trace: 'on-first-retry',
    },
    webServer: {
      command: `npx nx run ${appName}:serve`,
      url: `http://localhost:${port}`,
      reuseExistingServer: true,
      cwd: workspaceRoot,
    },
    projects: [
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
      },
      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
      },
      {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
      },
    ],
  });
}
