<template lang="">
  <div class="form-check form-switch">
    <FInput
      direction="vertical"
      innerClass="form-check-input"
      role="switch"
      type="checkbox"
      :id="id"
      :value="value"
      @updated="
        value = !value;
        $emit('checked', value);
      "
      :checked="value"
    />
    <label v-if="label" class="form-check-label" :for="id">{{ label }}</label>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["checked"],
  data() {
    return {
      value: this.checked,
      id: generateId(),
    };
  },
};
</script>
<style lang=""></style>
