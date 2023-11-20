<template lang="">
  <CSwitch
    class="mb-2"
    :checked="value"
    @checked="(val) => setProperty(k, val)"
  />
</template>
<script>
export default {
  props: {
    k: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
    setProperty: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
