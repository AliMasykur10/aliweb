<template>
  <div id="app">
    <navBar />
    <homePage />
    <aboutPage />
  </div>
</template>

<script>
import homePage from "./components/homePage.vue";
import navBar from "./components/navBar.vue";
import aboutPage from "./components/aboutPage.vue";
<<<<<<< HEAD
=======
import projectPage from "./components/projectPage.vue";
import contactPage from "./components/contactPage.vue";
import AOS from "aos";
import "aos/dist/aos.css";
>>>>>>> responsive2.1

export default {
  name: "App",
  components: {
    // HelloWorld,
    homePage,
    navBar,
    aboutPage,
  },
};

AOS.init();
</script>

<style>
:root {
  --bgcolor1: #373339;
  --bgcolor2: #49444b;
  --fontcolor: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  background-color: #373339;
}
</style>
