<template lang="">
  <template v-if="position">
    <div :class="position"><slot /></div>
  </template>
  <template v-else>
    <slot />
  </template>
</template>
<script>
export default {
  props: {
    position: {
      required: false,
      type: String,
      default: ''
    }
  }
}
</script>
<style lang=""></style>
