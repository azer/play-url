var player = require("../")({
  soundcloud: '3865ac569946ca11ed3745ed08c676d0',
  rdio: {
    key: '3hHANmSYxWw_IiOquHkQ9g',
    auth: '/src/test/auth.html'
  }
});

it('plays a youtube video', function(done){
  player.play('http://www.youtube.com/watch?v=pmaXHWPIovE&list=RD03J23BBMHcOJQ');

  player.onPlay.subscribe.once(function () {
    done();
  });

});

it('plays an mp3', function(done){
  player.play('http://tayfabandista.org/player/haydi_barikata.mp3');

  player.onPlay.subscribe.once(function () {
    setTimeout(function () {
      player.pause();
      done();
    }, 500);
  });
});

it('plays a soundcloud url', function(done){
  player.play('https://soundcloud.com/veyasin/vurhavur-baris-manco-edit');

  player.onPlay.subscribe.once(function () {
    setTimeout(function () {
      player.pause();
      done();
    });
  });
});

it('plays an rdio url', function(done){
  player.play('http://www.rdio.com/artist/Fall_Out_Boy/album/Save_Rock_And_Roll/track/The_Phoenix');

  player.onPlay.subscribe.once(function () {
    player.pause();
    done();
  });
});
