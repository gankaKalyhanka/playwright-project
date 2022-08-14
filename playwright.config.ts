// @ts-check

//const { devices } = require('@playwright/test');
import type { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
	testDir: './tests',
	testMatch: '**.spec.ts',

	timeout: 30 * 1000,
	expect: {
		timeout: 5000,
	},

	fullyParallel: false,

	reporter: "allure-playwright", //, ['html']],

	use: {
		browserName: 'chromium',		headless: false,
		screenshot: 'only-on-failure',
		trace: 'retain-on-failure',
	},
	//globalSetup: 'src/utils/globalSetup.ts',

	/* Configure projects for major browsers */
	//   projects: [
	//   {
	//     name: 'chromium',
	//     use: {
	//       ...devices['Desktop Chrome'],
	//     },
	//   },

	//   {
	//     name: 'firefox',
	//     use: {
	//       ...devices['Desktop Firefox'],
	//     },
	//   },

	//   {
	//     name: 'webkit',
	//     use: {
	//       ...devices['Desktop Safari'],
	//     },
	//   },

	//   /* Test against mobile viewports. */
	//   // {
	//   //   name: 'Mobile Chrome',
	//   //   use: {
	//   //     ...devices['Pixel 5'],
	//   //   },
	//   // },
	//   // {
	//    name: 'Mobile Safari',
	// use: {
	//   ...devices['iPhone 12'],
	// },
	//   // },

	//   /* Test against branded browsers. */
	//   // {
	//   //   name: 'Microsoft Edge',
	//   //   use: {
	//   //     channel: 'msedge',
	//   //   },
	//   // },
	//   // {
	//   //   name: 'Google Chrome',
	//   //   use: {
	//   //     channel: 'chrome',
	//   //   },
	//   // },
	//  ],

	/* Folder for test artifacts such as screenshots, videos, traces, etc. */
	// outputDir: 'test-results/',

	/* Run your local dev server before starting the tests */
	// webServer: {
	//   command: 'npm run start',
	//   port: 3000,
	// },
};

//module.exports = config

export default config;
