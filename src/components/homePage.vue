<template>
  <div class="homepage">
    <img src="../assets/logo-baruku.jpg" alt="" id="mylogo" />
    <h1>Welcome to My Personal Website</h1>
  </div>
</template>

<script>
export default {
  name: "homePage",
};
</script>

<style>
:root {
  --bgcolor1: #373339;
  --bgcolor2: #49444b;
  --fontcolor: white;
}

.homepage {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img#mylogo {
  width: 250px;
  border-radius: 50%;
  margin-bottom: 2rem;
}

h1 {
  font-family: sans-serif;
  color: var(--fontcolor);
}
</style>
