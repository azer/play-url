var playbacks = require('./playbacks');

module.exports = playbackOf;

function playbackOf (url) {
  return playbacks[service(url)];
}

function service (url) {
  if (/soundcloud/.test(url)) return 'soundcloud';
  if (/rdio/.test(url)) return 'rdio';
  if (/youtube/.test(url)) return 'youtube';
  if (/\.mp3$/.test(url)) return 'mp3';
}
