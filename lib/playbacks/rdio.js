var options = require('../options');
var Playback = require("../playback");
var sdk;

var RdioPlayback = Playback.extend({
  construct: construct,
  play: play,
  pause: pause
});

module.exports = RdioPlayback;

function construct (playback) {
  RdioPlayback.supers.construct(playback);

  if (!sdk) {
    options = options().rdio;
    sdk = require("rdio-js-api")(options.key, options.auth);
  }

  playback.onPlay = sdk.onPlay;
  playback.onEnd = sdk.onEnd;

  sdk.ready(function () {
    playback.onReady.publish();
  });
}

function play (playback) {
  sdk.play(playback.url);
}

function pause (playback) {
  sdk.pause();
}
