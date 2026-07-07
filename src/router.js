// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: { template: '<div></div>' }
    },
    {
      path: '/:section',
      redirect: (to) => ({ path: '/', hash: `#${to.params.section}` })
    }
  ]
})

export default router