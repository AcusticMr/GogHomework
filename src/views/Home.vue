<template>
  <div class="home">
    <div class="home__banner">
      <banner
        :img-url="banner.imgUrl"
        :redirect-url="banner.redirectUrl"
      />
    </div>
    <div class="home__products">
      <div class="home__products-row">
        <product-card
          v-for="item in products"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default {
  name: 'Home',
  components: {
    Banner,
    ProductCard
  },

  computed: {
    ...mapState({
      'products': state => state.Cart.products,
      'banner': state => state.Cart.banner,
    }),
  }
}
</script>

<style lang="sass">
.home
  height: 100%

  &__products-row
    display: flex
    justify-content: space-between
</style>
