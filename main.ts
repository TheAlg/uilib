import nButton from './components/native/c-button.vue'
import dropdown from './components/native/c-dropdown.vue'
import nImg from './components/native/c-img.vue'
import list from './components/native/c-list.vue'
import iSwitch from './components/native/c-switch.vue'
import tree from './components/native/c-tree.vue'
import container from './components/native/c-container.vue'
import styles from './assets/scss/main.scss'
import sidenav from './components/composed/c-sidenav.vue'
import cHeader from './components/composed/c-header.vue'
import cFooter from './components/composed/c-footer.vue'
import offcanvas from './components/composed/sidenav/offcanvas.vue'
import { TinyEmitter as Emitter } from 'tiny-emitter'
const eventBus = new Emitter()
import { createApp } from 'vue'

const app = createApp({})

app.provide(/* key */ 'bus', /* value */ eventBus)

export {
  //native
  nButton,
  dropdown,
  nImg,
  list,
  iSwitch,
  tree,
  container,
  //composed
  cHeader,
  offcanvas,
  sidenav,
  cFooter,
  //forms
  //styles
  styles
}
