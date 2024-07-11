import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/MainPage.vue'
import About from '../views/AboutPage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: MainPage },
  { path: '/about', name: 'about', component: About },
  { path: '/:catchAll(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router