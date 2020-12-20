<template>
  <span class="discount-badge">
    - {{ discountPercentage }}%
  </span>
</template>

<script>
export default {
  name: "DiscountBadge",
  props: {
    discountPercentage: {
      type: Number,
      required: true
    },
  }
}
</script>

<style lang="sass">
.discount-badge
  display: flex
  justify-content: center
  align-items: center
  width: 64px
  border-radius: 4px
  margin-right: 8px
  color: white
  background-color: seagreen
</style>
