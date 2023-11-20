<template lang="">
  <card
    img="https://www.designbolts.com/wp-content/uploads/2013/02/Nasty-Fabric-Grey-Seamless-Patterns-For-Website-Background.jpg"
    title="card title"
    subtitle="card sub title"
    header="header"
    direction="horizontal"
    content="With supporting text below as a natural lead-in to additional content"
    :order="['img', 'title', 'body']"
  >
    <c-button primary value="Go somewhere" />
    <a href="#" class="card-link">Another link</a>
  </card>
</template>
<script>
import card from "./library/common/c-card.vue";
import cButton from "./library/native/c-button.vue";
import sidenav from "./library/common/c-sideNav.vue";
export default {
  props: {},
  components: {
    card,
    cButton,
    sidenav,
  },
};
</script>
<style lang=""></style>
