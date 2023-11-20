<template>
  <div class="d-flex">
    <CButton
      v-if="!isFixed"
      class="navbar-toggler d-flex d-lg-none order-3 p-2 border-0"
      :data-bs-toggle="b_mode"
      :data-bs-target="'#' + Uuid"
      :aria-controls="Uuid"
      :icon="toggleIcon"
    />
  </div>

  <wrapper :wrapp="isFixed">
    <template #side>
      <div
        :class="[main_class, { show: visible }]"
        tabindex="-1"
        :id="Uuid"
        :data-bs-scroll="scroll"
      >
        <div v-if="title || closeBtn" :class="`${b_mode}-header px-4 pb-0`">
          <h5 v-if="title" :class="`${b_mode}-title`">
            {{ title }}
          </h5>
          <button
            v-if="closeBtn"
            type="button"
            class="btn-close"
            :data-bs-toggle="b_mode"
            :data-bs-target="'#' + Uuid"
            :aria-controls="Uuid"
            aria-label="Close"
          ></button>
        </div>
        <div :class="`${b_mode}-body p-4 pt-0 p-lg-0`">
          <slot></slot>
        </div>
      </div>
    </template>
    <template #main>
      <slot name="main"></slot>
    </template>
  </wrapper>
</template>
<script>
import wrapper from "wrappers/c-sidenav.vue";
export default {
  name: "c-sidenav",
  components: {
    wrapper,
  },
  props: {
    title: {
      type: String,
      default: null,
      required: false,
    },
    closeBtn: {
      type: Boolean,
      default: false,
      required: false,
    },
    visible: {
      type: Boolean,
      default: false,
      required: false,
    },
    //start, end, bottom, top
    position: {
      type: String,
      default: "start",
    },
    scroll: {
      type: Boolean,
      default: true,
      required: false,
    },
    //fixed, collapse, over, push
    variant: {
      type: String,
      default: "over",
      required: false,
    },
    toggleIcon: {
      type: Object,
      required: false,
      default: { position: "after", src: "menu" },
    },
    main: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      Uuid: null,
      fixed_class: ["offcanvas-lg", `offcanvas-${this.position}`],
      sticky_class: [
        "col-auto",
        "col-md-3",
        "col-xl-2",
        "px-sm-2",
        "px-0",
        "bg-dark",
      ],
      pushed_class: "",
      over_class: ["offcanvas", "flex-grow-1", `offcanvas-${this.position}`],
    };
  },
  mounted() {
    this.Uuid = generateId();
    if (this.main) {
      this.$global.emit("main_menu_id", this.Uuid);
    }
  },

  methods: {
    show() {
      this.main_class.push("show");
    },
    hide() {
      this.main_class.pop();
    },
  },

  computed: {
    isFixed() {
      return this.variant === "fixed";
    },
    main_class() {
      let prop = `${this.variant}_class`;
      return this[prop];
    },
    b_mode() {
      if (this.variant === "over" || this.isFixed) {
        return "offcanvas";
      }
    },
  },
};
</script>
