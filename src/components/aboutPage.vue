<template>
  <div class="about-page">
    <h1>this is about page</h1>
  </div>
</template>

<script>
export default {
  name: "aboutPage",
};
</script>

<style>
:root {
  --bgcolor1: #373339;
  --bgcolor2: #49444b;
  --fontcolor: white;
}

.about-page {
  width: 100%;
  height: 100vh;
  background-color: var(--bgcolor2);
}

h {
  color: var(--fontcolor);
}
</style>
