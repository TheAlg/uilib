<template>
  <template v-if="direction === 'horizontal'">
    <div :class="['card', align, variant]">
      <slot name="header" />
      <div class="row g-0">
        <div class="col-md-4">
          <slot name="img" />
        </div>
        <div class="col-md-8">
          <slot name="body" />
        </div>
      </div>
      <slot name="footer" />
    </div>
  </template>

  <template v-else>
    <div :class="['card', align, variant]">
      <slot name="header" />
      <slot v-if="position === 'top'" name="img" />
      <slot name="body" />
      <slot v-if="position === 'bottom'" name="img" />
      <slot name="footer" />
    </div>
  </template>
</template>
<script>
export default {
  name: "wrapper",
  props: {
    direction: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: false,
    },
    align: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="css"></style>
