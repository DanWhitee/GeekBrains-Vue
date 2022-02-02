import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'calculator',
    component: () => import('@/views/calculator')
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('@/views/todos')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
