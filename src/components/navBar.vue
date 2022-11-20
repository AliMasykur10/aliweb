<template>
  <div class="navbar">
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Project</a></li>
      <li><a href="">Contact</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style>
li {
  list-style: none;
  margin-left: 1rem;
}
a {
  text-decoration: none;
}

.navbar ul {
  display: flex;
  background-color: bisque;
  padding: 0.5rem;
}
</style>
