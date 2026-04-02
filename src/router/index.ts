import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/buffet',
  },
  {
    path: '/buffet',
    name: 'Buffet',
    component: () => import('@/views/BuffetOrder/BuffetOrder.vue'),
  },
  {
    path: '/bento',
    name: 'Bento',
    component: () => import('@/views/BentoOrder/BentoOrder.vue'),
  },
  {
    path: '/set-meal',
    name: 'SetMeal',
    component: () => import('@/views/SetMealOrder/SetMealOrder.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
