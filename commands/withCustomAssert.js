module.exports.command = function() {
    const path = 'screenshots';
    const screenshotPath = `${path}/test.png`
    this.saveScreenshot(screenshotPath);

    this.assert.customOk(screenshotPath);

    return this;
  };