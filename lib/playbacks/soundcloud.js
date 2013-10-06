var options = require('../options');
var Playback = require("../playback");
var sdk;

var SoundcloudPlayback = Playback.extend({
  construct: construct,
  play: play,
  pause: pause,
  resume: resume
});

module.exports = SoundcloudPlayback;

function construct (playback) {
  SoundcloudPlayback.supers.construct(playback);

  if (!sdk) {
    sdk = require("soundcloud-stream")(options().soundcloud);
  }

  sdk(playback.url, function (error, sound) {
    playback.sound = sound;
    playback.onReady.publish();
  });
}

function destroy () {}

function play (playback) {
  playback.sound.play({
    onplay: playback.onPlay.publish,
    onfinish: playback.onEnd.publish
  });
}

function resume (playback) {
  playback.sound.resume();
}

function pause (playback) {
  playback.sound.pause();
}
