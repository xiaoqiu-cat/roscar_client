import Vue from 'vue'
import VueRouter from 'vue-router'

import Ros from '../views/ros/ros.vue'
import Home from '../views/ros/home/Home'
import About from '../components/about/index.vue'
import Fun from '../components/fun/index.vue'
import Log from '../components/log/index.vue'
import Deving from '../components/deving/index.vue'


import Cms from '../views/cms/cms.vue'
import Admin from '../views/cms/admin/admin.vue'
import Login from '../views/cms/login/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Ros,
    children : [
      {
        path: '/',
        component: Home
      },
      {
        path: '/about',
        component: About
      },{
        path: '/fun',
        component: Fun
      },{
        path: '/log',
        component: Log
      },{
        path: '/deving',
        component : Deving
      },
    ]
  },
  {
    path : '/cms',
    component : Cms,
    children : [
      {
        path: '/',
        component : Admin
      },
      {
        path : 'login',
        component: Login
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
