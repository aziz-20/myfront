import { createRouter, createWebHistory } from 'vue-router'


import Layout from "@/Layout"


 export const dynamicRoutes = [ ]
 export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/login',
    // component: () => import('@/views/login'),
    hidden: false
  },
  {
    path: '/register',
    // component: () => import('@/views/register'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/index'),
        name: 'Index',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path : '/about',
    component : Layout,
   
    children : [
      {
        path : 'about',
        name : 'about',
        component : () => import('@/views/about'),
        meta : {title : 'about', icon : 'dashboard'}
      }
    ]
  } ,
  {
    path : '/menu',
    component : Layout,
   
    children : [
      {
        path : 'menu',
        name : 'menu',
        component : () => import('@/views/system/menu'),
        meta : {title : 'menu', icon : 'dashboard'}
      }
    ]
  },
  {
    path: '/products',
    component : Layout,
    hidden : false,
    children:[
      {  
          path : 'products',
          name : 'products',
          component :() =>import('@/views/system/dept'),
          meta : {title : 'product', icon : 'dashboard', affix : false ,"noCache": true,
          "link": null},
          
      }

    ]
  }
]

const router = createRouter({
  history:  createWebHistory(),
  routes:constantRoutes
})

export default router
