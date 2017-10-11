declare interface Other {
  postMessage: (message: any, targetOrigin: string) => void
}

declare class PostMessageEventEmitter {
  constructor (other: Other, origin: string)

  on (name: string, fn: (data?: any) => void): void
  emit (name: string, data?: any): void
}

export = PostMessageEventEmitter
