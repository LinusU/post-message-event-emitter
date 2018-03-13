# Post Message Event Emitter

An `EventEmitter` interface on top of `postMessage`.

## Installation

```sh
npm install --save post-message-event-emitter
```

## Usage

parent:

```js
const PostMessageEventEmitter = require('post-message-event-emitter')

const other = window.open('http://localhost:3001/other-page')
const events = new PostMessageEventEmitter(other, 'http://localhost:3001')

events.on('hello', (name) => {
  console.log(`Hello, ${name}!`)

  events.emit('ping')
})
```

child:

```js
const PostMessageEventEmitter = require('post-message-event-emitter')

const events = new PostMessageEventEmitter(window.opener, 'http://localhost:3000')

events.emit('hello', 'World')

events.on('ping', () => {
  console.log('Received ping')
})
```

## API

### `new PostMessageEventEmitter(other, origin)`

Create a new `PostMessageEventEmitter` instance. The `other` parameter is usually `window.opener` or the return value from `window.open`. The `origin` should be set to the origin with which you want to communicate with.

### `.on(name, fn)`

Register a handler for an event with the name `name`. The provided `fn` will be called every time the other side calls `emit`.

### `.emit(name, data)`

Emit an event to the other side. Their handler will be invoked with the `data` provided.
