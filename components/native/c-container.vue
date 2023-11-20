<template lang="">
    
    <div class="row g-0">
      <div class="col-md-4">
        <slot>

        </slot>
        <!--img position left or right only -->
      </div>
      <div class="col-md-8">
        <div class="card-img-overlay">
            <slot>

            </slot>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>