<template>
  <div class="product-card">
    <div @click="redirect" class="product-card__img-wrapper">
      <img class="product-card__img" :src="imgUrl" alt="product-img">
    </div>

    <div class="product-card__description">
      <div @click="redirect" class="product-card__title">
        <h3>{{ title }}</h3>
      </div>

      <div class="product-card__values">
        <discount-badge v-if="discountedValue" class="product-card__discount" :discount-percentage="discountPercentage" />

        <price-button
          @click="addToCart"
          class="product-card__value"
          :state="state"
          :base-value="baseValue"
          :discounted-value="discountedValue"
          :discount-percentage="discountPercentage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PriceButton from "@/components/PriceButton";
import DiscountBadge from "@/components/DiscountBadge";

export default {
  name: "ProductCard",
  components: {
    PriceButton,
    DiscountBadge
  },
  props: {
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    redirectUrl: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    baseValue: {
      type: Number,
      default: null
    },
    discountedValue: {
      type: Number,
      default: null
    },
    discountPercentage: {
      type: Number,
      default: null
    }
  },
  methods: {
    // banner redirect to item page
    redirect() {
      window.open(this.redirectUrl,"_self");
    },
    addToCart() {

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
    flex-grow: 1
    padding: 8px
    cursor: pointer

    h3
      margin: 0

  &__values
    height: 30%
    display: flex
    justify-content: flex-end
    padding: 8px
    font-size: 20px
</style>
