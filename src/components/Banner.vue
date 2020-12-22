<template>
  <div class="banner">
    <div class="banner__title">
      <h3>{{ title }}</h3>
    </div>

    <div @click="redirect" class="banner__img-wrapper">
      <img class="banner__img" :src="imgUrl" alt="banner-img">
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    title: {
      type: String,
      default: 'GAME OF THE WEEK'
    },
    imgUrl: {
      type: String,
      required: true
    },
    redirectUrl: {
      type: String,
      required: true
    }
  },
  methods: {
    // banner redirect to item page
    redirect() {
      this.$router.push(this.redirectUrl);
    }
  }
}
</script>

<style lang="sass">
.banner
  display: flex
  margin-top: 32px
  padding-bottom: 16px
  flex-direction: column
  height: 550px
  width: 100%

  &__title
    margin: 0 0 32px

    h3
      margin: 0

  &__img-wrapper
    position: relative
    height: 100%
    width: 100%
    overflow: hidden
    cursor: pointer

  &__img
    width: 100%
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
