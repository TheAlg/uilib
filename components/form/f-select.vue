<template lang="">
  <select
    v-model="selected"
    :multiple="multiple"
    :size="view"
    :disabled="disabled"
    :class="['form-select', computedSize]"
    @change="
      (val) => {
        selected = val.target.value
        $emit('changed', val.target.value)
      }
    "
  >
    <option v-for="(option, index) in options" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { getOptions } from 'utils/bootstrap'

export interface Props {
  options: Array<{ key: string; value: string }>
  value?: string
  size?: string
  multiple?: boolean
  view?: number
  disabled?: boolean
  playground?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
  size: '',
  multiple: false,
  view: 1,
  disabled: false,

  playground: false
})

const emit = defineEmits<{
  (e: 'init', value: object): void
  (e: 'changed', value: object): void
}>()

const selected = ref(props.value)

const computedSize = computed(() => {
  return size('form-select', props.size)
})

onBeforeMount(() => {
  if (props.playground) {
    emit('init', { size: getOptions('size') })
    console.log('playground for select component initialized')
  }
})
</script>
<style lang=""></style>
