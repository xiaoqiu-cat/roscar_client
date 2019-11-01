import Vue from 'vue'
import VueRouter from 'vue-router'
import Ros from '../views/ros/ros.vue'
import About from '../components/about/index.vue'
import Fun from '../components/fun/index.vue'
import Log from '../components/log/index.vue'
import Deving from '../components/deving/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/ros',
    component: Ros,
    children : [
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
