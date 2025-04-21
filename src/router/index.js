import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/views/HOME/index.vue'
const router = createRouter({

  history: createWebHashHistory(),

  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/week1/study1',
      name: 'w1_study1',
      component: () => import('@/views/WEEK1/study1.vue')
    },
    {
      path: '/week1/task1',
      name: 'w1_task1',
      component: () => import('@/views/WEEK1/task1.vue')
    },
    {
      path: '/week1/study2',
      name: 'w1_study2',
      component: () => import('@/views/WEEK1/study2.vue')
    },
    {
      path: '/week1/task2',
      name: 'w1_task2',
      component: () => import('@/views/WEEK1/task2.vue')
    },
    {
      path: '/week1/study3',
      name: 'w1_study3',
      component: () => import('@/views/WEEK1/study3new.vue')
    },
    {
      path: '/week1/study4',
      name: 'w1_study4',
      component: () => import('@/views/WEEK1/study4.vue')
    },
    {
      path: '/week1/task3',
      name: 'w1_task3',
      component: () => import('@/views/WEEK1/task3.vue')
    },
    {
      path: '/week1/task4',
      name: 'w1_task4',
      component: () => import('@/views/WEEK1/task4.vue')
    },
    {
      path: '/week2/study1',
      name: 'w2_study1',
      component: () => import('@/views/WEEK2/study1new.vue')
    },
    {
      path: '/week2/task1',
      name: 'w2_task1',
      component: () => import('@/views/WEEK2/task1.vue')
    },
    {
      path: '/week2/study2',
      name: 'w2_study2',
      component: () => import('@/views/WEEK2/study2new.vue')
    },
    {
      path: '/week2/task2',
      name: 'w2_task2',
      component: () => import('@/views/WEEK2/task2.vue')
    },
    {
      path: '/week2/study3',
      name: 'w2_study3',
      component: () => import('@/views/WEEK2/study3.vue')
    },
    {
      path: '/week2/task3',
      name: 'w2_task3',
      component: () => import('@/views/WEEK2/task3.vue')
    },
    {
      path: '/week2/study4',
      name: 'w2_study4',
      component: () => import('@/views/WEEK2/study4.vue')
    },
    {
      path: '/week2/task4',
      name: 'w2_task4',
      component: () => import('@/views/WEEK2/task4.vue')
    },
    {
      path: '/week3/task1',
      name: 'w3_task1',
      component: () => import('@/views/WEEK3/task1new.vue')
    },
    {
      path: '/week3/study1',
      name: 'w3_study1',
      component: () => import('@/views/WEEK3/study1new.vue')
    },
    {
      path: '/week3/task2',
      name: 'w3_task2',
      component: () => import('@/views/WEEK3/task2new.vue')
    },
    {
      path: '/week3/study2',
      name: 'w3_study2',
      component: () => import('@/views/WEEK3/study2new.vue')
    },
    {
      path: '/week3/task3',
      name: 'w3_task3',
      component: () => import('@/views/WEEK3/task3new.vue')
    },
    {
      path: '/week3/study3',
      name: 'w3_study3',
      component: () => import('@/views/WEEK3/study3new.vue')
    },
    //
    {
      path: '/week4/task1',
      name: 'w4_task1',
      component: () => import('@/views/WEEK4/task1new.vue')
    },
    {
      path: '/week4/study1',
      name: 'w4_study1',
      component: () => import('@/views/WEEK4/study1new.vue')
    },
    {
      path: '/week4/task2',
      name: 'w4_task2',
      component: () => import('@/views/WEEK4/task2new.vue')
    },
    {
      path: '/week4/study2',
      name: 'w4_study2',
      component: () => import('@/views/WEEK4/study2new.vue')
    },
    {
      path: '/week4/task3',
      name: 'w4_task3',
      component: () => import('@/views/WEEK4/task3new.vue')
    },
    {
      path: '/week4/study3',
      name: 'w4_study3',
      component: () => import('@/views/WEEK4/study3new.vue')
    },
    //
    {
      path: '/:catchAll(.*)',
      name: 'noFound',
      component: () => import('@/views/NOFOUND/index.vue')
    }
  ]
})

export default router
