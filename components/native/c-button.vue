<template lang="">
  <wrapper :position="computedPosition">
    <button
      :class="['btn', computedSize, computedVariant, innerClass, { disabled: disabled }]"
      :type="computedType"
      :style="iconObj?.padding"
      :data-bs-toggle="dataBsToggle"
      :data-bs-target="dataBsToggle"
      :aria-controls="ariaControls"
      :data-bs-dismiss="dataBsDismiss"
      :aria-label="ariaLabel"
      :value="value"
      @click="$emit('click', value)"
    >
      <template v-if="iconObj?.src && iconObj.position === 'after'">
        {{ label }}
        <i class="align-middle material-icons" :style="iconObj.style">
          {{ iconObj.src }}
        </i>
      </template>
      <template v-else-if="iconObj?.src && iconObj.position === 'before'">
        <i class="align-middle material-icons" :style="iconObj.style">
          {{ iconObj.src }}
        </i>
        {{ label }}
      </template>
      <template v-else-if="iconObj?.src && !label">
        <i class="align-middle material-icons" :style="iconObj.style">
          {{ iconObj.src }}
        </i>
      </template>
      <template v-else>
        {{ label }}
      </template>
    </button>
  </wrapper>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import wrapper from 'wrappers/c-button.vue'
import { generateId } from 'utils/functions'
import { size, variant, icon, boot, getOptions } from 'utils/bootstrap'
export interface Props {
  label?: string
  position?: string
  size?: string
  type?: string
  value?: string
  uuid?: string
  variant?: string
  outline?: boolean
  disabled?: boolean
  innerClass?: string
  icon?: Object | string
  dataBsToggle?: string | null
  dataBsTarget?: string | null
  ariaControls?: string | null
  dataBsDismiss?: string | null
  ariaLabel?: string | null

  playground?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  position: 'none',
  size: 'medium',
  type: 'button',
  value: undefined,
  variant: 'none',
  outline: false,
  disabled: false,
  innerClass: undefined,
  icon: undefined,
  dataBsToggle: null,
  dataBsTarget: null,
  ariaControls: null,

  playground: false
})

const emit = defineEmits<{
  (e: 'init', value: object): void
  (e: 'click', value: any): void
}>()

const id = props.uuid ? ref(props.uuid) : ref(generateId())

const iconObj = computed(() => {
  return icon(props.icon)
})

const computedPosition = computed(() => {
  return boot(`position.button.${props.position}`)
})

const computedSize = computed(() => {
  return size('btn', props.size)
})

const computedVariant = computed(() => {
  return variant('btn', props.variant, props.outline)
})

const computedType = computed(() => {
  return boot(`type.button.${props.type}`)
})

onBeforeMount(() => {
  if (props.playground) {
    emit('init', {
      size,
      icon_position: Object.values(getOptions('size')),
      position: Object.values(getOptions('position.button')),
      type: Object.values(getOptions('type.button')),
      variant: Object.values(getOptions('variant'))
    })
    console.log('playground for button component initialized')
  }
})
</script>
<style lang="scss">

.material-icons {
  line-height: unset;
}
</style>
