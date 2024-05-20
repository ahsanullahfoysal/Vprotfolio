import { createRouter, createWebHistory } from 'vue-router'

import MainView from '@/views/MainView.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ServiceView from '@/views/ServiceView.vue'
import WorkdetailsView from '@/views/WorkdetailsView.vue'
import ResturentDetailsView from '@/views/ResturentDetailsView.vue'
import PortfolioView from '@/views/portfolioView.vue'
import VcommerceView from '@/views/VcommerceView.vue'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      children: [

        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView
        },
        {
          path: '/contact',
          name: 'contact',
          component: ContactView
        },
        {
          path: '/services',
          name: 'services',
          component: ServiceView
        },
        {
          path: '/portfolio',
          name: 'portfolio',
          component: PortfolioView
        },
        {
          path: '/details',
          name: 'details',
          component: WorkdetailsView
        },
        {
          path: '/resdetails',
          name: 'resdetails',
          component: ResturentDetailsView
        },
        {
          path: '/vcommerce',
          name: 'vcommerce',
          component: VcommerceView
        },
      ]
    },
   
   
  ]
})

export default router
