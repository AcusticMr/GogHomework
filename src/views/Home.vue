<template>
  <div class="home">
    <div class="home__banner">
      <banner
        img-url="https://images.gog-statics.com/5bc58089e14771de0c1b872c529c8b8b150b87fe28c7e4db1856389526849bb3.jpg"
        redirect-url="/game/witcher_adventure_game"
      />
    </div>
    <div class="home__products">
      products card
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  name: 'Home',
  components: {
    Banner,
  },
}
</script>

<style lang="sass">
.home
  height: 100%
</style>
