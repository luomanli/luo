import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import post from '@/pages/post'
import transNotic from '@/pages/home/transNotic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/transNotic',
      name: 'transNotic',
      component: transNotic
    }
  ]
})
