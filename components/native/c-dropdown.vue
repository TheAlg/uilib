<template lang="">
  <div class="dropdown">
    <n-button
      class="dropdown-toggle"
      id="bd-theme"
      type="button"
      aria-expanded="false"
      data-bs-toggle="dropdown"
      :icon="icon"
      :label="label"
    />

    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
      <li v-for="element in items">
        <n-button
          :class="{ active: valueOf(element) === selected }"
          type="button"
          class="dropdown-item d-flex align-items-center"
          aria-pressed="true"
          :icon="element.icon"
          @click="clicked(valueOf(element))"
          :label="labelOf(element)"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import nButton from 'components/native/c-button.vue'

export default {
  name: 'c-dropdown',
  setup(props) {
    return {
      selected: props.default ? props.default : null
    }
  },
  components: {
    nButton
  },
  props: {
    label: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false
    },
    icon: {
      type: Object,
      required: false
    }
  },
  methods: {
    clicked(value) {
      this.selected = value
      this.$emit('clicked', value)
    },
    valueOf(element) {
      return element.label
    },
    labelOf(element) {
      return element.label
    }
  }
}
</script>
<style lang="css"></style>
