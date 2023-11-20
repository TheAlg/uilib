<template lang="">
  <div class="row align-items-center mb-2">
    <div class="col-1">
      <CSwitch
        :checked="checked"
        @checked="
          () => {
            checked = !checked;
            checked === false
              ? deActivateSrc('img', { src: src, position: position })
              : setProperty('img', { src: src, position: position });
          }
        "
      />
    </div>
    <template v-if="checked">
      <div class="col-3">
        <Select
          :options="options"
          size="small"
          :value="position"
          @changed="
            (val) => {
              position = val;
              setProperty('img', { src: src, position: position });
            }
          "
        />
      </div>
      <div class="col">
        <div class="col">
          <FInput
            placeholder="src"
            size="small"
            :value="src"
            @updated="
              (event) => {
                src = event;
                setProperty('img', { src: src, position: position });
              }
            "
          />
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: Object,
      required: true,
    },
    setProperty: {
      type: Function,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      checked: true,
      src: undefined,
      position: "top",
      hiddenSrc: undefined,
    };
  },
  mounted() {
    this.src = this.img.value;
    this.position = this.img.position.value.toLowerCase();
  },
  methods: {
    deActivateSrc(key, value) {
      this.hiddenSrc = value;
      this.setProperty(key, undefined);
    },
  },
  watch: {
    checked(active) {
      if (active) {
        this.src = this.hiddenSrc.src;
        this.position = this.hiddenSrc.position.toLowerCase();
      }
    },
  },
};
</script>
<style lang=""></style>
