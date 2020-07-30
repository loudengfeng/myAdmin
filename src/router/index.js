import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
    {
      path: '//',
      component: () => import('../components/common/index.vue'),
      meta: {
        title: '自述文件'
      },
      children:[{
        path:'/index',
        component: () => import('../views/Index.vue'),
        meta:{
          title:'首页'
        }
      }]
    },
    {
      path: '/login',
      component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue'),
      meta: {
        title: '登录'
      }
    }
]

const router = new VueRouter({
  routes
})

export default router
