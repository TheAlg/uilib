<template>
  <n-button
    v-if="hidden"
    data-bs-toggle="offcanvas"
    :data-bs-target="'#' + Uuid"
    :aria-controls="Uuid"
    :icon="'check'"
  />

  <div
    :class="['offcanvas', class_position, { show: visible }]"
    tabindex="-1"
    :id="Uuid"
    aria-labelledby="offcanvasLabel"
  >
    <div v-if="header" class="offcanvas-header">
      <h5 v-if="title" class="offcanvas-title" id="">{{ title }}</h5>
      <n-button
        v-if="withCloseButton"
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        icon="close"
      />
    </div>
    <div class="offcanvas-body">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import nButton from 'components/native/c-button.vue'
import { computed, onMounted, ref } from 'vue'
import { generateId } from '../../../utils/functions'

export interface Props {
  title?: string
  withCloseButton?: boolean
  visible?: boolean
  position?: string
  scroll?: boolean
  type?: string
  setId?: Function | undefined
  toggleIcon?: string | any
  main?: boolean
  id?: string

  playground?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  withCloseButton: false,
  visible: false,
  //start, end, bottom, top
  position: 'start',
  scroll: false,
  //fixed, collapse, over, push
  type: 'anchor',
  toggleIcon: undefined,
  main: false,
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
const header = computed(() => {
  return props.title || props.withCloseButton
})
const class_position = computed(() => {
  return 'offcanvas-' + props.position
})
</script>
