<template>
  <div class="game">
    {{ this.$route.params.itemName }} - info page
  </div>
</template>

<script>
export default {
  name: 'Game',
}
</script>

<style lang="sass">
.game
  height: 100%
</style>
