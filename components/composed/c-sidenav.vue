<template>
  <div class="d-flex">
    <n-button
      v-if="!isFixed"
      class="navbar-toggler d-flex d-lg-none order-3 p-2 border-0"
      :data-bs-toggle="b_mode"
      :data-bs-target="'#' + Uuid"
      :aria-controls="Uuid"
      :icon="toggleIcon"
    />
  </div>

  <wrapper :wrapp="isFixed">
    <template #side>
      <div
        :class="[main_class, { show: visible }]"
        tabindex="-1"
        :id="Uuid"
        :data-bs-scroll="scroll"
      >
        <div v-if="title || closeBtn" :class="`${b_mode}-header px-4 pb-0`">
          <h5 v-if="title" :class="`${b_mode}-title`">
            {{ title }}
          </h5>
          <n-button
            v-if="closeBtn"
            type="button"
            class="btn-close"
            :data-bs-toggle="b_mode"
            :data-bs-target="'#' + Uuid"
            :aria-controls="Uuid"
            aria-label="Close"
          ></n-button>
        </div>
        <div :class="`${b_mode}-body p-4 pt-0 p-lg-0`">
          <slot></slot>
        </div>
      </div>
    </template>
    <template #main>
      <slot name="main"></slot>
    </template>
  </wrapper>
</template>
<script setup lang="ts">
import nButton from 'components/native/c-button.vue'
import wrapper from 'wrappers/c-sidenav.vue'
import { generateId } from '../../utils/functions'
import { computed, onMounted, ref } from 'vue'

export interface Props {
  title?: string
  closeBtn?: boolean
  visible?: boolean
  position?: string
  scroll?: boolean
  variant?: string
  setId?: Function | undefined
  toggleIcon?: string | any
  main?: boolean
  id?: string

  playground?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  closeBtn: false,
  visible: false,
  //start, end, bottom, top
  position: 'start',
  scroll: false,
  //fixed, collapse, over, push
  variant: 'over',
  toggleIcon: { position: 'after', src: 'menu' },
  main: false,
  id: ''
})
onMounted(() => {
  Uuid.value = generateId()
  if (props.setId) {
    props.setId(Uuid.value)
  }
})
const show = () => {
  main_class.value.push('show')
}
const hide = () => {
  main_class.pop()
}
const isFixed = () => {
  return props.variant === 'fixed'
}
const main_class = computed(() => {
  let prop = `${props.variant}_class`
  return prop
})
const b_mode = computed(() => {
  if (props.variant === 'over' || isFixed()) {
    return 'offcanvas'
  }
})
const offcanvas = computed(() => {
  return props.variant === 'over' || props.variant === 'fixed'
})
const Uuid = ref<string | null>(null)
const fixed_class = ['offcanvas-lg', `offcanvas-${props.position}`]
const sticky_class = ['col-auto', 'col-md-3', 'col-xl-2', 'px-sm-2', 'px-0', 'bg-dark']
const pushed_class = ''
const over_class = ['offcanvas', 'flex-grow-1', `offcanvas-${props.position}`]
</script>
