<template>
  <div id="app">
    <navBar />
    <homePage />
    <aboutPage />
    <projectPage />
    <contactPage />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import homePage from "./components/homePage.vue";
import navBar from "./components/navBar.vue";
import aboutPage from "./components/aboutPage.vue";
import projectPage from "./components/projectPage.vue";
import contactPage from "./components/contactPage.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    homePage,
    navBar,
    aboutPage,
    projectPage,
    contactPage,
  },
};
</script>

<style></style>
