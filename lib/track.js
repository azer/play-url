var attr = require("attr");
var pubsub = require('pubsub');

var onPlay = pubsub();
var onEnd = pubsub();
var source = attr();

source.subscribe(function (newSource, oldSource) {
  newSource.onPlay.subscribe.once(onPlay.publish);
  newSource.onEnd.subscribe.once(onEnd.publish);

  if (newSource.isReady) {
    play();
    return;
  }

  newSource.onReady.subscribe.once(play);
});

module.exports = {
  play: play,
  source: source,
  destroy: destroy,
  pause: pause,
  resume: resume,
  onPlay: onPlay,
  onEnd: onEnd
};

function destroy () {
  if (source()) source().destroy();
}


function play () {
  if (source()) source().play();
}

function resume () {
  if (source()) source().resume();
}

function pause () {
  if (source()) source().pause();
}
