import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import User from '@/components/User'
import Cards from '@/components/Cards'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/users',
      name: 'User',
      component: User
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    }
  ]
})
