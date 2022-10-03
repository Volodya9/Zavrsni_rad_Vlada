import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/schedules',
      name: 'schedules',
      component: ()=>import('../views/Schedules.vue')
    },
    {
      path: '/groups',
      name: 'groups',
      component: ()=>import('../views/Groups.vue')
    },
    {
      path: '/news/:id',
      name: 'news',
      component: ()=>import('../views/News.vue'),
      props: true
    },
    {
      path: '/teams',
      name: 'teams',
      component: ()=>import('../views/Teams.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: ()=>import('../views/SignIn.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('../views/Login.vue')
    }
  ]
})

export default router
