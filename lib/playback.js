var Struct = require('new-struct');
var pubsub = require("pubsub");

var Playback = Struct({
  url: '',
  sdk: undefined,
  construct: construct,
  destroy: destroy,
  play: play,
  pause: pause,
  resume: resume
});

module.exports = Playback;

function construct (playback) {
  playback.onReady = pubsub();
  playback.onPlay = pubsub();
  playback.onEnd = pubsub();
}

function destroy (playback) {
}

function play (playback) {
  throw new Error('Not Implemented');
}

function pause (playback) {
  throw new Error('Not Implemented');
}

function resume (playback) {
  playback.play();
}
