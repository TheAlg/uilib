<template lang="">
  <template v-if="direction === 'horizontal'">
    <div class="row align-items-center" :class="{ 'flex-nowrap': nowrap }">
      <div v-if="label" class="col-auto">
        <slot name="label" />
      </div>
      <div class="col">
        <slot />
      </div>
      <div v-if="description" class="col">
        <slot name="description" />
      </div>
    </div>
  </template>
  <template v-else>
    <slot name="label" />
    <slot />
    <slot name="description" />
  </template>
</template>
<script>
export default {
  name: "wrapper",
  props: {
    direction: {
      required: true,
      type: String,
    },
    label: {
      required: false,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    nowrap: {
      required: true,
      type: Boolean,
    },
  },
};
</script>

<style lang="css">
.form-select-sm {
  padding-bottom: 0.2759rem !important;
}
</style>
