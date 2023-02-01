<template>
  <div class="project-page" id="project-page">
    <div class="list-project" data-aos="fade-right">
      <h3>Web Portofolio</h3>
      <a href="#" target="_blank">
        <div class="content"></div>
      </a>
    </div>
    <div class="list-project" data-aos="fade-right" data-aos-delay="100">
      <h3>Web Portofolio</h3>
      <a href="#" target="_blank">
        <div class="content"></div>
      </a>
    </div>
    <div class="list-project" data-aos="fade-right" data-aos-delay="200">
      <h3>Web Portofolio</h3>
      <a href="#" target="_blank">
        <div class="content"></div>
      </a>
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

.content:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

.list-project h3 {
  font-family: sans-serif;
  font-weight: 400;
  color: var(--fontcolor);
  margin-bottom: 2rem;
  font-size: 30px;
}
</style>
