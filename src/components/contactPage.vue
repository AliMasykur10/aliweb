<template>
  <div class="contact-page" id="contact-page">
    <div class="social-media">
      <div class="card" data-aos="zoom-out" data-aos-delay="50">
        <h2><a href="https://www.instagram.com/alimasykur10/" style="text-decoration: none; color: white" target="_blank">Instagram</a></h2>
        <a href="https://www.instagram.com/alimasykur10/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/instagram.svg" alt="instagram" />
        </a>
      </div>
      <div class="card" data-aos="zoom-out" data-aos-delay="100">
        <h2>Facebook</h2>
        <a href="https://www.facebook.com/alyfounder.messy/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/facebook.svg" alt="facebook" />
        </a>
      </div>
      <div class="card" data-aos="zoom-out" data-aos-delay="150">
        <h2>Gmail</h2>
        <a href="mailto:alimasykur2001@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="../assets/gmail.svg" alt="gmail" />
        </a>
      </div>
      <div class="card" data-aos="zoom-out" data-aos-delay="200">
        <h2>Github</h2>
        <a href="https://github.com/AliMasykur10" target="_blank" rel="noopener noreferrer">
          <img src="../assets/github.svg" alt="github" />
        </a>
      </div>
      <div class="card" data-aos="zoom-out" data-aos-delay="250">
        <h2>LinkedIn</h2>
        <a href="https://www.linkedin.com/in/ali-masykur-155564219/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/linkedin.svg" alt="linkedin" />
        </a>
      </div>
      <div class="card" data-aos="zoom-out" data-aos-delay="300">
        <h2>Twitter</h2>
        <a href="https://twitter.com/ali_masykur10" target="_blank" rel="noopener noreferrer">
          <img src="../assets/twitter.svg" alt="twitter" />
        </a>
      </div>
      <div class="card" data-aos="zoom-out" data-aos-delay="350">
        <h2>Whatsapp</h2>
        <a href="https://wa.me/6282229593517" target="_blank" rel="noopener noreferrer">
          <img src="../assets/whatsapp.svg" alt="whatsapp" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactPage",
};
</script>

<style>
.contact-page {
  width: 100vw;
  height: 100vh;
  background-color: var(--bgcolor2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-media {
  width: 80%;
  height: auto;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.social-media h2 {
  color: var(--fontcolor);
  font-family: sans-serif;
  letter-spacing: 3px;
  font-size: 30px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
}

.card img {
  width: 10vw;
  margin-top: 2rem;
  padding: 0.3rem;
  background-color: var(--fontcolor);
  border-radius: 20px;
}

.card img:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

@media only screen and (max-width: 767px) {
  .social-media {
    width: 100vw;
  }

  .card {
    margin: 0.5rem;
  }
  .card img {
    width: 25vw;
    border-radius: 5px;
    margin-top: 0.5rem;
  }
  .social-media h2 {
    font-size: 10px;
  }
}

@media only screen and (max-width: 992px) {
  .social-media {
    width: 100vw;
  }
  .card {
    margin: 0.5rem;
  }
  .card img {
    width: 15vw;
  }

  .social-media h2 {
    font-size: 1.3rem;
  }
}
@media only screen and (max-width: 1200px) {
  .social-media {
    width: 100vw;
  }
  .card {
    margin: 1rem;
  }
  .card img {
    width: 15vw;
  }

  .social-media h2 {
    font-size: 1.3rem;
  }
}
</style>
