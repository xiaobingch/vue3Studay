import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import StartView from '../views/StartView.vue'


//创建路由对象
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      
      path: '/',
      name: 'start',
      component: StartView
    },
    {
      //path： 路由路径 必填
      //component ：组件  必填
      //name：名称
      path: '/home/:name/:age',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      //按需引入：如果没有访问about页面，就不会加载，节约性能
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/DetailView.vue')
    }
  ]
})

export default router
