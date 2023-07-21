import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATH } from './router'
import HomeView from '../views/HomeView.vue'
import CocktailView from '../views/CocktailView.vue'
import RandomCoctail from '../views/RandomCoctail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATH.HOME,
      name: ROUTES_PATH.HOME,
      component: HomeView
    },
    {
      path: ROUTES_PATH.COCKTAIL,
      name: ROUTES_PATH.COCKTAIL,
      component: CocktailView
    },
    {
      path: ROUTES_PATH.COCKTAIL_RANDOM,
      name: ROUTES_PATH.COCKTAIL_RANDOM,
      component: RandomCoctail
    }
  ]
})

export default router
