<template>
  <div class="about-page" id="about-page">
    <img src="../assets/myphoto.jpg" alt="" id="myphoto" data-aos="fade-up" />
    <div class="identities" data-aos="fade-up" data-aos-delay="100">
      <h3>Hello Dear,</h3>
      <p>
        My name is Ali, I'am a web developer and graphic designer, i possess a unique set of skills that allow me to create visually stunning websites that not only look great but also function seamlessly. I technical knowledge and
        expertise in programming languages such as HTML, CSS, JavaScript, React.js and Vue.js enable me to build responsive and user-friendly websites that are optimized for both desktop and mobile devices.
      </p>
      <a href="#" target="_blank">
        <input type="button" id="cv-download" value="DOWNLOAD CV" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutPage",
};
</script>

<style>
.about-page {
  width: 100vw;
  height: 100vh;
  background-color: var(--bgcolor2);
  display: flex;
  justify-content: center;
  align-items: center;
}

#myphoto {
  width: 500px;
  padding-right: 3rem;
  margin-right: 3rem;
  border-right: 2px solid var(--fontcolor);
}

.identities {
  width: 700px;
}

.identities h3 {
  font-family: sans-serif;
  font-weight: 400;
  color: var(--fontcolor);
  margin-bottom: 2rem;
  font-size: 20px;
  text-transform: uppercase;
}

.identities p {
  color: var(--fontcolor);
  font-family: sans-serif;
  letter-spacing: 1px;
  line-height: 30px;
  font-size: 20px;
}

.identities a {
  width: 120px;
  height: 120px;
  background-color: aquamarine;
}

#cv-download {
  margin-top: 3rem;
  padding: 0.5rem;
  font-family: sans-serif;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;
}

#cv-download:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

@media only screen and (max-width: 1200px) {
  .about-page {
    width: 100vw;
    padding: 3rem;
  }

  #myphoto {
    width: 30vw;
  }

  .identities h3,
  .identities p {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 992px) {
  .about-page {
    width: 100vw;
    padding: 3rem;
    flex-direction: column;
  }

  #myphoto {
    width: 50vw;
    border-right: none;
    border-bottom: 2px solid var(--fontcolor);
    margin: 1rem;
    padding-right: 0;
    padding-bottom: 1rem;
  }

  .identities h3,
  .identities p {
    font-size: 1.3em;
  }
}

@media only screen and (max-width: 767px) {
  .about-page {
    flex-direction: column;
  }

  .identities {
    width: 100vw;
    padding: 2rem 3rem;
  }

  #myphoto {
    width: 50vw;
    border-right: none;
    border-bottom: 2px solid var(--fontcolor);
    margin: 1rem;
    padding-right: 0;
    padding-bottom: 1rem;
  }
  .identities h3 {
    font-size: 1em;
    margin-bottom: 0.7rem;
  }
  .identities p {
    font-size: 0.8em;
    line-height: 25px;
  }
  #cv-download {
    font-size: 15px;
    margin-top: 2rem;
  }
}
</style>
