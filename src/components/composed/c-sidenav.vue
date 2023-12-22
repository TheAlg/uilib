<template>
  <n-button
    v-if="withToggleButton"
    class="navbar-toggler d-flex d-lg-none order-3 p-2 border-0"
    :data-bs-toggle="offcanvas"
    :data-bs-target="'#' + Uuid"
    :aria-controls="Uuid"
    :label="toggleButton.label"
    :icon="toggleButton.icon"
  />
  <wrapper :wrapp="anchor">
    <template #side>
      <div
        :class="[mainClass, positionClass, { show: visible }]"
        tabindex="-1"
        :id="Uuid"
        :data-bs-scroll="scroll"
      >
        <div
          v-if="title || withCloseButton"
          :class="offcanvas ? 'offcanvas-header' : 'header'"
          class="px-4 pb-0"
        >
          <h5 v-if="title" :class="offcanvas ? 'offcanvas-title' : 'title'">
            {{ title }}
          </h5>
          <n-button
            v-if="withCloseButton"
            type="button"
            class="btn-close"
            :data-bs-toggle="offcanvas"
            :data-bs-target="'#' + Uuid"
            :aria-controls="Uuid"
            aria-label="Close"
            icon="close"
          ></n-button>
        </div>
        <div class="p-4 pt-0 p-lg-0" :class="offcanvas ? 'offcanvas-body' : 'body'">
          <slot />
        </div>
      </div>
    </template>
    <template #main>
      <slot name="main" />
    </template>
  </wrapper>
</template>
<script setup lang="ts">
import nButton from 'components/native/c-button.vue'
import wrapper from 'wrappers/c-sidenav.vue'
import { generateId } from 'utils/functions'
import { computed, onMounted, ref } from 'vue'
export interface Props {
  title?: string
  withCloseButton?: boolean
  withToggleButton?: boolean | string | { label: ''; icon: '' }
  visible?: boolean
  position?: string
  scroll?: boolean
  type?: string
  setId?: Function | undefined
  toggleIcon?: string | any
  id?: string

  playground?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  withCloseButton: false,
  withToggleButton: false,
  visible: true,
  //start, end, bottom, top
  position: 'start',
  scroll: false,
  //fixed, collapse, over, push
  type: 'hidden',
  toggleIcon: undefined,
  id: ''
})

const Uuid = ref<string | undefined>(undefined)

onMounted(() => {
  Uuid.value = generateId()
  if (props.setId) {
    props.setId(Uuid.value)
  }
})
const anchor = computed(() => {
  return props.type === 'anchor'
})
const hidden = computed(() => {
  return props.type === 'hidden'
})
const offcanvas = computed(() => {
  return anchor || hidden ? 'offcanvas' : ''
})
const mainClass = computed(() => {
  return boot('type.sidenav.' + props.type)
})
const toggleButton = computed(() => {
  if (typeof props.withToggleButton === 'string') {
    return { label: props.withToggleButton }
  } else if (typeof props.withToggleButton === 'object') {
    return { label: props.withToggleButton.label, icon: props.withToggleButton.icon }
  } else return { label: '', icon: 'menu' }
})
const positionClass = computed(() => {
  return offcanvas ? 'offcanvas-' + props.position : ''
})
//const anchor = ['offcanvas-lg', `offcanvas-position`]
const sticky_class = ['col-auto', 'col-md-3', 'col-xl-2', 'px-sm-2', 'px-0', 'bg-dark']
const pushed_class = ''
//const hidden = ['offcanvas', 'flex-grow-1', `offcanvas-${props.position}`]
</script>
