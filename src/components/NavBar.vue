<template>
  <div class="nav-bar">
    <img @click="logoRedirect" class="nav-bar__logo" src="../assets/logo.png" alt="gog.com logo">
    <div class="nav-bar__cart">cart placeholder</div>
  </div>
</template>

<script>
export default {
name: "NavBar",
methods: {
  // logo redirect to main page
  logoRedirect() {
    window.open("/","_self");
  }
}
}
</script>

<style lang="sass">
.nav-bar
  display: flex
  justify-content: space-between
  box-sizing: border-box
  height: 96px
  padding: 16px 150px
  background-color: #ffffff
  box-shadow: 0 0 16px black

  &__logo
    height: 64px
    cursor: pointer

  &__cart
    height: 64px
    width: 64px
</style>