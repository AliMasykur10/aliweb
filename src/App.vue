<template>
  <div id="app">
    <navBar />
    <homePage />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import homePage from "./components/homePage.vue";
import navBar from "./components/navBar.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    homePage,
    navBar,
  },
};
</script>

<style>
#app {
}
</style>
