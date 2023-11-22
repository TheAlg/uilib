import { TinyEmitter as Emitter } from 'tiny-emitter'
const eventBus = new Emitter()

export default {
  install: (app, options) => {
    app.config.globalProperties.$bus = eventBus
  }
}
