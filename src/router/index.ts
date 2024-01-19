import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/detail.vue')
      },
      {
        path: '/shopcar',
        name: 'shopcar',
        component: () => import('../views/shopcar.vue')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my.vue')
      },
    ]
  },
  
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
