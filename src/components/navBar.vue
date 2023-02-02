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

.navbar {
  width: 100vw;
  padding: 1rem;
  font-family: sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 2px;
  position: fixed;
  top: 0;
  /* background-color: var(--bgcolor1); */
}

.navbar ul {
  display: flex;
  background-color: transparent;
  padding: 2rem;
  justify-content: end;
  margin-right: 1rem;
}

@media only screen and (max-width: 600px) {
  .navbar {
    font-size: 13px;
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
</style>
