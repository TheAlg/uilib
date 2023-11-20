<template>
  <template v-if="wrapp">
    <div class="container-xxl bd-gutter my-md-4 mt-3 bd-layout">
      <aside class="bd-sidebar">
        <slot name="side"></slot>
      </aside>
      <main class="bd-main ps-lg-2">
        <slot name="main"></slot>
      </main>
    </div>
  </template>
  <template v-else>
    <slot name="side"></slot>
  </template>
</template>

<script>
export default {
  name: "wrapper",
  props: {
    wrapp: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style lang="css"></style>
