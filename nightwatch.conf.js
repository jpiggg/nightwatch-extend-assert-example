module.exports = {
  src_folders: ["src"],
  custom_commands_path: "./commands/",
	custom_assertions_path: "./asserts/",
  selenium: {
    start_process: false,
    log_path: './reports/visual-regression',
    host: '127.0.0.1',
    port: 4444,
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: 'reports/visual-regression',
      },
      log_screenshot_data: true,
      globals: {
        waitForConditionTimeout: 5000,
      },
      desiredCapabilities: {
        resolution: '1360x10000',
        browserName: 'chrome',
        chromeOptions: {
          args: ['--disable-gpu', '--headless'],
        },
      },
    },
    chrome: {
      screenshots: {
        enabled: true,
        path: 'reports/visual-regression',
      },
      selenium: {
        host: '127.0.0.1',
        port: 4444,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--disable-gpu', '--headless'],
        },
      },
    },
  },
}