<template>
  <div class="bd-snippet bd-code-snippet">
    <slot />
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
@media (min-width: 768px) {
  .bd-code-snippet {
    margin-right: 0;
    margin-left: 0;
    border-radius: 0.375rem;
  }
}
.bd-code-snippet {
  margin: 0 1rem 1.5rem;
}
@media (min-width: 768px) {
  .bd-snippet {
    border-width: 1px;
  }
}
.bd-example-snippet {
  border: solid var(--bs-border-color);
  border-width: 1px 0;
}
</style>
