<template lang="">
  <Select
    class="mb-2"
    :options="options"
    size="small"
    :value="value"
    @changed="(val) => setProperty(k, val)"
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
      type: String,
      required: true,
    },
    options: {
      type: Array,
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
