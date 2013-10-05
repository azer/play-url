var hide = require('hide');
var Playback = require("../playback");
var sdk;

var YoutubePlayback = Playback.extend({
  construct: construct,
  play: play,
  pause: pause,
  destroy: destroy
});

module.exports = YoutubePlayback;

function construct (playback) {
  YoutubePlayback.supers.construct(playback);

  if (!sdk) {
    sdk = require('youtube-video');
  }

  var options = {
    onPlay: playback.onPlay.publish,
    onEnd: playback.onEnd.publish
  };

  sdk(playback.url, options, function (error, video) {
    if (error) return this.onError.publish(error);

    hide('#youtube-video');

    playback.sdk = video;
    playback.onReady.publish();
  });
}

function destroy () {
  var el = document.getElementById('youtube-video');
  el.parentNode.removeChild(el);
}

function play (playback) {
  playback.sdk.playVideo();
}

function pause (playback) {
  playback.sdk.pauseVideo();
}
