<template>
  <div class="root">
    <div :style="`background-image:url('${props.imgUrl}')`" class="img"></div>
    <div class="main">
      <div class="btn-slot">
        <el-button
          type="primary"
          :icon="Back"
          circle
          class="back"
          @click="backFunc"
          v-if="isBackButtonVisible"
        />
        <el-button class="btn" @click="goForCocktailRandom">Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { Back } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { ROUTES_PATH } from '../router/router'

const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  backFunc: {
    type: Function,
    required: true
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true
  }
})

const route = useRoute()
const router = useRouter()

const routeName = computed(() => route.name)

function goForCocktailRandom() {
  router.push(ROUTES_PATH.COCKTAIL_RANDOM)

  if (routeName.value === ROUTES_PATH.COCKTAIL_RANDOM) {
    router.go()
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root
  display: flex
  min-height: 100vh
  background-color: $background

.img
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover

.main
  width: 50%
  padding: 32px 40px
  position: relative


.btn-slot
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
.btn
  padding: 8px 16px
  background-color: $accent
  border-color: $accent
  font-family: 'Raleway'
  font-size: 16px
  font-weight: 400
  color: $text
  position: absolute
  top: 32px
  right: 40px


  &:hover,
  &:active
    border-color: darken($accent, 10%)
    background-color: darken($accent, 10%)

.back
  background-color: transparent
  border-color: #fff
  &:hover
    background-color: $accent
    border-color: $accent
</style>
