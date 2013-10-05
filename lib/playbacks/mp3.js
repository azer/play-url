var audio = require("play-audio")();
var pubsub = require('pubsub');
var Playback = require("../playback");
var onPlay = pubsub();
var onEnd = pubsub();

audio.on('play', onPlay.publish).on('ended', onEnd.publish);

var MP3Playback = Playback.extend({
  construct: construct,
  play: play,
  pause: pause
});

module.exports = MP3Playback;

function construct (playback) {
  MP3Playback.supers.construct(playback);
  playback.onPlay = onPlay;
  playback.onEnd = onEnd;
  playback.isReady = true;
  audio.src(playback.url);
}

function destroy () {}

function play (playback) {
  audio.play();
}

function pause (playback) {
  audio.pause();
}
