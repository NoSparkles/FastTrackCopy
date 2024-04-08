import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import ApieMusView from '../views/ApieMusView/ApieMusView.vue'
import ITProgramosView from '../views/ITProgramosView/ITProgramosView.vue'
import IgudziuKursaiView from '../views/IgudziuKursaiView/IgudziuKursaiView.vue'
import KalbuKursaiView from '../views/KalbuKursaiView/KalbuKursaiView.vue'
import Finansavimas from '../views/FinansavimasView/FinansavimasView.vue'
import KontaktaiView from '../views/KontaktaiView/KontaktaiView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: ApieMusView
  },
  {
    path: '/it-programos',
    component: ITProgramosView,
  },
  {
    path: '/igudziu-kursai',
    component: IgudziuKursaiView
  },
  {
    path: '/kalbu-kursai',
    component: KalbuKursaiView
  },
  {
    path: '/finansavimas',
    component: Finansavimas
  },
  {
    path: '/kontaktai',
    component: KontaktaiView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
