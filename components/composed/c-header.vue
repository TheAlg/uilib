<template>
  <Html :data-bs-theme="theme"> </Html>
  <header class="navbar navbar-expand-lg bd-navbar sticky-top">
    <nav
      class="container-xxl bd-gutter flex-wrap flex-lg-nowrap"
      aria-label="Main navigation"
    >
      <div v-if="menu_id" class="bd-navbar-toggle">
        <CButton
          class="navbar-toggler p-2 border-0"
          type="button"
          data-bs-toggle="offcanvas"
          :data-bs-target="'#' + menu_id"
          :aria-controls="menu_id"
          :icon="{ position: 'after', src: 'menu' }"
          aria-label="Toggle docs navigation"
        />
      </div>

      <a class="navbar-brand p-0 me-0 me-lg-2" href="/" aria-label="Bootstrap">
        myLogo
      </a>

      <CSidenav
        variant="over"
        position="end"
        :toggleIcon="{ position: 'before', src: 'more_horiz' }"
        title="sometitle"
      >
        <hr class="d-lg-none text-white-50" />
        <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav">
          <li class="nav-item col-6 col-lg-auto">
            <NuxtLink class="nav-link py-2 px-0 px-lg-2 active" :to="'/'"
              >Library</NuxtLink
            >
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <NuxtLink class="nav-link py-2 px-0 px-lg-2 active" :to="'/'"
              >pages</NuxtLink
            >
          </li>
        </ul>

        <hr class="d-lg-none text-white-50" />

        <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
          <li class="nav-item">
            <CDropdown
              label="Theme"
              :default="theme"
              :items="[
                {
                  label: 'light',
                  icon: { position: 'before', src: 'light_mode' },
                },
                {
                  label: 'dark',
                  icon: { position: 'before', src: 'dark_mode' },
                },
              ]"
              @clicked="changeTheme"
            />
          </li>
        </ul>
      </CSidenav>
    </nav>
  </header>
</template>

<script>
export default {
  name: "c-header",
  mounted() {
    this.$global.on("main_menu_id", (id) => (this.menu_id = id));
  },
  data() {
    return {
      menu_id: null,
      theme: "dark",
    };
  },
  methods: {
    changeTheme(event) {
      this.theme = event;
    },
  },
};
</script>
<style lang="css">
.bd-navbar {
  padding: 0.75rem 0;
  background-color: transparent;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
    inset 0 -1px 0 rgba(255, 255, 255, 0.15);
}
.bd-navbar::after {
  position: absolute;
  inset: 0;
  z-index: -1;
  display: block;
  content: "";
  background-image: linear-gradient(
    rgba(var(--bd-violet-rgb), 1),
    rgba(var(--bd-violet-rgb), 0.95)
  );
}
</style>
