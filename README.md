## play-url

Unified API for playing Youtube, Rdio, SoundCloud and Mp3 URLs.

```js
player = require('play-url')(/* options */)

player.play('http://www.youtube.com/watch?v=fPjW1nwIdsY')
player.play('https://soundcloud.com/veyasin/mode-xl-bul-karayi')
player.play('http://www.rdio.com/artist/The_Chemical_Brothers/album/Push_The_Button/track/Galvanize/')
player.play('http://tayfabandista.org/player/haydi_barikata.mp3')
```

See `test/index.js` for more info.

## Install

```bash
$ npm install play-url
```

Note: Despite this module using NPM, it is only for web-browsers, not for node.js. [Learn more.](https://github.com/azer/play-url/issues/1)


## API

### require('play-url')(`options`)

Pass SoundCloud and Rdio API keys:

```js
player = require('play-url')({ soundcloud: 'api-key', rdio: { key: 'api-key', auth: 'auth.html' })
```

#### .play(`url`)

```js
player.play('http://www.rdio.com/artist/The_Chemical_Brothers/album/Push_The_Button/track/Galvanize/')
```

#### .pause()

```js
player.pause()
```

#### .playback()

Returns the active playback object.

```js
player.playback.url
// => http://www.youtube.com/watch?v=fPjW1nwIdsY
```

You can subscribe to the changes on it:

```js
player.playback.subscribe(function (newPlayback, oldPlayback) {
  console.log('Started playing %s', newPlayback.url)
})
```

#### .onPlay(`callback`)

```js
player.onPlay(function () {
  player.playback().url
  // => http://www.youtube.com/watch?v=fPjW1nwIdsY
})
```

For once:

```js
player.onPlay.subscribe.once(function () {

})
```

To unsubscribe:

```js
player.onPlay.unsubscribe(`callback`)
```

#### .onEnd(`callback`)
