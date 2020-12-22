<template>
  <div @click="emitClick" class="price-button" :class="{ 'price-button--disabled': (state === 'owned') }">
    <span v-if="state === 'owned'" class="price-button__label--disabled">OWNED</span>

    <span v-else-if="state === 'in_cart'" class="price-button__label">IN CART</span>

    <span v-else-if="state === 'available' && discountedValue" class="price-button__label">{{ discountedValue | price }}</span>

    <span v-else class="price-button__label">{{ baseValue | price }}</span>
  </div>
</template>

<script>
export default {
  name: "PriceButton",
  props: {
    state: {
      type: String,
      required: true
    },
    baseValue: {
      type: Number,
      required: true
    },
    discountedValue: {
      type: Number,
      default: 0
    }
  },
  methods: {
    emitClick() {
      if(this.state === 'available') {
        this.$emit('addToCart');
      }
    }
  }
}
</script>

<style lang="sass">
.price-button
  display: flex
  justify-content: center
  align-items: center
  padding: 8px 16px
  color: dimgray
  border: 1px solid dimgray
  border-radius: 4px
  cursor: pointer

  &--disabled
    border-color: lightgrey
    cursor: not-allowed

  &__label
    &--disabled
      color: lightgrey
</style>
