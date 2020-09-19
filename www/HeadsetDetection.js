var exec = require('cordova/exec');

var HeadsetDetection = {
  detect: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "HeadsetDetection", "detect", []);
  },
  registerRemoteEvents: function(actionCallback, errorCallback) {
    exec(actionCallback, errorCallback, "HeadsetDetection", "registerRemoteEvents", []);
  },
};

module.exports = HeadsetDetection;
