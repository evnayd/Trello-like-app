<template>
  <app-header></app-header>

  <main class="container">
    <router-view></router-view>
    <top-button @top="moveTop" v-show="isTopButtonVisible"></top-button>
  </main>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import TopButton from "./components/TopButton.vue";

export default {
  components: {
    AppHeader,
    TopButton,
  },

  data() {
    return {
      isTopButtonVisible: false,
    };
  },
  methods: {
    moveTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    },
    scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        this.isTopButtonVisible = true;
      } else {
        this.isTopButtonVisible = false;
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.scrollFunction);
  },
};
</script>

<style>
html {
  height: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  color: #4a4b4f;
  background-color: #59c0d1;
  font-family: "Nunito Sans", "Helvetica", sans-serif;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.container {
  margin: 0 auto;
  max-width: 1400px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 100px;
  padding-bottom: 20px;
}
</style>
