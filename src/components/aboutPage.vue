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

@media only screen and (max-width: 767px) {
  .about-page {
    flex-direction: column;
  }

  .identities {
    width: 100vw;
    padding: 3rem;
  }

  #myphoto {
    width: 70vw;
    border-right: none;
    border-bottom: 2px solid var(--fontcolor);
    margin: 1rem;
    padding-right: 0;
    padding-bottom: 1.5rem;
  }
  .identities h3 {
    font-size: 15px;
    margin-bottom: 1rem;
  }
  .identities p {
    font-size: 3rem;
    line-height: 25px;
  }
  #cv-download {
    font-size: 15px;
    margin-top: 2rem;
  }
}

@media only screen and (max-width: 992px) {
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
</style>
