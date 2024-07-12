import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '../views/MainPage.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '/', name: 'home', component: MainPage },
  { path: '/:catchAll(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;