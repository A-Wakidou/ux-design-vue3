import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NFTList from '@/views/NFTList.vue'
import NFTWhat from '@/views/NFTWhat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nft-list',
      name: 'nft-list',
      component: NFTList
    },
    {
      path: '/nft-what',
      name: 'nft-what',
      component: NFTWhat
    },
  ]
})

export default router
