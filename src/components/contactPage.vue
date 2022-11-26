<template>
  <div class="contact-page">
    <div class="ig">
      <h2>instagram</h2>
      <box-icon type="logo" name="instagram" size="lg" />
    </div>
  </div>
</template>

<script>
import "boxicons";

export default {
  name: "contactPage",
};
</script>

<style>
/* :root {
  --bgcolor1: #373339;
  --bgcolor2: #49444b;
  --fontcolor: white;
} */

.contact-page {
  width: 100%;
  height: 100vh;
  background-color: var(--bgcolor2);
}
</style>
