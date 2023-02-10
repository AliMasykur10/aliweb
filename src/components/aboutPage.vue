<template>
  <div class="about-page" id="about-page">
    <img src="../assets/myphoto.jpg" alt="" id="myphoto" data-aos="fade-up" />
    <div class="identities" data-aos="fade-up" data-aos-delay="100">
      <h3>Hello Dear,</h3>
      <p>
        My name is Ali, I'm a freelancer web developer, content creator, and design graphic. I live in Indonesia a beautifull country. I have 2 year experience being web developer focusing on front end developer. I also have 3 years
        experience being a design graphic
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
:root {
  --bgcolor1: #373339;
  --bgcolor2: #49444b;
  --fontcolor: white;
}

.about-page {
  width: 100vw;
  height: 100vh;
  background-color: var(--bgcolor2);
}

h {
  color: var(--fontcolor);
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
