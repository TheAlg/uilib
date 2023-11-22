<template lang="">
  <div :class="sizing">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { size } from '../../utils/bootstrap'

export interface Props {
  fluid?: boolean
  size?: string

  playground?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  fluid: false,
  size: '',

  playground: false
})

const sizing = computed(() => {
  if (props.fluid) {
    return 'container-fluid'
  }
  if (props.size) {
    return size('container', props.size)
  }
  return 'container'
})
</script>
<style lang=""></style>
