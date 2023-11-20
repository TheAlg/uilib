<template lang="">
  <img
    ref="img"
    :src="src"
    :alt="alt"
    :class="[{ 'img-fluid': responsive }, { 'img-thumbnail': highlight }]"
  />
</template>

<script lang="ts">
export default {
  props: {
    alt: {
      type: String,
      default: null,
      required: false,
    },
    src: {
      type: String,
      required: true,
    },
    highlight: {
      type: Boolean,
      default: false,
      required: false,
    },
    responsive: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>
<style lang=""></style>
