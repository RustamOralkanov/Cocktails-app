<template>
  <div class="root">
    <RouterLink :to="`/cocktail/${props.cocktail.idDrink}`">
      <div :style="`background-image:url('${props.cocktail.strDrinkThumb}');`" class="pic"></div>
    </RouterLink>
    <div class="name">{{ props.cocktail.strDrink }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true
  }
})
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root
    width: calc(( 100% - 40px ) / 3)

.pic
    width: 120px
    height: 120px
    background-position: center
    background-repeat: no-repeat
    background-size: 100%
    margin: 0 auto

.name
    color: $text
    text-align: center
    font-family: 'Raleway'
    font-size: 16px
    font-weight: 400
    letter-spacing: 1.6px
    margin-top: 16px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
</style>
