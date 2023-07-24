import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component:()=> import('@/views/home.vue')
  },
  {
    path: '/web',
    name: 'home2',
    component:()=> import('@/views/home1.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component:()=> import('@/views/contact.vue')
  },
  {
    path: '/user',
    name: 'user',
    component:()=> import('@/views/user.vue')
  },
  {
    path: '/case',
    name: 'case',
    component:()=> import('@/views/case.vue')
  },
  {
    path: '/join',
    name: 'join',
    component:()=> import('@/views/join.vue')
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  },


  {
    path: '/404',
    name:'404',
    meta:{title:"页面丢失了",keepAlive:true},
    component:()=> import('@/views/404.vue')
  },
  {
    path:'/:pathMatch(.*)',
    redirect: '/404'
  }

]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })


const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})



export default router
