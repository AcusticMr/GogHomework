<template>
  <div class="product-card">
    <div @click="redirect" class="product-card__img-wrapper">
      <img class="product-card__img" :src="item.imgUrl" alt="product-img">
    </div>

    <div class="product-card__description">
      <div @click="redirect" class="product-card__title">
        <h3>{{ item.title }}</h3>
      </div>

      <div class="product-card__values">
        <discount-badge v-if="item.discountedValue && item.state === 'available'" class="product-card__discount" :discount-percentage="item.discountPercentage" />

        <price-button
          @addToCart="addToCart"
          class="product-card__value"
          :state="item.state"
          :base-value="item.baseValue"
          :discounted-value="item.discountedValue"
          :discount-percentage="item.discountPercentage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from  'vuex';

import PriceButton from "@/components/PriceButton";
import DiscountBadge from "@/components/DiscountBadge";

export default {
  name: "ProductCard",
  components: {
    PriceButton,
    DiscountBadge
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      'addItem': 'Cart/addItem',
    }),

    // banner redirect to item page
    redirect() {
      window.open(this.redirectUrl,"_self");
    },

    addToCart() {
      this.addItem(this.item);
    }
  }
}
</script>

<style lang="sass">
.product-card
  display: flex
  flex-direction: column
  width: 300px
  height: 300px
  border: 1px solid black
  background-color: #fff

  &__img-wrapper
    width: 100%
    height: 180px
    cursor: pointer

  &__description
    display: flex
    flex-direction: column
    justify-content: space-between
    flex-grow: 1

  &__title
    max-height: 32px
    padding: 8px
    cursor: pointer
    text-overflow: ellipsis
    overflow: hidden
    word-break: break-word

    h3
      margin: 0

  &__values
    height: 30%
    display: flex
    justify-content: flex-end
    padding: 8px
    font-size: 20px
</style>
