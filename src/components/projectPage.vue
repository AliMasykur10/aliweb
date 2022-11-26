<template>
  <div class="project-page">
    <div class="list-project">
      <h3>Web Portofolio</h3>
      <div class="content"></div>
    </div>
    <div class="list-project">
      <h3>Web Portofolio</h3>
      <div class="content"></div>
    </div>
    <div class="list-project">
      <h3>Web Portofolio</h3>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: " projectPage",
};
</script>

<style>
/* :root {
  --bgcolor1: #373339;
  --bgcolor2: #49444b;
  --fontcolor: white;
} */

.project-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-project {
  margin: 2rem;
  text-align: center;
}

.content {
  width: 300px;
  height: 350px;
  background-color: var(--fontcolor);
  border-radius: 5px;
}

.list-project h3 {
  font-family: sans-serif;
  font-weight: 400;
  color: var(--fontcolor);
  margin-bottom: 2rem;
  font-size: 30px;
}
</style>
