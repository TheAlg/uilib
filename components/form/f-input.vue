<template lang="">
  <wrapper
    :direction="computedDirection"
    :label="label"
    :description="description"
    :nowrap="nowrap"
  >
    <template #label>
      <label
        v-if="label"
        :class="computedDirection === 'horizontal' ? 'col-form-label' : 'form-label'"
        :for="id"
        >{{ label }}</label
      >
    </template>
    <input
      :id="id"
      v-model="model"
      :value="value"
      :type="computedType"
      :role="role"
      :class="['form-control', computedSize, innerClass]"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('updated', model)"
      @blur="$emit('blur', model)"
    />
    <template #description>
      <span v-if="description" class="form-text">
        {{ description }}
      </span>
    </template>
  </wrapper>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import wrapper from 'wrappers/f-input.vue'
import { generateId } from '../../utils/functions'
import { boot, getOptions, size } from '../../utils/bootstrap'

export interface Props {
  label?: string | undefined
  uuid?: string
  placeholder?: string
  value?: string
  type?: string
  role?: string
  innerClass?: string
  nowrap?: boolean
  readonly?: boolean
  disabled?: boolean
  description?: string
  size?: string
  direction?: string
  playground?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  placeholder: undefined,
  value: undefined,
  type: 'text',
  nowrap: false,
  readonly: false,
  disabled: false,
  description: '',
  size: '',
  direction: 'horizontal',
  playground: false
})

const emit = defineEmits<{
  (e: 'updated', value: any): void
  (e: 'init', value: object): void
  (e: 'blur', value: object): void
}>()

const id = props.uuid ? ref(props.uuid) : ref(generateId())
const model = ref(props.value)

const computedSize = computed(() => {
  return size('form-control', props.size)
})
const computedDirection = computed(() => {
  return boot(`direction.${props.direction}`)
})
const computedType = computed(() => {
  return boot(`type.input.${props.type}`)
})
onBeforeMount(() => {
  if (props.playground) {
    emit('init', {
      size: getOptions('size'),
      direction: getOptions('direction'),
      type: getOptions('type.input')
    })
  }
})
</script>

<style lang=""></style>
