<template lang="">
  <FInput
    class="mb-2"
    :value="value"
    size="small"
    @updated="
      (event) => {
        setProperty(k, event);
      }
    "
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
    setProperty: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
