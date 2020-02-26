module.exports = {
    'Demo test': function (browser) {
      browser
        .url('https://www.google.com/')
        .withCustomAssert()
        .end();
    }
  };