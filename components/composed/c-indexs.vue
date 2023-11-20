<template lang="">
  <list :cards="cards" :interactive="true" b-position="between"> </list>
</template>

<script setup lang="ts">
import list from "./library/common/Listing.vue";
</script>

<script lang="ts">
export default {
  components: {
    list,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "This is my first title :)",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          img: "https://www.designbolts.com/wp-content/uploads/2013/02/Nasty-Fabric-Grey-Seamless-Patterns-For-Website-Background.jpg",
        },
        {
          id: 2,
          title: "This is my second title :|",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          img: "https://www.designbolts.com/wp-content/uploads/2013/02/Nasty-Fabric-Grey-Seamless-Patterns-For-Website-Background.jpg",
        },
        {
          id: 3,
          title: "This is my third title :/",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          img: "https://www.designbolts.com/wp-content/uploads/2013/02/Nasty-Fabric-Grey-Seamless-Patterns-For-Website-Background.jpg",
        },
        {
          id: 4,
          title: "This is my fourth title :(",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          img: "https://www.designbolts.com/wp-content/uploads/2013/02/Nasty-Fabric-Grey-Seamless-Patterns-For-Website-Background.jpg",
        },
        {
          id: 5,
          title: "This is my fifth title :'(",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          img: "https://www.designbolts.com/wp-content/uploads/2013/02/Nasty-Fabric-Grey-Seamless-Patterns-For-Website-Background.jpg",
        },
        {
          id: 6,
          title: "This is my sixth title :D",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          img: "https://www.designbolts.com/wp-content/uploads/2013/02/Nasty-Fabric-Grey-Seamless-Patterns-For-Website-Background.jpg",
        },
        {
          id: 7,
          title: "This is my seventh title :D",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          img: "https://www.designbolts.com/wp-content/uploads/2013/02/Nasty-Fabric-Grey-Seamless-Patterns-For-Website-Background.jpg",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="css"></style>
