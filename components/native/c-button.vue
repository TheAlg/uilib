<template lang="">
  <div :class="computedPosition">
    <button
      :class="[
        'btn',
        computedSize,
        computedVariant,
        innerClass,
        { disabled: disabled },
      ]"
      :type="computedType"
      :style="iconObj?.padding"
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
  </div>
</template>

<script setup lang="ts">
import wrapper from "wrappers/c-button.vue";
export interface Props {
  label?: string;
  position?: string;
  size?: string;
  type?: string;
  value?: string;
  uuid?: string;
  variant?: string;
  outline?: boolean;
  disabled?: boolean;
  innerClass?: string;
  icon?: Object | string;

  playground?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  position: "none",
  size: "medium",
  type: "button",
  value: undefined,
  variant: "none",
  outline: false,
  disabled: false,
  innerClass: undefined,
  icon: undefined,
  playground: false,
});

const emit = defineEmits<{
  (e: "init", value: object): void;
  (e: "click", value: any): void;
}>();

const id = props.uuid ? ref(props.uuid) : ref(generateId());

const iconObj = computed(() => {
  if (props.playground) {
    console.log(props.icon, bootstrapIcon(props.icon));
  }
  return bootstrapIcon(props.icon);
});

const computedPosition = computed(() => {
  return getBootValue(`position.button.${props.position}`);
});

const computedSize = computed(() => {
  return bootstrapSize("btn", props.size);
});

const computedVariant = computed(() => {
  return bootstrapButtonVariant("btn", props.variant, props.outline);
});

const computedType = computed(() => {
  return getBootValue(`type.button.${props.type}`);
});

onBeforeMount(() => {
  if (props.playground) {
    emit("init", {
      size,
      icon_position: Object.values(position_icon),
      position: Object.values(position_button),
      type: Object.values(type_button),
      variant: Object.values(variant),
    });
    console.log("playground for button component initialized");
  }
});
</script>
<style lang="css">
.material-icons {
  line-height: unset;
}
</style>
