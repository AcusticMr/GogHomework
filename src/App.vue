<template>
  <div id="app" class="app">
    <nav-bar class="app__nav-bar" />
    <router-view class="app__content"/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: { NavBar }
}
</script>

<style lang="sass">
html,
body
  margin: 0
  padding: 0
  height: 100%

#app
  min-height: 100%
  background-color: #d9d9d9
  font-family: Helvetica, Arial, sans-serif

.app
  &__content
    box-sizing: border-box
    padding: 0 150px
</style>
