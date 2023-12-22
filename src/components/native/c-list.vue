<template lang="">
  <ul class="list-group">
    <template v-for="item in items">
      <li v-if="item.key && item.value" class="list-group-item">
        <div>{{ item.key }} : {{ item.value }}</div>
      </li>
    </template>
  </ul>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: false,
      default: [],
    },
  },
};
</script>
<style lang=""></style>
