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
