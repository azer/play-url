var playbackOf = require("./playback-of");
var track = require("./track");

module.exports = {
  play: play,
  pause: track.pause,
  onPlay: track.onPlay,
  onEnd: track.onEnd
};

function play (url) {
  var Playback = playbackOf(url);

  if (!Playback) throw new Error('Unable to recognize '+ url + '. Sorry!');

  track.pause();
  track.destroy();

  track.source(Playback(url));
}
