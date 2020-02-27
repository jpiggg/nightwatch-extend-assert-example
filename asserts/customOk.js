exports.assertion = function(screenshotPath = '') {
  let DEFAULT_MSG = 'Testing if attribute %s of <%s> contains "%s".';
  let MSG_ELEMENT_NOT_FOUND = `${DEFAULT_MSG} Element could not be located.`;
  let MSG_ATTR_NOT_FOUND = `${DEFAULT_MSG} Element does not have a attribute.`;

  this.message = 'hello world';
  this.data = {
      screenshots: [screenshotPath]
  };

  this.expected = function() {
    return true;
  };

  this.pass = function(value) {
    return true;
  };

  this.failure = function(result) {
    let failed = (result === false) ||
      // no such element
      result && (result.status === -1 || result.value === null);

    if (failed) {
      let defaultMsg = MSG_ELEMENT_NOT_FOUND;
      if (result && result.value === null) {
        defaultMsg = MSG_ATTR_NOT_FOUND;
      }
      this.message = 'failed';
    }

    return false;
  };

  this.value = function() {
    return true
  };

  this.command = function(callback) {
    // Example: this.api.getText(definition, callback);

    setTimeout(function() {
      // The object containing a "value" property will be passed to the .value() method to determine the value w
      // which is to be evaluated (by the .evaluate() method)
      callback({
        value: true
      });

    }, 1000);
 };

};
