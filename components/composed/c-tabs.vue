<template lang="">
  <!-- Nav tabs -->
  <ul
    :class="['nav', 'mb-3', 'nav-tabs', mainClass]"
    :id="generateId()"
    role="tablist"
  >
    <li
      v-for="(tab, index) in tabs"
      @click="activeTab = tab"
      class="nav-item"
      role="presentation"
    >
      <button
        :class="['nav-link', { active: index === activeIndex }]"
        :id="tab + '-tab'"
        data-bs-toggle="tab"
        :data-bs-target="'#' + tab"
        type="button"
        role="tab"
        :aria-controls="tab"
        :aria-selected="index === activeIndex"
      >
        {{ tab }}
      </button>
    </li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div
      v-for="(tab, index) in tabs"
      :class="['tab-pane', { active: index === 0 }]"
      :id="tab"
      role="tabpanel"
      :aria-labelledby="tab + '-tab'"
      tabindex="0"
    >
      <slot :name="tab"></slot>
    </div>
  </div>
</template>
<script>
export default {
  setup(props) {
    var mainClass = "";
    if (props.position === "center") {
      mainClass += "justify-content-center";
    }
    return {
      mainClass: mainClass,
    };
  },
  data() {
    return {
      activeTab: "", // Keeps track of the currently active tab
      tabUuid: null,
      buttonUuid: this.buttonUuid + "-tab",
    };
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: false,
      default: 0,
    },
    position: {
      type: String,
      required: false,
      default: "center",
    },
  },
};
</script>
<style lang=""></style>
