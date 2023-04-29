<template>
  <div class="navbar" data-aos="fade-down" data-aos-duration="500" data-aos-delay="1300">
    <ul>
      <li><a href="#home-page">HOME</a></li>
      <li><a href="#about-page">ABOUT</a></li>
      <li><a href="#project-page">PROJECT</a></li>
      <li><a href="#contact-page">CONTACT</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style>
.navbar {
  width: 100vw;
  padding: 1rem;
  font-family: sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 2px;
  position: fixed;
  top: 0;
  z-index: 1;
}
.navbar::before {
  content: "";
  width: inherit;
  top: 0;
  left: 0;
  height: 100%;
  background-image: linear-gradient(var(--bgcolor1), rgba(255, 0, 0, 0));
  position: absolute;
  z-index: -1;
}

.navbar ul {
  display: flex;
  background-color: transparent;
  padding: 2rem;
  justify-content: end;
  margin-right: 1rem;
}

.navbar li {
  list-style: none;
  margin-left: 3rem;
}
.navbar a {
  text-decoration: none;
  color: var(--fontcolor);
  padding: 0.5rem;
  border-radius: 5px;
}

.navbar a:hover {
  color: var(--bgcolor1);
  background-color: var(--fontcolor);
  transition: 0.5s;
}

@media only screen and (max-width: 992px) {
  .navbar {
    font-size: 1.5em;
  }
}

@media only screen and (max-width: 767px) {
  .navbar {
    font-size: 0.8em;
    margin-right: 0.5rem;
    font-weight: 300;
  }

  .navbar ul {
    padding: 0.5rem;
    justify-content: center;
  }

  .navbar li {
    margin-left: 0.5rem;
  }
}

@media screen and (max-width: 300px) {
  .navbar {
    font-size: 0.5em;
  }
  .navbar ul {
    padding: 0.2rem;
  }
  .navbar li {
    margin-left: 0.2rem;
  }
}
</style>
