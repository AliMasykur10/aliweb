<template>

  <div class="homepage" id="home-page">
    <img src="../assets/logo-baruku.jpg" alt="" id="mylogo" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" />
    <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800" v-rellax="{ speed: 2 }">Welcome to My Personal Website</h1>
  </div>
</template>

<script>
export default {
  name: "homePage",
};
</script>

<style>
.homepage {
  width: 100v;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 250px;
  border-radius: 50%;
  margin-bottom: 2rem;
}

h1 {
  font-family: sans-serif;
  color: var(--fontcolor);
  text-align: center;
  font-size: 50px;
}
@media screen and (max-width: 1200px) {
  h1 {
    font-size: 2em;
  }

  img#mylogo {
    width: 20vw;
  }
}

@media screen and (max-width: 992px) {
  h1 {
    width: 70vw;
    font-size: 3em;
  }
}

@media only screen and (max-width: 767px) {
  h1 {
    width: 70vw;
    font-size: 1.5em;
  }
  img#mylogo {
    width: 50vw;
  }
}

@media screen and (max-width: 300px) {
  h1 {
    font-size: 1.3em;
  }
}
</style>
