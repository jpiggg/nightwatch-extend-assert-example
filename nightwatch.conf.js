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
        host: 'hw-dock-07.tutu.ru',
        port: 4444,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--disable-gpu', '--headless'],
        },
      },
    },
    firefox: {
      selenium: {
        host: 'hw-dock-07.tutu.ru',
        port: 4445,
      },
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {},
      },
    },
    android: {
      selenium: {
        host: 'hw-dock-07.tutu.ru',
        port: 4723,
      },
      desiredCapabilities: {
        browserName: 'Chrome',
        platformName: 'Android',
        platform: 'Android',
        platformVersion: '8.0',
        deviceName: 'AVD1',
        chromeOptions: {
          args: ['--disable-gpu', '--headless'],
        },
      },
    },
  },
}