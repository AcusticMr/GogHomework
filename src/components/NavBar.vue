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
$padding-vertical: 16px
$nav-bar-height: 80px
$nav-item-height: ($nav-bar-height - 2 * $padding-vertical)

.nav-bar
  display: flex
  justify-content: space-between
  align-items: center
  box-sizing: border-box
  height: $nav-bar-height
  padding: 0 150px
  background-color: #d9d9d9
  box-shadow: 0 0 16px black

  &__logo
    height: $nav-item-height
    cursor: pointer
</style>
