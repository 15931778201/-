import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo1',
    name: 'Demo1',
    component: () => import(/* webpackChunkName: "about" */ '../views/demo1.vue')
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: () => import(/* webpackChunkName: "about" */ '../views/demo2.vue')
  },
  {
    path: '/demo3',
    name: 'Demo3',
    component: () => import(/* webpackChunkName: "about" */ '../views/demo3.vue')
  },   
  {
    path: '/demo4',
    name: 'Demo4',
    component: () => import(/* webpackChunkName: "about" */ '../views/demo4.vue')
  },
  {
    path: '/demo5',
    name: 'Demo5',
    component: () => import(/* webpackChunkName: "about" */ '../views/demo5.vue')
  }, 
  {
    path: '/demo6',
    name: 'Demo6',
    component: () => import(/* webpackChunkName: "about" */ '../views/demo6.vue')
  },                       
  {
    path: '/cloudAutoDisaccount',
    name: 'CloudAutoDisaccount',
    component: () => import(/* webpackChunkName: "about" */ '../views/cloudAutoDisaccount.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
