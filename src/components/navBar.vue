<template>
  <div class="navbar">
    <ul>
      <li><a href="">HOME</a></li>
      <li><a href="">ABOUT</a></li>
      <li><a href="">PROJECT</a></li>
      <li><a href="">CONTACT</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style>
:root {
  --bgcolor1: #373339;
  --bgcolor2: #49444b;
  --fontcolor: white;
}

* {
  box-sizing: border-box;
}

li {
  list-style: none;
  margin-left: 3rem;
}
a {
  text-decoration: none;
  color: var(--fontcolor);
  padding: 0.5rem;
  border-radius: 5px;
}

a:hover {
  color: var(--bgcolor1);
  background-color: var(--fontcolor);
}

.navbar {
  width: 100%;
  padding: 0.5rem;
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
</style>
