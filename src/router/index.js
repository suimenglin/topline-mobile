import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/usevant',
      component: () => import('@/views/usevant')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@/views/layout'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home')
        }
      ]
    }
  ]
})
