<template>
  <template v-if="wrapp">
    <div class="container-xxl bd-gutter my-md-4 mt-3 bd-layout">
      <aside class="bd-sidebar">
        <slot name="side" />
      </aside>
      <main class="bd-main ps-lg-2">
        <slot name="main" />
      </main>
    </div>
  </template>
  <template v-else>
    <slot name="side" />
  </template>
</template>

<script>
export default {
  props: {
    wrapp: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style lang="css"></style>
