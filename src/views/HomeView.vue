<template>
  <AppLayout
    imgUrl="/src/assets/img/dawa-cocktail 1.jpg"
    :backFunc="removeIngredients"
    :is-back-button-visible="!!ingredient"
  >
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="rootStore.ingredient"
            placeholder="Choose main ingredient"
            size="large"
            class="select"
            filterable
            allow-create
            @change="getCocktails"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by
          ingredient through our cocktail generator.
        </div>
        <img
          src="/src/assets/img/1665865889_66-podacha-blud-com-p-shot-kokteil-krasivie-foto-71 2.png"
          alt="Coctails"
          class="img"
        />
      </div>
      <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
  {{ getMyName('Rustam') }}
</template>

<script setup>
import AppLayout from '../components/AppLayout.vue'
import CocktailThumb from '../components/CocktailThumb.vue'
import { useRootStore } from '../stores/counter'
import { storeToRefs } from 'pinia'
import { getMyName } from '../plugins/axios/main'

const rootStore = useRootStore()
rootStore.getIngredients()

const { ingredients, ingredient, cocktails } = storeToRefs(rootStore)

function getCocktails() {
  rootStore.getGetCocktails(rootStore.ingredient)
}

function removeIngredients() {
  rootStore.setIngredient(null)
}

getMyName('Rustam')
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.select-wrapper
  margin-top: 50px
  display: flex
  justify-content: center

.select
  border-radius: 4px
  border: 1px solid rgba(255, 255, 255, 0.70)
  background: rgba(217, 217, 217, 0.00)
  width: 220px

.text
  color: $textMuted
  text-align: center
  font-family: 'Raleway'
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 36px
  letter-spacing: 1.6px
  max-width: 516px
  margin-top: 50px

.img
  display: block
  margin: 60px auto 0

.cocktails
  display: flex
  gap: 20px
  flex-wrap: wrap
  max-height: 450px
  margin-top: 50px
  overflow-y: auto
</style>
