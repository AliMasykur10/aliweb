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
.project-page {
  width: 100vw;
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

@media only screen and (max-width: 600px) {
  .project-page {
    flex-direction: column;
  }
  .content {
    width: 40vw;
    height: 30vw;
  }

  .list-project {
    margin: 0.5rem;
  }

  .list-project h3 {
    font-size: 20px;
    margin-block: 1rem;
  }
}
</style>
