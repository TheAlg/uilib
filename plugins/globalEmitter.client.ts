import { TinyEmitter as Emitter } from "tiny-emitter";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $global: {
      emit: (event: string, ...args: any[]) => void;
      on: (event: string, listener: (...args: any[]) => void) => void;
      off: (event: string, listener?: (...args: any[]) => void) => void;
    };
  }
}
export default defineNuxtPlugin((context) => {
  // Doing something with nuxtApp
  const Em: Emitter = new Emitter();
  context.vueApp.config.globalProperties.$global = Em;
});
