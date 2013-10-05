## play-url

Unified API for Youtube, SoundCloud and Rdio.

```js
player = require('play-url')({ soundcloud: 'api-key', rdio: { key: 'api-key', auth: 'auth.html' })

player.play('any rdio, soundcloud, or youtube url');
```

See `test/index.js` for more info.

## Install

```bash
$ npm install play-url
```

## API

### play(`url`)
### pause()
### onPlay(`callback`)
### onEnd(`callback`)
