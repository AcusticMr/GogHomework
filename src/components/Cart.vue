<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="cart" :class="{'cart--hover' : hover}">
    <div class="cart__cart-icon">
      <v-icon class="cart__icon" name="shopping-cart" />

      <span class="cart__counter" v-if="cart.length > 0">
        {{ cart.length }}
      </span>
    </div>

    <div v-show="hover" class="cart__dropdown">
      <div v-if="cart.length === 0" class="cart__dropdown-header">
        <h4>NO ITEMS IN CART - ADD SOME :)</h4>
      </div>

      <div v-else class="cart__dropdown-header">
        <h4 class="cart__items-count">{{ cart.length }} ITEMS IN CART</h4>

        <span class="cart__cart-value">
          {{ cartValue | price }}
        </span>

        <div @click="clearCart" class="cart__remove-all">
          CLEAR CART
        </div>
      </div>

      <div class="cart__item-list">
        <div v-for="item in cart"  :key="item.id" class="cart__dropdown-item">
          <img @click="redirect(item.redirectUrl)" class="cart__item-img" :src="item.cartImgUrl" alt="product-img">

          <div class="cart__item-description">
            <div class="cart__item-title">
              {{ item.title }}
            </div>

            <span @click="removeFromCart(item)" class="cart__item-remove">Remove</span>
          </div>

          <div class="cart__item-value">
            <span v-if="item.discountedValue" class="price-button__label">{{ item.discountedValue | price }}</span>

            <span v-else class="price-button__label">{{ item.baseValue | price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      hover: false
    }
  },

  computed: {
    ...mapState({
      'cart': state => state.Cart.cart,
    }),

    cartValue() {
      let value = 0

      this.cart.forEach(item => {
        if(item.discountedValue) {
          value += item.discountedValue;
        } else {
          value += item.baseValue;
        }
      })

      return value;
    }
  },

  methods: {
    ...mapActions({
      'clearCart': 'Cart/clearCart',
      'removeFromCart': 'Cart/removeFromCart'
    }),

    redirect(redirectUrl) {
      this.$router.push(redirectUrl);
    }
  }
}
</script>

<style lang="sass">
$cart-icon-size: 80px
$dropdown-width: 550px

.cart
  $this: &

  display: flex
  position: relative
  justify-content: center
  align-items: center
  height: $cart-icon-size
  width: $cart-icon-size
  
  &--hover
    background-color: #fff

  &__cart-icon
    display: flex
    justify-content: center
    align-items: center
    cursor: pointer

  &__icon
    height: 24px
    margin-right: 4px

  &__dropdown
    position: absolute
    top: $cart-icon-size
    right: 0
    box-sizing: border-box
    width: $dropdown-width
    z-index: 1
    background-color: #fff

  &__dropdown-header
    width: $dropdown-width
    display: flex
    justify-content: space-between
    align-items: center
    box-sizing: border-box
    padding: 8px
    border-bottom: 1px solid #d9d9d9

  &__items-count
    flex-grow: 1

  &__cart-value
    font-size: 20px
    font-weight: bold
    margin-right: 8px

  &__remove-all
    display: flex
    justify-content: center
    align-items: center
    width: 200px
    height: 50px
    background-color: blueviolet
    border-radius: 4px
    color: #ffffff
    cursor: pointer

  &__dropdown-item
    display: flex
    padding: 8px
    justify-content: space-between
    align-items: center
    border-bottom: 1px solid #d9d9d9

    &:hover
      #{ $this }__item-remove
        display: block

  &__item-img
    cursor: pointer

  &__item-description
    display: flex
    flex-grow: 1
    flex-direction: column
    padding: 8px
    overflow: hidden

  &__item-title
    font-size: 20px
    font-weight: bold
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden

  &__item-remove
    display: none
    color: dimgrey
    text-decoration: underline
    cursor: pointer

  &__item-value
    display: flex
    justify-content: flex-end
    min-width: 64px
    color: #777777
</style>
