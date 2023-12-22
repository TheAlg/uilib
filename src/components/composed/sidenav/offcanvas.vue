<template>
  <n-button
    v-if="withToggleButton"
    data-bs-toggle="offcanvas"
    :data-bs-target="'#' + Uuid"
    :aria-controls="Uuid"
    :label="toggleButton.label"
    :icon="toggleButton.icon"
  />

  <div
    :class="['offcanvas', class_position, { show: visible }]"
    tabindex="-1"
    :id="Uuid"
    :data-bs-scroll="scroll"
    :data-bs-backdrop="backDrop"
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
import { generateId } from 'utils/functions'

export interface Props {
  title?: string
  withCloseButton?: boolean
  withToggleButton?: boolean | string | { label: ''; icon: '' }
  visible?: boolean
  position?: string
  scroll?: true | false | 'static'
  backDrop?: boolean
  id?: string

  playground?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  withCloseButton: false,
  withToggleButton: false,
  visible: false,
  //start, end, bottom, top
  position: 'start',
  scroll: false,
  backDrop: false,
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
const toggleButton = computed(() => {
  if (typeof props.withToggleButton === 'string') {
    return { label: props.withToggleButton }
  } else if (typeof props.withToggleButton === 'object') {
    return { label: props.withToggleButton.label, icon: props.withToggleButton.icon }
  } else return { label: '', icon: 'menu' }
})
</script>
