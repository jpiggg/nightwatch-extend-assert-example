module.exports.command = function() {
    const path = 'screenshots';
    const screenshotPath = `${path}/test.png`
    this.saveScreenshot(screenshotPath);

    this.assert.customOk(true, 'Some message', screenshotPath);

    return this;
  };