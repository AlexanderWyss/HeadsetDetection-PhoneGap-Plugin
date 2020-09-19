var exec = require('cordova/exec');

var HeadsetDetection = {
  detect: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "HeadsetDetection", "detect", []);
  },
  registerRemoteEvents: function(actionCallback) {
    // Need to call a native function to start recieve events on android
    exec(null, null, "HeadsetDetection", "registerRemoteEvents", []);
    this.actionCallback = actionCallback;
  },
  remoteHeadsetRemoved: function() {
    console.log('headsetRemoved');
    this.actionCallback && this.actionCallback('headsetRemoved');
  },
  remoteHeadsetAdded: function() {
    console.log('headsetAdded');
    this.actionCallback && this.actionCallback('headsetAdded');
  }
};

module.exports = HeadsetDetection;
