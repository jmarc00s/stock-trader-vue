import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Inicio
  },
  {
    path: '/portifolio',
    component: () => import('../views/Portifolio.vue')
  },
  {
    path: '/acoes',
    component: () => import('../views/Acoes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
