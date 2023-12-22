<template>
  <html :data-bs-theme="theme"></html>
  <header class="navbar navbar-expand-lg bd-navbar sticky-top">
    <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
      <div v-if="menu_id" class="bd-navbar-toggle">
        <n-button
          class="navbar-toggler p-2 border-0"
          type="button"
          data-bs-toggle="offcanvas"
          :data-bs-target="'#' + menu_id"
          :aria-controls="menu_id"
          icon="menu"
          aria-label="Toggle docs navigation"
        />
      </div>

      <a class="navbar-brand p-0 me-0 me-lg-2" href="/" aria-label="logoName"> myLogo </a>

      <sidenav :setId="setId" variant="over" position="end" toggleIcon="more_horiz" title="title">
        <hr class="d-lg-none text-white-50" />
        <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav">
          <li class="nav-item col-6 col-lg-auto">
            <a class="nav-link py-2 px-0 px-lg-2 active" href="/">Library</a>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <a class="nav-link py-2 px-0 px-lg-2" href="/">pages</a>
          </li>
        </ul>

        <hr class="d-lg-none text-white-50" />

        <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
          <li class="nav-item">
            <dropdown label="Theme" :default="theme" :items="themes" @clicked="changeTheme" />
          </li>
        </ul>
      </sidenav>
    </nav>
  </header>
</template>

<script setup lang="ts">
import nButton from 'components/native/c-button.vue'
import sidenav from 'components/composed/c-sidenav.vue'
import dropdown from 'components/native/c-dropdown.vue'
import { ref } from 'vue'

const menu_id = ref<string | null>(null)
const theme = ref<'dark' | 'light'>('dark')

const setId = (id: string) => {
  menu_id.value = id
}
const changeTheme = (event: 'dark' | 'light') => {
  theme.value = event
}
const themes = [
  {
    label: 'light',
    icon: { position: 'before', src: 'light_mode' }
  },
  {
    label: 'dark',
    icon: { position: 'before', src: 'dark_mode' }
  }
]
</script>
<style lang="css">
.bd-navbar {
  padding: 0.75rem 0;
  background-color: transparent;
  box-shadow:
    0 0.5rem 1rem rgba(0, 0, 0, 0.15),
    inset 0 -1px 0 rgba(255, 255, 255, 0.15);
}
.bd-navbar::after {
  position: absolute;
  inset: 0;
  z-index: -1;
  display: block;
  content: '';
  background-image: linear-gradient(
    rgba(var(--bd-violet-rgb), 1),
    rgba(var(--bd-violet-rgb), 0.95)
  );
}
</style>
