var attr = require('attr');
var playbackOf = require("./playback-of");
var track = require("./track");
var playing = attr();

module.exports = {
  play: play,
  pause: track.pause,
  onPlay: track.onPlay,
  onEnd: track.onEnd,
  playback: playing
};

function play (url) {
  if (!url && playing()) return track.resume();

  if (!/^\w+\:\/\//.test(url)) {
    url = 'http://' + url;
  }

  var Playback = playbackOf(url);

  if (!Playback) throw new Error('Unable to recognize '+ url + '. Sorry!');

  track.pause();
  track.destroy();

  playing(Playback(url));
  track.source(playing());
}
