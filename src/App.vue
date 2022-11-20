<template>
  <div id="app">
    <navBar />
    <homePage />
    <aboutPage />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import homePage from "./components/homePage.vue";
import navBar from "./components/navBar.vue";
import aboutPage from "./components/aboutPage.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    homePage,
    navBar,
    aboutPage,
  },
};
</script>

<style></style>
