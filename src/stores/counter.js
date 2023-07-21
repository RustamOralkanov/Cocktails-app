import axiosClient from '../plugins/axios'
import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [],
    ingredient: null,
    cocktails: []
  }),
  actions: {
    async getIngredients() {
      const data = await axiosClient.get(`list.php?i=list`)
      this.ingredients = data?.data?.drinks
    },
    async getGetCocktails(ingredient) {
      const data = await axiosClient.get(`filter.php?i=${ingredient}`)
      this.cocktails = data?.data?.drinks
    },
    setIngredient(val) {
      this.ingredient = val
    }
  }
})
