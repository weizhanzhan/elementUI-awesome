import Vue from 'vue'
import Router from 'vue-router'
import Form from './views/form/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'form',
      component: Form
    },
    {
      path: '/table',
      name: 'form',
      component: () => import('./views/table')
    }
  ]
})
