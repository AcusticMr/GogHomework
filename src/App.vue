<template>
  <div id="app">
    <nav-bar />
    <div>Content</div>
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
body,
#app
  margin: 0
  padding: 0
  height: 100%


#app
  background-color: #d9d9d9
  font-family: Helvetica, Arial, sans-serif
</style>
