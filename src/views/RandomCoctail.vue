<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" :backFunc="goBack">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper :slides-per-view="3" :space-between="50" class="swiper">
              <swiper-slide v-for="(ingredient, key) in ingredients" :key="key">
                <img
                  :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`"
                  alt=""
                />
                <h3 class="name">
                  {{ ingredient }}
                </h3>
              </swiper-slide>
            </swiper>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions || 'No instructions available.' }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import AppLayout from '../components/AppLayout.vue'
import axiosClient from '../plugins/axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
const router = useRouter()

const cocktail = ref(null)

const ingredients = computed(() => {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break

    const ingredient = cocktail.value[`strIngredient${i}`]

    ingredients.push(ingredient)
  }

  return ingredients
})

async function getCocktails() {
  const data = await axiosClient.get(`random.php`)
  cocktail.value = data?.data?.drinks[0]
}

function goBack() {
  router.go(-1)
}

getCocktails()
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.slider
  padding: 50px 0

.swiper
  width: 586px
  &-slide
    display: flex
    justify-content: center
    flex-direction: column
    .name
      text-align: center
</style>
