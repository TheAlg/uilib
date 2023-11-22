import { onMounted, provide, inject } from 'vue'
import { TinyEmitter as Emitter } from 'tiny-emitter'

const eventBus = new Emitter()

const provideEventBus = () => {
  provide('bus', eventBus)
}

const useEventBus = () => {
  const eventBus = inject('bus')
  if (!eventBus) {
    provideEventBus
    //throw new Error('Event bus not provided!')
  }
  return eventBus
}

export { provideEventBus, useEventBus }
