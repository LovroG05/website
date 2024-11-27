import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HAMView from '@/views/HAMView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Domov',
      component: HomeView,
    },
    {
      path: '/ham',
      name: 'Radioamaterstvo',
      component: HAMView,
    },
  ],
})

export default router
